// Native format regressions, exercised through this port's generator.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {readFile} from 'node:fs/promises';
import test from 'node:test';
import {resolveAll,ANSI_ORDER} from '../scripts/palette.mjs';
import {generate} from '../src/generate.mjs';

const flavors = resolveAll();

const unquote = (v) => v.replace(/^(['"])(.*)\1$/, "$2");

function parseYaml(text) {
  const root = {}, stack = [{ indent: -1, node: root }];
  const lines = text.split("\n").filter((l) => l.trim() && !l.trim().startsWith("#"));
  for (const [n, raw] of lines.entries()) {
    const indent = raw.match(/^ */)[0].length, line = raw.trim();
    while (stack.at(-1).indent >= indent) stack.pop();
    const parent = stack.at(-1).node;
    if (line.startsWith("- ")) { assert.ok(Array.isArray(parent), `list item outside a list: ${raw}`); parent.push(unquote(line.slice(2))); continue; }
    const m = line.match(/^([\w.-]+):(?: (.*))?$/);
    assert.ok(m, `not a YAML mapping line: ${raw}`);
    if (m[2] === undefined) {
      const next = lines[n + 1]?.trim().startsWith("- ") ? [] : {};
      parent[m[1]] = next;
      stack.push({ indent, node: next });
    } else parent[m[1]] = unquote(m[2]);
  }
  return root;
}

const k9sSkin=f=>generate([f])[0].content;

const HEX = /^#[0-9a-f]{6}$/i;

const k9s = {files: f=>generate([f]).filter(x=>x.path!=='living-code.json'), all: fs=>generate(fs).filter(x=>x.path==='living-code.json'||x.path==='theme.css'||x.path.startsWith('snippets/')), install:readFileSync(new URL('../README.md',import.meta.url),'utf8')};

test("k9s skins are YAML with the skin sections and hex colors", () => {
  for (const f of flavors) {
    const y = parseYaml(k9sSkin(f));
    const s = y.k9s;
    for (const k of ["body", "prompt", "info", "dialog", "frame", "views"]) assert.ok(s[k], k);
    for (const k of ["border", "menu", "crumbs", "status", "title"]) assert.ok(s.frame[k], k);
    for (const k of ["charts", "table", "xray", "yaml", "logs"]) assert.ok(s.views[k], k);
    assert.equal(s.body.fgColor, f.r("fg"));
    assert.equal(s.body.bgColor, f.r("bg"));
    assert.equal(s.frame.status.errorColor, f.r("error"));
    const colors = [...k9sSkin(f).matchAll(/"(#[^"]+)"/g)].map((m) => m[1]);
    assert.ok(colors.length > 40);
    for (const c of colors) assert.match(c, HEX);
  }
  assert.match(k9s.install, /skin: living-code-night/);
  assert.match(k9s.install, /Library\/Application\\ Support\/k9s\/skins/);
});
