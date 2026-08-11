# PORTFOLIO-001 v2 — Design Architecture

**Status:** Design Architecture Seed

This document defines the visual, interaction, motion, depth-awareness, responsive, performance, and accessibility contract for PORTFOLIO-001 v2 before frontend implementation begins.

It extends the frozen structure in `ARCHITECTURE.md` and `CASE_MODEL.md` without changing their routing, depth, taxonomy, evidence, or source-of-truth rules.

## 1. Working Art Direction

```text
CINEMATIC INDUSTRIAL FUTURE
×
EDITORIAL INTELLIGENCE
×
EVIDENCE-BACKED REALITY
```

Core statement:

> V1 explored restraint.  
> V2 explores impact.

V2 does not repeat a restrained document-style portfolio as its default visual identity.

Primary goals:

- strong first impression
- visual intensity
- cinematic motion
- layered spatial depth
- large typography
- actual work as visual material
- project-specific atmosphere
- strong contrast between portfolio depths
- expandable reusable design architecture

The visual surface may become expressive, spatial, luminous, or cinematic. It must not change source truth, claim strength, evidence classification, or canonical case boundaries.

Working principle:

> The surface may be spectacular.  
> The truth remains fixed.

## 2. Depth-Specific Visual Model

The visitor-depth model remains:

```text
L0 PORTFOLIO
→ L1 CASE STORY
→ L2 SHOWCASE
→ L3 CASE DOSSIER / EVIDENCE
```

The visual progression is:

```text
SPECTACLE
→ NARRATIVE
→ IMMERSION
→ PRECISION
```

Each depth must feel distinct in information density, motion permission, spatial composition, and visual emphasis.

### L0 — PORTFOLIO

**Mode:** SPECTACLE / ORIENTATION

Purpose:

- attract attention immediately
- establish identity within seconds
- reveal scope without explaining everything
- create paths into selected work

Visual character:

- oversized display typography
- full-viewport composition
- layered actual-work imagery
- dramatic contrast
- project-atmosphere transitions
- depth / overlap / glow / gradients
- controlled cinematic motion
- asymmetric layout
- selective full bleed

The homepage should feel like entering a digital exhibition, not reading a résumé.

L0 remains concise. It must not become the complete project archive.

### L1 — CASE STORY

**Mode:** EDITORIAL NARRATIVE

Purpose:

- explain field reality
- show problem framing
- show decisions and evolution
- make reasoning readable

Visual character:

- editorial composition
- strong statements
- asymmetric image/text relationships
- generous but deliberate negative space
- diagrams / process flows
- contextual visuals
- motion used to explain sequence or causality

L1 may be visually rich, but narrative comprehension has priority over spectacle.

### L2 — SHOWCASE

**Mode:** IMMERSION / SYSTEM IN MOTION

Purpose:

- make actual work tangible
- display quality and scale
- let system / interface / output dominate
- create visual experience rather than explanation-heavy reading

Visual character:

- full-bleed assets
- fullscreen sequences
- sticky storytelling
- large UI captures
- video
- spatial layering
- scroll-driven transitions
- zoom-to-detail
- foreground/background separation
- project-specific lighting / atmosphere

L2 has the highest permission for visual intensity.

Showcase remains distinct from Evidence. Visual spectacle does not change evidence classification.

### L3 — CASE DOSSIER / EVIDENCE

**Mode:** PRECISION / INSPECTION

Purpose:

- verify claims
- expose source lineage
- show evidence classification
- show boundaries
- expose integrity / repository state where relevant

Visual character:

- dense information
- technical typography
- restrained motion
- sharp alignment
- structured metadata
- evidence ledger
- source / status / boundary visibility
- minimal theatrical treatment

L3 should feel like entering the control room or technical dossier behind the exhibition.

## 3. Visual Intensity Contract

Generic restraint is not the default V2 identity.

First-class visual materials include:

- gradients
- glow
- translucent / glass surfaces
- blur
- spatial depth
- layering
- masking
- large-scale transitions
- luminous data
- animated SVG / paths
- expressive typography
- controlled 3D perspective
- cinematic section transitions

These materials are broadly permitted in L0 and L2.

A visual effect should reinforce at least one of:

- hierarchy
- transition
- causality
- physical / digital relationship
- project atmosphere
- system scale
- state change
- narrative emphasis

Decorative intensity is allowed, but it must never obscure real content, evidence classification, or source interpretation.

One generic futuristic or “AI purple” atmosphere must not be imposed across every case.

## 4. Actual Work as Primary Visual Material

V2 should prefer actual work over generic illustration whenever public-safe material exists.

Primary visual sources may include:

- sanitized system captures
- source-faithful publication visuals
- diagrams derived from canonical architecture when explicitly classified
- videos / demonstrations
- physical-process or engineering visuals where public-safe
- UI sequences
- verified visual evidence where the layer permits it

Visual derivatives must remain explicitly classified when they are not source evidence.

A dramatic treatment may surround an evidence asset. It must not modify the asset in a way that changes its evidentiary meaning.

## 5. Motion Architecture

Motion is a first-class V2 material.

Allowed vocabulary:

- scroll-linked reveal
- pinned narrative
- text-mask reveal
- scale transition
- zoom-to-detail
- image depth separation
- controlled parallax
- crossfade
- spatial slide
- project-atmosphere transition
- SVG / path progression
- data illumination
- sequence progression
- video transition
- horizontal progression inside a pinned scene when meaningfully justified

Motion should communicate at least one of:

- hierarchy
- progress
- causality
- state change
- physical → digital transformation
- detail exploration
- case transition

Motion must not become a prerequisite for understanding content.

