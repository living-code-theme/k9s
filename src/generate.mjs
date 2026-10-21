// This port owns its application mappings. Inputs come only from the pinned local palette.


function k9sSkin(f) {
  const q = (h) => `"${h}"`;
  const fg = q(f.r("fg")), bg = q(f.r("bg")), acc = q(f.r("accent")), border = q(f.r("border"));
  const info = q(f.r("info")), warn = q(f.r("warning")), err = q(f.r("error")), ok = q(f.r("success"));
  const orchid = q(f.c("orchid")), muted = q(f.r("fgMuted"));
  return `# ${f.name}: https://github.com/living-code-theme/k9s
k9s:
  body:
    fgColor: ${fg}
    bgColor: ${bg}
    logoColor: ${acc}
  prompt:
    fgColor: ${fg}
    bgColor: ${q(f.r("bgAlt"))}
    suggestColor: ${q(f.r("fgSubtle"))}
  info:
    fgColor: ${orchid}
    sectionColor: ${fg}
  dialog:
    fgColor: ${fg}
    bgColor: ${bg}
    buttonFgColor: ${bg}
    buttonBgColor: ${acc}
    buttonFocusFgColor: ${bg}
    buttonFocusBgColor: ${warn}
    labelFgColor: ${warn}
    fieldFgColor: ${fg}
  frame:
    border:
      fgColor: ${border}
      focusColor: ${q(f.r("borderActive"))}
    menu:
      fgColor: ${fg}
      keyColor: ${acc}
      numKeyColor: ${orchid}
    crumbs:
      fgColor: ${bg}
      bgColor: ${muted}
      activeColor: ${acc}
    status:
      newColor: ${info}
      modifyColor: ${acc}
      addColor: ${ok}
      errorColor: ${err}
      highlightColor: ${warn}
      killColor: ${q(f.r("fgSubtle"))}
      completedColor: ${q(f.r("fgSubtle"))}
    title:
      fgColor: ${fg}
      bgColor: ${bg}
      highlightColor: ${warn}
      counterColor: ${acc}
      filterColor: ${orchid}
  views:
    charts:
      bgColor: default
      defaultDialColors:
        - ${acc}
        - ${err}
      defaultChartColors:
        - ${acc}
        - ${err}
      resourceColors:
        cpu:
          - ${acc}
          - ${info}
        mem:
          - ${warn}
          - ${q(f.c("copper"))}
    table:
      fgColor: ${fg}
      bgColor: ${bg}
      cursorFgColor: ${fg}
      cursorBgColor: ${q(f.r("selection"))}
      markColor: ${q(f.c("copper"))}
      header:
        fgColor: ${q(f.r("fgAlt"))}
        bgColor: ${bg}
        sorterColor: ${q(f.c("aqua"))}
    xray:
      fgColor: ${fg}
      bgColor: ${bg}
      cursorColor: ${q(f.r("selection"))}
      cursorTextColor: ${fg}
      graphicColor: ${acc}
    yaml:
      keyColor: ${acc}
      colonColor: ${q(f.r("punctuation"))}
      valueColor: ${fg}
    logs:
      fgColor: ${fg}
      bgColor: ${bg}
      indicator:
        fgColor: ${fg}
        bgColor: ${q(f.c("surface0"))}
        toggleOnColor: ${ok}
        toggleOffColor: ${q(f.r("fgSubtle"))}
`;
}

const k9s = {
files: (f) => [{ path: `${f.slug}.yaml`, content: k9sSkin(f) }]
};

export function generate(flavors) {
  return [...flavors.flatMap(f => k9s.files(f)), ...(k9s.all?.(flavors) ?? [])].filter(f => !["LICENSE", "README.md", "package.json", "extension.toml"].includes(f.path.split("/").at(-1)));
}
