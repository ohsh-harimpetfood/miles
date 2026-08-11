# PORTFOLIO-001 v2 — Visual System

**Status:** Design Architecture Seed

This document defines the conceptual visual system for PORTFOLIO-001 v2 before frontend implementation. It establishes project-atmosphere tokens, typography depth, spatial/grid behavior, surface treatment, and responsive visual adaptation without freezing CSS values, font dependencies, or framework choices.

## 1. Visual Identity Principle

PORTFOLIO-001 v2 uses one global identity with multiple project atmospheres.

```text
GLOBAL IDENTITY
+
PROJECT ATMOSPHERE
+
DEPTH-SPECIFIC DENSITY
```

The design system must allow WMS, COLD, Inventory/Data, Process & Facility Engineering, Enterprise Systems, and AI-native work to feel distinct without becoming unrelated microsites.

The surface may become cinematic, luminous, spatial, editorial, or technical according to case and depth.

The truth boundary does not change with visual treatment.

## 2. Project Atmosphere Tokens

Every case may define a project-atmosphere profile with these conceptual tokens:

- **base background**
- **surface**
- **primary accent**
- **secondary accent**
- **signal / warning**
- **glow character**
- **image treatment**
- **transition character**

These are semantic atmosphere roles, not final CSS variable names or frozen color values.

A project atmosphere must remain compatible with:

- global navigation
- global typography hierarchy
- depth awareness
- evidence classification
- accessibility / contrast expectations
- mobile adaptation

## 3. Working Atmosphere Examples

The following are working examples only. They are not fixed brand palettes.

### WMS

Working character:

- dark warehouse / graphite
- operational green
- cyan / muted blue
- grid / location / spatial mapping
- digital-twin / warehouse-control-room atmosphere

Potential visual language:

- warehouse geometry
- rack / location alignment
- map-like spatial layers
- transactional signal traces
- operational state illumination

Boundary:

- atmosphere must not turn explanatory visuals into evidence
- digital-twin language must remain bounded by actual system state

### COLD

Working character:

- deep navy / near-black
- cold blue
- cyan
- warning red / orange
- thermal / sensor / diagnostic atmosphere

Potential visual language:

- temperature traces
- retention / stability fields
- warning / state bands
- heatmaps
- operational intelligence overlays

Boundary:

- warning color does not imply statutory failure unless canonical evidence says so
- futuristic AI treatment must not imply autonomous diagnosis or control

### Inventory / Data

Working character:

- graphite → luminous light surface
- data blue / analytical accent
- high-clarity charts
- structured numerical space

Potential visual language:

- luminous data fields
- chart planes
- metric hierarchy
- clean analytical transitions

Boundary:

- visual polish must not promote recognition or presentation into measured business impact

### Process & Facility Engineering

Working character:

- steel / machinery / drawing language
- amber / industrial signal
- physical material / engineering atmosphere

Potential visual language:

- process lines
- piping / equipment geometry
- engineering drawing references
- physical detail
- construction / operation context where publicly supported

Boundary:

- planned / reviewed / engineered must not be presented as delivered construction without evidence

### Enterprise Systems

Working character:

- graphite / neutral
- structured hierarchy
- process / master-data / system-map emphasis

Potential visual language:

- process relationships
- master-data structure
- enterprise-system topology
- controlled information density

Boundary:

- system-map atmosphere must not imply repository-native implementation evidence where none exists

### AI-native Work

Working character:

- higher permission for futuristic effects
- violet / spectral accent permitted
- luminous / generative transition language allowed

Boundary:

- futuristic styling must never imply autonomous capability not supported by evidence
- `AI-assisted` / `LLM-assisted` remains distinct from autonomous execution

## 4. Atmosphere Transition Contract

Project atmosphere may change between selected cases or case depths.

Allowed transition behaviors include:

- background tonal transition
- accent migration
- controlled glow change
- image-treatment shift
- spatial-depth change
- mask / crossfade
- atmospheric section handoff

Transitions must preserve:

- navigation legibility
- text contrast
- current-case identity
- current-depth identity
- reduced-motion alternative