No motion library or rendering technology is selected in this pass. GSAP, WebGL, Three.js, framework choices, and implementation strategy belong to Portfolio Shell / Motion Prototype work.

### Reduced-motion contract

Future implementation must ensure:

- essential content remains available without animation
- navigation never depends on motion completion
- `prefers-reduced-motion` has a coherent alternate presentation
- no infinite animation is required to understand content
- pinned sequences can degrade into readable vertical progression

## 6. Hero Composition Contract

The homepage POSITION HERO must answer two questions at once:

1. Who is this person?
2. What scale of work exists here?

Working copy direction:

```text
I NEVER LEFT
MANUFACTURING.

I EXPANDED
WHAT I COULD CHANGE.
```

Supporting Korean direction:

```text
운영을 관리하고,
공정과 설비를 바꾸고,
필요하면 시스템까지 직접 만든다.
```

Potential hero materials may include layered WMS, COLD, data/dashboard, or engineering visuals with controlled spatial depth and motion.

The final asset combination is not frozen in this pass.

Hero must avoid:

- abstract capability diagram as the dominant first impression
- résumé-style biography wall
- technology-logo wall
- dashboard-card wall

The existing v1 Manufacturing capability SVG remains preserved as a candidate for later EVOLUTION / CAPABILITY ARCHITECTURE use.

## 7. Navigation & Depth Awareness

The visitor should always be able to understand:

- current case
- current depth
- path back to Portfolio
- path to deeper material if available

Conceptual examples:

```text
PORTFOLIO
/
WMS
/
SHOWCASE
```

or:

```text
CASE 01
WMS
L2 / SHOWCASE
```

Exact frontend treatment is not frozen.

Deep layers must remain URL-addressable according to the Structure Freeze route contract. Modal-only navigation for Case Story, Showcase, or Evidence is prohibited.

Depth-aware navigation must not make D0/D1/D2/D3 appear to be quality rankings.

## 8. Responsive Design Contract

Desktop may be spatially ambitious.

Mobile is not a miniaturized desktop.

Mobile adaptation may:

- flatten Z-depth
- convert side-by-side layers into sequences
- remove nonessential parallax
- convert pinned scenes into vertical steps
- use edge-to-edge media
- reduce typography scale while preserving hierarchy

Mobile must preserve:

- narrative order
- case depth
- CTA clarity
- evidence classification
- source legibility
- video accessibility
- access to all essential content

No essential claim, source, or navigation path may disappear only because desktop motion / layout cannot be preserved.

## 9. Performance Contract

Visual intensity does not remove performance responsibility.

Future implementation should support:

- responsive image sizing
- lazy loading for below-fold media
- poster-first video loading
- deferred heavy motion
- minimal blocking scripts
- reduced-motion alternative
- no unnecessary permanent WebGL context
- stable layout before media load where practical

No specific framework or library is selected in this pass.

Performance is part of perceived design quality, not a post-design cleanup task.

## 10. Accessibility Contract

Visual spectacle must preserve basic accessibility.

Future implementation must support:

- semantic heading hierarchy
- keyboard-accessible navigation
- visible focus
- meaningful alt text where applicable
- text contrast
- non-motion comprehension path
- reduced-motion mode
- captions / transcript consideration for important video
- touch-safe controls

Evidence status must never rely on color alone.

Korean prose readability is first-class and must not be sacrificed for display composition.

## 11. Source / Evidence Treatment Contract

Showcase may use cinematic framing around source-faithful assets, but must not:

- present a fake production screen as source
- present a generated derivative as raw evidence
- crop away a necessary limitation
- recolor an evidence visualization in a way that changes interpretation
- blur or distort source content so classification or values become misleading
- strengthen captions beyond canonical claim boundaries

L3 should expose evidence class, source status, boundary, and integrity clearly where available.

Working principle remains:

> Showcase earns attention. Evidence earns trust.

## 12. Anti-Patterns

V2 specifically avoids:

- V1-style uniform section rhythm repeated everywhere
- every project presented as an equal card
- generic SaaS dashboard portfolio
- technology-logo wall
- résumé first
- endless bordered-card grids
- visual effects that hide actual outputs
- one identical color atmosphere for every case
- all depths using the same information density
- fake interface presented as production evidence
- marketing copy stronger than evidence
- decorative motion that prevents reading
- hero dominated by abstract diagrams
- homepage becoming a project archive

V2 does **not** ban:

- gradient
- glow
- glass
- blur
- 3D depth
- large motion

The anti-pattern is generic, meaningless, or misleading use — not intensity itself.

## 13. Design Success Criteria

The architecture succeeds if future implementation can answer **YES** to all of the following:

1. Can a visitor understand the identity within approximately five seconds?
2. Can the homepage feel visually memorable without explaining every case?
3. Can WMS, COLD, Inventory, SAP, and future cases share one design system without looking identical?
4. Can project atmosphere change without breaking global identity?
5. Can L0, L1, L2, and L3 feel progressively deeper?
6. Can Showcase be visually spectacular while Evidence remains trustworthy?
7. Can new cases be added without redesigning the homepage?
8. Can mobile preserve narrative when cinematic effects are reduced?
9. Can actual work remain the main visual material?
10. Can V2 clearly feel like a new generation rather than a reskin of V1?

## 14. Build Boundary

This pass defines architecture only.

Do not implement:

- `index.html`
- `styles.css`
- `app.js`
- JS motion prototype
- SVG redesign
- case HTML
- video embed
- image asset
- font asset
- framework setup

The next candidate phase is **PORTFOLIO-001 v2 — Portfolio Shell**.

It must not start automatically from this document creation pass.
