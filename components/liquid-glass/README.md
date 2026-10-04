# Liquid Glass system

The root layout loads `glass-system.css` and mounts `LiquidEffects` once. All
routes and React portals inherit the same tokens from `body.kedi-glass`. No GPU
renderer is created for ordinary buttons or chips. `HeroGlassLens` is the only
GPU lens and snapshots only the hero background.

## Adding a component

Use `GlassSurface` for shared panel/background materials. `asChild` decorates an
existing semantic element without an extra wrapper; `material="panel"` preserves
the base colour/radius, `surface` uses the tone's glass panel, and `background`
adds a subtle reflection without full-page blur. `tone="light"` or `"dark"`
sets inherited tokens for its controls and fields.

- `data-glass="control"`: button-shaped links and controls. The shared `Button`
  already supplies it. Keep its colour, dimensions and action in the component.
- `data-glass="chip"`: static labels. Do not give these a button role or tab stop.
- `data-glass="surface"`: a panel or popover.
- `data-glass="panel"`: preserve the component base colour with a glass overlay.
- `data-glass="background"`: subtle reflection for page/section backgrounds.
- `data-glass="field"`: input/textarea or an icon+input wrapper. Set the inner
  input to `data-glass="none"` to avoid duplicate material layers.
- `data-glass="menu"`: a dropdown panel. Shared dropdown/navigation components
  already supply it, including content mounted in portals.
- `data-glass="item"`: a selectable or navigable menu item.
- `data-glass-tone="light"`: light panels with navy text. Dark is the default.
- `data-glass="none"`: opt out for an exceptional control.

Legacy native buttons, pill tags and button-shaped links have a CSS fallback
selector in one place. Prefer explicit attributes for new components rather
than adding more class-name matching. The CSS keeps page-specific layouts and
brand colours; use `--glass-*` tokens to adjust the material site-wide.
Shared `Input`, `Textarea`, `Button`, `Card` and dropdown primitives opt in by
default. Native editable fields have a central fallback; checkbox, radio,
file, range and hidden inputs retain their specialized appearance. Field
feedback uses focus rather than ripples so editing and text selection stay clear.
Header action spacing uses `--glass-control-gap` (16px, 20px on wide screens).
Navigation links use `--glass-nav-gap` (16px, 24px on large desktops); menu/selector
rows use `--glass-menu-item-gap` (8px). The hero preserves the original full-screen
background canvas using `100svh`, and can grow if its content needs more space.
Use `liquid-menu-stack` for custom lists of links or list items: it applies the
same gap to default suggestions and filtered search results. Do not add separate
`space-y-*` spacing on these lists. Panel and item radii are controlled by
`--glass-panel-radius` (20px) and `--glass-item-radius` (12px), with 8px padding
in selector/dropdown primitives. Glass panels own a single border; avoid wrapping
them in `Boderyelow`. Legacy golden frames inherit their corner radius into the
content and skip the extra border when their child is an explicit glass panel.

`LiquidSelect` uses Radix Select for keyboard navigation, typeahead, touch,
portal positioning and required form values. Pass a `label`, the usual native
`option` children, and `onValueChange(value)`. Use `tone="dark"` on dark forms.
Empty-valued options become the placeholder on required selects. Optional
selects retain an enabled empty option so filters can return to “all”. The trigger and the popup share
the specified tone even when the popup is mounted outside the form.

`LiquidEffects` delegates pointer/keyboard feedback to the document, excludes
disabled controls and removes its temporary decorative layers after 650ms.
Ripple clipping is separate from the control so it cannot clip its dropdown.
Reduced-motion and reduced-transparency preferences are handled centrally.

`home-liquid.css` contains the liquid navigation and homepage layout only.
Keep `hero-content-stack` content-driven; its gap separates the hero lens from
the footer even when the headline wraps. Avoid fixed `vh` content heights.