A case transition should feel intentional rather than like loading an unrelated website.

## 5. Typography Architecture

Typography depth should progress as:

```text
EXPRESSIVE
→ EDITORIAL
→ CINEMATIC CAPTION
→ TECHNICAL
```

Korean readability remains first-class at every depth.

No final external font dependency is selected in this pass. Font family, loading, fallback, and licensing decisions belong to Portfolio Shell implementation.

### L0 — Display Typography as Image

Display typography may occupy a significant portion of the viewport.

Working direction:

```text
I NEVER LEFT
MANUFACTURING.

I EXPANDED
WHAT I COULD CHANGE.
```

Characteristics:

- oversized English display
- strong line breaks
- large-scale spatial relationship to actual-work imagery
- supporting Korean copy smaller and precise

Korean supporting copy must remain readable and not be treated as decorative texture.

### L1 — Editorial Hierarchy

Hierarchy:

```text
Large thesis
→ medium narrative heading
→ readable body
→ side notes / captions
```

Characteristics:

- strong thesis statements
- deliberate reading measure
- visible distinction between narrative and metadata
- captions remain subordinate to the story

### L2 — Minimal Words / Maximum Visual Weight

Working pattern:

```text
03 / OPERATE

ANALYSIS ENTERED
THE OPERATING LOOP.
```

Characteristics:

- brief labels
- high visual weight
- compact captions
- media remains dominant

Text must orient the visitor without turning the Showcase into a long article.

### L3 — Technical / Dossier Hierarchy

Working pattern:

```text
EVIDENCE 03
CLASSIFICATION
STATUS
BOUNDARY
SOURCE
INTEGRITY
```

Characteristics:

- compact technical labels
- structured metadata
- monospace-compatible information where appropriate
- hashes / source IDs / statuses readable without becoming decorative texture

## 6. Korean Readability Contract

Future implementation should treat Korean prose as primary content.

Implementation expectation where appropriate:

```text
word-break: keep-all
```

Additional expectations:

- avoid overly narrow Korean body measures
- do not force English-style word fragmentation into Korean prose
- preserve punctuation and semantic grouping
- ensure display typography does not make supporting Korean copy too small
- technical labels may be compact, but narrative Korean must remain comfortably readable

Exact CSS is not defined in this pass.

## 7. Conceptual 12-Column Grid

V2 uses a conceptual 12-column grid as a spatial reference.

This is not yet a CSS implementation or fixed container contract.

The grid exists to support changing density and asymmetry across depths.

### L0 Grid Behavior

Permitted working relationships:

- 4 / 8
- 5 / 7
- 3 / 9
- selective full bleed
- intentional overlap
- viewport-scale composition

L0 should not force every section into a centered, uniform max-width container.

### L1 Grid Behavior

Editorial reading behavior:

- body commonly occupies 6–8 columns
- side notes / captions / visuals may occupy adjacent columns
- narrow / wide passages may alternate
- image/text relationships may reverse

Reading measure has priority over visual symmetry.

### L2 Grid Behavior

Showcase behavior:

- full viewport permitted
- image-first composition
- edge-to-edge media permitted
- pinned sequence permitted
- layered depth may temporarily escape conventional grid alignment

The grid remains an alignment reference, not a cage.

### L3 Grid Behavior

Dossier behavior:

- dense 12-column technical composition
- metadata, narrative, evidence, and source information may coexist
- compact spacing permitted
- strong alignment preferred

L3 may be denser than other depths, but it must remain inspectable and responsive.

## 8. Spatial Density Rhythm

V2 should intentionally vary spatial density.

Possible rhythm:

```text
EXPANSIVE
→ EDITORIAL
→ IMMERSIVE
→ DENSE
```

This density change is part of depth awareness.

Avoid:

- same max-width on every section
- same vertical spacing on every depth
- same card dimensions across unrelated modules
- identical surface density for portfolio, showcase, and dossier

Visual rhythm depends on changing scale, whitespace, overlap, and information density.

## 9. Surface & Glass Rule

Glass, blur, and translucent surfaces are valid V2 materials.

They may be used for:

- floating system panels
- overlay metadata
- secondary UI layers
- spatial architecture
- transition states
- depth separation

Potential characteristics:

- translucent surfaces
- background blur
- subtle border light
- layered shadow / glow
- foreground/background separation

These effects are not required for every module or every case.

### Source-material protection

Actual source screenshots / evidence visuals must remain legible.

Do not:

- blur source values until interpretation changes
- recolor charts in a misleading way
- obscure warnings / labels required for context
- distort source screenshots for cinematic perspective if that changes evidentiary reading
- place glow / overlays over critical values

Atmospheric treatment may surround evidence. It must not falsify evidence.

## 10. Gradient & Glow Contract

Gradients and glow are permitted broadly, especially in L0 and L2.

Appropriate uses:

- atmosphere transition
- spatial depth
- hierarchy
- state emphasis
- system scale
- luminous data
- physical → digital transformation

Avoid:

- default purple gradient applied to every case
- glow that reduces text or source-image contrast
- warning glow that implies severity beyond canonical classification
- animated glow required to understand status

## 11. Image Treatment Contract

A project atmosphere may define image treatment such as:

- edge falloff
- vignette around, not over, important source content
- controlled contrast framing
- masked entry / reveal
- layered physical/digital composition
- foreground/background separation

For evidence-sensitive assets:

- preserve core pixels / structure where classification requires source faithfulness
- do not erase necessary context
- do not imply that a derivative is an original screen
- provide classification near the asset when appropriate

## 12. Data Visualization Treatment

Data visuals may be integrated into atmosphere but should retain analytical clarity.

Future implementation may use:

- luminous data highlights
- progressive path reveal
- axis / state emphasis
- controlled focus on a selected series
- contextual overlays outside the source visual

For source-faithful evidence:

- do not redesign the underlying chart and call it the original evidence
- a recreated chart must be labeled `Visual Derivative`
- thresholds / legal interpretations remain bounded by canonical source state

## 13. Warning / Signal Semantics

Atmosphere profiles may define a `signal / warning` token.

Signal color may indicate:

- operational state
- attention
- warning
- transition

But visual warning semantics must not silently become:

- legal noncompliance
- statutory failure
- product rejection
- verified incident severity

Evidence status, warning status, and legal/compliance status are separate concepts.

## 14. Depth-Specific Surface Permission

### L0

High permission:

- gradient
- glow
- glass
- blur
- masks
- layered imagery
- depth / overlap
- large-scale atmosphere transition

### L1

Moderate permission:

- editorial image layering
- restrained glass
- diagram emphasis
- selective atmospheric transitions

Readability remains dominant.

### L2

Highest permission:

- full bleed
- cinematic layering
- scale transition
- zoom-to-detail
- project-specific lighting
- spatial sequencing

Source legibility remains protected.

### L3

Low theatrical permission:

- subtle surfaces
- precise separators
- technical contrast
- limited glow for state indication only when not color-dependent

L3 should favor inspection over spectacle.

## 15. Responsive Visual Adaptation

Mobile should preserve hierarchy and atmosphere without imitating desktop spatial depth at reduced scale.

Allowed mobile transformations:

- flatten Z-depth
- replace overlap with ordered stack
- replace pinned horizontal sequence with vertical progression
- reduce display typography scale
- use edge-to-edge images
- simplify glass layers
- remove nonessential parallax

Must preserve:

- identity
- case atmosphere
- narrative order
- source legibility
- evidence classification
- CTA clarity
- current depth

## 16. Accessibility & Contrast

Atmosphere changes must maintain:

- readable text contrast
- visible focus treatment
- status communication beyond color
- source-image legibility
- reduced-motion coherent presentation

Glow, blur, and translucent surfaces must never be required to infer text or status.

## 17. Implementation Boundary

This file does not freeze:

- final hex / RGB values
- final CSS custom-property names
- font family
- font files
- typography implementation library
- CSS framework
- motion library
- shader / WebGL strategy
- exact breakpoint values
- component implementation

Those choices belong to Portfolio Shell and later design implementation passes.

This pass freezes the **visual semantics and design constraints**, not frontend technology.
