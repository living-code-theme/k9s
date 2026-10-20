<!-- living-code-readme:1 -->
# 🐕 Living Code for k9s

**Calm slate. Living color.** Living Code for k9s. Repository-owned theme files, installation instructions and four color flavors.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Previews

<table data-lc-flavors>
<tr>
<td width="50%" valign="top">
<strong>Night</strong><br><sub>Dark · full palette</sub><br><br>
<a href="images/night.png"><img src="images/night.png" alt="k9s running Living Code Night" width="640"></a>
</td>
<td width="50%" valign="top">
<strong>Frost</strong><br><sub>Dark · softer chroma</sub><br><br>
<a href="images/frost.png"><img src="images/frost.png" alt="k9s running Living Code Frost" width="640"></a>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<strong>Paper</strong><br><sub>Light · near-white slate</sub><br><br>
<a href="images/paper.png"><img src="images/paper.png" alt="k9s running Living Code Paper" width="640"></a>
</td>
<td width="50%" valign="top">
<strong>Signal</strong><br><sub>Dark · teal accent</sub><br><br>
<a href="images/signal.png"><img src="images/signal.png" alt="k9s running Living Code Signal" width="640"></a>
</td>
</tr>
</table>

Select any preview to view the image at full size.

## Installation

Download the skins, then select one in `config.yaml`:

```sh
curl -fsSL --create-dirs --output-dir "${XDG_CONFIG_HOME:-$HOME/.config}/k9s/skins" -O "https://raw.githubusercontent.com/living-code-theme/k9s/main/living-code-{night,frost,paper,signal}.yaml"
```

```yaml
k9s:
  ui:
    skin: living-code-night
```

On macOS, where `XDG_CONFIG_HOME` is usually unset, k9s keeps its config in `~/Library/Application Support/k9s`, so use this line instead (and edit `config.yaml` there):

```sh
curl -fsSL --create-dirs --output-dir ~/Library/Application\ Support/k9s/skins -O "https://raw.githubusercontent.com/living-code-theme/k9s/main/living-code-{night,frost,paper,signal}.yaml"
```

`k9s info` prints the directory your install uses.

## Flavors

Expand a flavor for its full-size preview and activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

<p><a href="images/night.png"><img src="images/night.png" alt="k9s running Living Code Night" width="1280"></a></p>

```yaml
k9s:
  ui:
    skin: living-code-night
```

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

<p><a href="images/frost.png"><img src="images/frost.png" alt="k9s running Living Code Frost" width="1280"></a></p>

```yaml
k9s:
  ui:
    skin: living-code-frost
```

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

<p><a href="images/paper.png"><img src="images/paper.png" alt="k9s running Living Code Paper" width="1280"></a></p>

```yaml
k9s:
  ui:
    skin: living-code-paper
```

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

<p><a href="images/signal.png"><img src="images/signal.png" alt="k9s running Living Code Signal" width="1280"></a></p>

```yaml
k9s:
  ui:
    skin: living-code-signal
```

</details>

## Configuration

See [k9s's documentation](https://k9scli.io) for application settings and reload behavior. The activation instructions above identify each supported flavor; keep your other application configuration.

## Compatibility

This port supplies theme files for k9s, not the application itself. Install the application separately and follow the installation instructions for its supported configuration format.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/k9s/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque
