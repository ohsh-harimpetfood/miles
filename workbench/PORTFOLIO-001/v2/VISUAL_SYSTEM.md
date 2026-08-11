# PORTFOLIO-001 v2 — Visual System

**Status:** Design Architecture Revision v0.1.1 — Global Theme / Gradient / Experimental Language Promotion

This document defines the conceptual visual system for PORTFOLIO-001 v2 before frontend implementation. It establishes global theme families, project-atmosphere tokens, typography depth, spatial/grid behavior, surface treatment, experimental visual language, and responsive visual adaptation without freezing CSS values, font dependencies, or framework choices.

## 1. Visual Identity Principle

PORTFOLIO-001 v2 uses one global identity with multiple global theme families and project atmospheres.

```text
GLOBAL IDENTITY
+
GLOBAL THEME FAMILY
+
PROJECT ATMOSPHERE
+
DEPTH-SPECIFIC DENSITY
```

The design system must allow WMS, COLD, Inventory/Data, Process & Facility Engineering, Enterprise Systems, and AI-native work to feel distinct without becoming unrelated microsites.

The surface may become cinematic, luminous, spatial, editorial, or technical according to theme, case, and depth.

The truth boundary does not change with visual treatment.

## 2. Global Theme Family System

A **Global Theme Family** defines the top-level visual mood, color universe, and lighting identity for PORTFOLIO-001 v2.

A **Project Atmosphere** defines local visual variation according to each case's material, operating context, and meaning.

Relationship:

```text
GLOBAL THEME FAMILY
+
PROJECT ATMOSPHERE
+
DEPTH-SPECIFIC DENSITY
```

A global theme may change:

- base color universe
- lighting character
- gradient family
- global glow behavior
- structural line emphasis
- interaction energy
- surface translucency character

A global theme must **not** erase case identity.

Theme may change presentation, but it must not change:

- truth
- narrative meaning
- claim strength
- evidence classification
- source interpretation

V2 must support at least two working global theme families.

### Theme A — ACID SIGNAL

**Palette direction:**

- Deep Green
- Bright Green
- Black
- Hot Pink
- Restrained Deep Red

**Character:**

- intense
- industrial
- energetic
- aggressive
- signal-driven
- digital
- operational
- experimental
- high contrast

Primary impression:

```text
Industrial control room
×
Digital signal
×
Future manufacturing
×
High-energy operations
```

Base:

- Black
- Near-black
- Deep Green

Bright Green may represent:

- active state
- execution
- location
- grid
- path
- data activation
- system signal

Hot Pink may represent:

- CTA
- selected state
- interaction energy
- transition flare
- highlight
- edge energy
- luminous accent

Deep Red may represent:

- warning
- critical state
- operational risk
- boundary

Deep Red remains restrained.

Hot Pink may be visually strong, but should not become a continuous dominant page fill by default.

Working gradient directions:

```text
Black → Deep Green
Deep Green → Bright Green
Black → Deep Green → Hot Pink
Black → Bright Green radial signal
Deep Green → Black → Deep Red risk zone
```

### Theme B — MIDNIGHT GOLD

**Palette direction:**

- Black
- Deep Blue / Midnight Navy
- Gold
- Restrained Lemon

**Character:**

- cinematic
- premium
- strategic
- technical
- precise
- sophisticated
- monumental
- deep-system

Primary impression:

```text
Night operations
×
Engineering precision
×
Strategic intelligence
```

Base:

- Black
- Near-black
- Midnight Navy
- Deep Blue

Gold may represent:

- architecture
- hierarchy
- important connection
- primary emphasis
- selected state
- structural illumination

Gold should communicate:

- precision
- importance
- structure
- intelligence
- system value

It should not default to ornamental luxury.

Lemon may represent:

- micro signal
- activation
- data point
- interaction
- local highlight

Lemon remains secondary.

Working gradient directions:

```text
Black → Midnight Blue
Midnight Blue → Near Black
Deep Blue → Gold radial illumination
Black → Deep Blue → muted Gold haze
Midnight Blue → Gold → restrained Lemon
```

## 3. Project Atmosphere Tokens

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
- active Global Theme Family
- depth awareness
- evidence classification
- accessibility / contrast expectations
- mobile adaptation

Project Atmosphere adapts **inside** a Global Theme Family rather than replacing it.

## 4. Working Atmosphere Examples

The following are working examples only. They are not fixed brand palettes.

### WMS

Base working character:

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

#### WMS + ACID SIGNAL

- black / deep green base
- bright-green location grid
- hot-pink interaction / selected state
- deep-red abnormal state

#### WMS + MIDNIGHT GOLD

- black / midnight-blue base
- gold warehouse grid / structural emphasis
- restrained lemon transaction signal

### COLD

Base working character:

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

#### COLD + ACID SIGNAL

- dark neutral / deep-green base
- bright-green system state
- hot-pink diagnostic energy
- deep-red abnormal state

#### COLD + MIDNIGHT GOLD

- deep navy
- cold-blue local functional accent
- gold structural emphasis
- restrained lemon diagnostic signal

### Inventory / Data

Base working character:

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

#### Inventory + ACID SIGNAL

- black / green data field
- bright-green data activity
- hot-pink forecast / selected state

#### Inventory + MIDNIGHT GOLD

- deep blue / black
- gold hierarchy
- restrained lemon forecast signal

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
- violet / spectral accent permitted when compatible with active theme
- luminous / generative transition language allowed

Boundary:

- futuristic styling must never imply autonomous capability not supported by evidence
- `AI-assisted` / `LLM-assisted` remains distinct from autonomous execution

### Functional color override

Functional source colors may override theme accents where the source or system meaning requires them.

Theme never recolors evidence in a misleading way.

## 5. Atmosphere Transition Contract

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

## 6. Theme Morph

**Theme Morph** is an optional V2 capability.

Theme switching may become an atmospheric transition rather than only an instantaneous variable swap.

Working example:

```text
ACID SIGNAL
→ green field darkens
→ hot-pink energy withdraws
→ navy enters
→ grid illumination becomes gold
→ signal temperature changes
→ MIDNIGHT GOLD
```

Theme Morph may affect:

- gradients
- background
- glow
- line color
- lighting
- surface transparency
- accent energy

It must preserve:

- usable navigation
- stable content
- readable text
- current case / depth
- evidence semantics

Motion is optional.

Reduced-motion presentation receives an immediate or static theme change.

**Theme Morph is enhancement, not meaning.**

## 7. Typography Architecture

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

## 8. Korean Readability Contract

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

## 9. Conceptual 12-Column Grid

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

## 10. Spatial Density Rhythm

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

## 11. Surface & Glass Rule

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

## 12. Gradient & Glow Contract

V2 actively uses gradients.

**Gradients are first-class structural materials.**

They may define:

- depth
- atmosphere
- hierarchy
- focus
- transition
- system state
- spatial separation
- physical → digital transformation
- project-to-project transition
- narrative energy

Allowed gradient vocabulary:

- linear gradient
- radial gradient
- conic gradient
- layered mesh-style gradient
- masked gradient
- gradient typography
- gradient border / line
- moving gradient field
- gradient light source
- scroll-reactive gradient
- multi-layer gradient composition

Multiple gradients may coexist in one composition.

Working principle:

> Gradients are structural, not secondary decoration.

### Gradient depth behavior — L0 / Portfolio

Maximum expressive permission:

- atmospheric mesh fields
- multiple radial lights
- large directional gradients
- moving color fields
- gradient typography
- background transformation

### Gradient depth behavior — L1 / Case Story

Gradient supports narrative direction:

- chronology
- transition
- before / after
- problem / response
- physical / digital
- decision point

### Gradient depth behavior — L2 / Showcase

Maximum gradient freedom:

- luminous backgrounds
- layered gradient fog
- spotlight
- glow fields
- state transition
- animated signal paths

### Gradient depth behavior — L3 / Dossier

Gradient intensity drops substantially.

Use only for:

- hierarchy
- selected evidence
- technical emphasis
- subtle status distinction

Precision remains dominant.

### Glow boundary

Avoid:

- default purple gradient applied to every case
- glow that reduces text or source-image contrast
- warning glow that implies severity beyond canonical classification
- animated glow required to understand status

## 13. Experimental Visual Language

These are optional visual capabilities, not mandatory features for every page.

Goal:

> Make the portfolio feel like a living industrial / digital system rather than a static website.

### Chromatic Edge Separation

Restrained color-channel separation may support:

- transition
- digital activation
- selected typography
- AI / digital emergence

Do not use continuously on body text.

### Depth Fog / Atmospheric Perspective

Different Z layers may vary:

- blur
- opacity
- contrast
- luminosity

Working relationship:

```text
Foreground → sharp
Background → atmospheric
```

### Refractive / Lens Surfaces

Localized optical behavior may include:

- magnification
- refraction
- light bending
- moving highlight

Never distort evidence interpretation.

### Signal Trace

Animated causal / system paths may represent supported relationships.

Examples:

```text
Location
→ QR
→ Transaction
→ Inventory
```

```text
Sensor
→ Analysis
→ Briefing
→ Diagnosis
→ Decision
```

### Data Bloom

Visual metaphor:

```text
point
→ structure
→ system
```

Examples:

```text
logger point
→ graph
→ multi-CT view
→ operation
→ decision
```

```text
location
→ rack
→ map
→ transaction
→ inventory system
```

### Semantic Parallax

Parallax depth should correspond to meaning rather than arbitrary decoration.

Conceptual depth:

```text
Physical reality → background
Digital system → middle
Data / intelligence → foreground
Annotation → top
```

### Kinetic Typography

Allowed behaviors include:

- mask reveal
- scale
- tracking
- weight change
- line collision
- spatial overlap
- text / media layering

Typography may behave as motion graphics in L0 and L2.

### Visual Portal Transition

A selected teaser may visually expand into the next depth.

Working example:

```text
Portfolio WMS visual
→ fills viewport
→ becomes WMS Case Hero
```

Routing remains URL-addressable.

Animation is not a routing dependency.

### Scan / Diagnostic Layer

A moving inspection interface may reveal:

- metadata
- system status
- labels
- relationships
- evidence context

### Grid Deformation

Grid may:

- expand
- compress
- shift
- change perspective
- reorganize around active content

Use only for meaningful transition.

### Light as Data

Light may represent system activity.

Examples:

- transaction movement
- location activation
- temperature abnormality
- pipeline progress
- architecture connection

### Noise / Material Texture

Possible treatments:

- film grain
- industrial noise
- paper texture
- digital noise
- metal-like texture

Use subtly.

### Split-Reality Composition

One viewport may simultaneously show:

- physical ↔ digital
- raw data ↔ dashboard
- sensor ↔ diagnosis

The boundary may shift during narrative progression.

### Temporal Scrubbing

Scroll position may represent supported chronology.

Do not fabricate continuity.

### Visual Density Shift

Information density itself may transform:

```text
chaos
→ alignment
→ structure
→ system
→ decision
```

This is a particularly important V2 technique.

It can visually represent:

```text
Reality
→ Structure
→ Execution
```

## 14. Experimental Technique Priority

High-value candidates for later prototypes:

1. **Visual Density Shift**
2. **Signal Trace**
3. **Split-Reality Composition**
4. **Visual Portal Transition**
5. **Light as Data**
6. **Theme Morph**

These are candidates, not guaranteed production requirements.

Portfolio Shell must first establish:

- structure
- typography
- palette
- performance
- responsive behavior
- navigation

Advanced visual techniques should then be promoted selectively.

**Actual work remains the protagonist.**

## 15. Image Treatment Contract

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

## 16. Data Visualization Treatment

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

## 17. Warning / Signal Semantics

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

## 18. Evidence Color Boundary

Actual source screenshots and evidence visuals retain source-faithful color meaning.

Theme / gradient / glow may exist:

- around
- behind
- beside
- outside

source evidence.

Do not:

- recolor source risk state
- change chart semantic color
- mask necessary labels
- distort values
- imply status through surrounding effect that contradicts evidence

Atmosphere may dramatize context.

It may not alter evidence interpretation.

## 19. Depth-Specific Surface Permission

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

## 20. Responsive Visual Adaptation

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

## 21. Accessibility & Contrast

Atmosphere changes must maintain:

- readable text contrast
- visible focus treatment
- status communication beyond color
- source-image legibility
- reduced-motion coherent presentation

Glow, blur, translucent surfaces, and Theme Morph must never be required to infer text, state, or meaning.

## 22. Implementation Boundary

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
