# PORTFOLIO-001 v2 — Module Library

**Status:** Design Architecture Seed

This document defines reusable composition patterns for PORTFOLIO-001 v2.

A **module** is a reusable narrative / visual / interaction composition pattern. It is **not** a bordered card by default and does not prescribe HTML structure, CSS implementation, or a component framework.

Modules inherit the frozen depth model:

```text
L0 PORTFOLIO
→ L1 CASE STORY
→ L2 SHOWCASE
→ L3 CASE DOSSIER / EVIDENCE
```

## Shared Module Rules

Every future module implementation must preserve:

- URL-addressable deep layers
- current-case / current-depth awareness
- mobile narrative order
- reduced-motion fallback where motion is used
- canonical source / evidence classification
- distinction between Sanitized Evidence and Visual Derivative
- no fabricated metrics, chronology, failure, pivot, or business impact

Modules may be full-bleed, layered, pinned, editorial, technical, spatial, or minimal. Reusability means repeatable composition logic, not visual sameness.

---

## 01 — POSITION HERO

**Purpose**  
Establish identity and the scale of work within seconds.

**Allowed depth**  
L0 primarily.

**Required content**

- identity statement
- concise supporting statement
- clear path into selected work or Work Index

**Optional content**

- layered WMS / COLD / data / engineering visuals
- motion / depth treatment
- atmospheric project transitions

**Visual behavior**

- oversized display typography
- full-viewport composition permitted
- layered real-work imagery preferred
- asymmetric composition

**Interaction behavior**

- CTA into selected work / work index
- motion may reveal layers but must not block navigation

**Responsive expectation**

- mobile may flatten layered depth
- identity statement remains dominant
- supporting Korean copy remains readable

**Evidence boundary**

- hero imagery may reference canonical work but must not imply evidence strength beyond source state
- do not use an abstract capability diagram as the dominant first impression

---

## 02 — CAPABILITY FIELD

**Purpose**  
Reveal the breadth and relationship of capabilities without turning the homepage into a project archive.

**Allowed depth**  
L0, optionally L1 for case-specific capability context.

**Required content**

- capability groups or layers
- clear relationship to work domains

**Optional content**

- spatial map
- animated SVG / path progression
- v1 manufacturing capability SVG as a later reuse candidate

**Visual behavior**

- field / constellation / layered system composition permitted
- may shift atmosphere by domain

**Interaction behavior**

- hover/focus exploration may reveal concise context
- must remain understandable without hover

**Responsive expectation**

- complex spatial relationships may collapse into ordered vertical groups

**Evidence boundary**

- capability representation is explanatory architecture, not proof of individual case outcomes

---

## 03 — SELECTED WORK TEASER

**Purpose**  
Summarize a representative case without flattening its full narrative.

**Allowed depth**  
L0.

**Required content**

Recommended order:

```text
CASE
→ FIELD PROBLEM
→ FIRST MODEL / RESPONSE
→ EVOLUTION / PIVOT if meaningful
→ CURRENT STATE
→ EXPLORE CASE
```

**Optional content**

- one dominant public-safe visual
- concise trust signal
- project atmosphere

**Visual behavior**

- large case-specific composition
- not required to be a card
- may use split, overlap, or full-bleed treatments

**Interaction behavior**

- direct link to Case Story
- optional secondary link to Showcase / Evidence when available

**Responsive expectation**

- preserve information order
- avoid reducing the teaser to unreadable metadata density

**Evidence boundary**

- current state must reflect canonical case truth
- do not place the full Case Story on L0
- trust signals must not exceed dossier evidence

### Working WMS pattern

```text
WAREHOUSE MANAGEMENT SYSTEM

자재는 존재했지만,
위치를 신뢰하기 어려웠다.

Problem:
manual location / search / reconciliation friction

First model:
Location + Item + Transaction

First executable hypothesis:
QR + AppSheet

Evolution:
Custom Web Architecture

Current:
Built · Deployed · Multi-user · Operational

Explore Case →
```

This is a working composition pattern, not a requirement for every case.

---

## 04 — WORK SPECTRUM

**Purpose**  
Show breadth across domains while keeping Selected Work intentionally small.

**Allowed depth**  
L0 and Work Index context.

**Required content**

- Primary Domain references
- breadth of work

**Optional content**

- counts only when repository-defined and useful
- compact case references
- domain transitions

**Visual behavior**

- may be field-based, typographic, or indexed
- avoid equal-card treatment as default

**Interaction behavior**

- path to Work Index
- domain exploration may be interactive

**Responsive expectation**

- must remain scannable on mobile

**Evidence boundary**

- breadth does not imply equal evidence maturity across cases

---

## 05 — CASE HERO

**Purpose**  
Establish case identity, field problem, current depth, and atmospheric entry.

**Allowed depth**  
L1, with adapted versions in L2/L3.

**Required content**

- case title
- concise field-reality statement
- current case depth / status cue

**Optional content**

- dominant source-faithful visual
- project atmosphere
- canonical short arc

**Visual behavior**

- case-specific lighting / color / spatial language
- large typography

**Interaction behavior**

- links to Showcase / Evidence when available
- path back to Portfolio / Work Index

**Responsive expectation**

- preserve case identity and depth cue above decorative effects

**Evidence boundary**

- hero claims must remain within canonical case state

---

## 06 — FIELD REALITY

**Purpose**  
Make the original operating condition tangible before solution framing.

**Allowed depth**  
L1 primarily.

**Required content**

- actual field condition
- operational context
- source-grounded problem statement

**Optional content**

- physical-space image
- original process snapshot
- contextual diagram

**Visual behavior**

- editorial image/text asymmetry
- environment-first composition permitted

**Interaction behavior**

- simple reveal or progression only where it aids comprehension

**Responsive expectation**

- field context must not depend on side-by-side layout

**Evidence boundary**

- do not dramatize beyond supported reality

---

## 07 — PROBLEM → RESPONSE → RESULT

**Purpose**  
Compress a supported problem/response/current-result relationship.

**Allowed depth**  
L1, occasionally L0 teaser.

**Required content**

- problem
- implemented response
- supported current result/state

**Optional content**

- visual progression
- before/after structure

**Visual behavior**

- sequential composition
- may use scale or contrast change

**Interaction behavior**

- sequence may reveal through scroll

**Responsive expectation**

- convert to vertical sequence on small screens

**Evidence boundary**

- “result” means supported state, not automatically measured business impact

---

## 08 — DECISION / PIVOT

**Purpose**  
Explain why the implementation or engineering direction changed.

**Allowed depth**  
L1.

**Required content**

- prior state / hypothesis
- supported constraint
- resulting decision

**Optional content**

- trade-off diagram
- discarded options where documented

**Visual behavior**

- contrast between paths
- editorial emphasis

**Interaction behavior**

- controlled path progression may communicate decision logic

**Responsive expectation**

- paths become ordered blocks rather than compressed branching

**Evidence boundary**

- never invent failure / pivot for narrative drama

---

## 09 — SYSTEM ARCHITECTURE

**Purpose**  
Show how a system or operating structure is composed.

**Allowed depth**  
L1, L2, L3.

**Required content**

- canonical components
- supported relationships

**Optional content**

- data flow
- physical/digital mapping
- implementation stack

**Visual behavior**

- diagrammatic composition
- animated path progression allowed outside L3

**Interaction behavior**

- detail reveal may expose layers

**Responsive expectation**

- readable simplified sequence required on mobile

**Evidence boundary**

- architecture diagram is explanatory unless it is itself source evidence
- do not imply unsupported runtime behavior

---

## 10 — PROCESS / FLOW SEQUENCE

**Purpose**  
Explain progression, causality, or operational flow.

**Allowed depth**  
L1, L2, optionally L3 in technical form.

**Required content**

- ordered supported steps

**Optional content**

- visual state for each step
- transition annotations

**Visual behavior**

- horizontal, vertical, pinned, or spatial sequence

**Interaction behavior**

- scroll-linked progression when meaningfully justified

**Responsive expectation**

- must degrade into plain readable order

**Evidence boundary**

- sequence must not invent chronology unsupported by canonical state

---

## 11 — CURRENT STATE

**Purpose**  
State where the case actually reached.

**Allowed depth**  
L0 teaser, L1, L3.

**Required content**

- supported current-state language

**Optional content**

- status strip
- operational state
- depth / evidence state

**Visual behavior**

- strong concise statement or technical strip depending on depth

**Interaction behavior**

- optional link to evidence

**Responsive expectation**

- preserve exact state wording

**Evidence boundary**

- distinguish built / deployed / operational / reviewed / considered / approved / measured

---

## 12 — CLAIM BOUNDARY

**Purpose**  
Make unsupported conclusions explicit rather than implicit.

**Allowed depth**  
L1 and L3, optionally L2 near evidence-sensitive visuals.

**Required content**

- what the case does not establish

**Optional content**

- paired proven/not-proven structure
- analytical threshold caveats

**Visual behavior**

- restrained, high-legibility treatment
- no theatrical ambiguity

**Interaction behavior**

- may link to full dossier

**Responsive expectation**

- remain visible; never hide behind hover-only UI

**Evidence boundary**

- canonical wording has priority over marketing tone

---

## 13 — FULL-BLEED EXHIBIT

**Purpose**  
Give one real output dominant visual attention.

**Allowed depth**  
L2 primarily, selective L1 use.

**Required content**

- one public-safe dominant asset
- concise caption / classification where relevant

**Optional content**

- atmospheric frame
- metadata overlay
- detail CTA

**Visual behavior**

- edge-to-edge / fullscreen permitted
- project atmosphere may surround the asset

**Interaction behavior**

- zoom / detail exploration where justified

**Responsive expectation**

- edge-to-edge media allowed
- source must remain legible

**Evidence boundary**

Allowed asset types:

- high-resolution screenshot
- publication-safe system view
- video still
- source-faithful visual
- explicitly classified derivative

Never present a derivative as raw evidence.

---

## 14 — SEQUENCE EXHIBIT

**Purpose**  
Use multiple visuals when meaning depends on progression.

**Allowed depth**  
L2 primarily.

**Required content**

- ordered visual sequence
- supported progression labels

**Optional content**

- pinned scroll
- crossfade
- horizontal progression

**Visual behavior**

- immersive sequence

**Interaction behavior**

- scroll-driven progression permitted

**Responsive expectation**

- convert to vertical visual steps when pinned sequence is unsuitable

**Evidence boundary**

Working examples:

```text
WMS
Physical Warehouse
→ Digital Location
→ QR / Rack
→ Transaction
→ Inventory State
```

```text
COLD
DETECT
→ ANALYZE
→ OPERATE
→ DIAGNOSE
→ DECIDE
```

Sequence visuals must not invent chronology unsupported by canonical case state.

---

## 15 — DETAIL ZOOM

**Purpose**  
Move from whole-system view into a meaningful implementation detail.

**Allowed depth**  
L2.

**Required content**

- source visual
- meaningful detail target

**Optional content**

- annotation
- explanatory caption

**Visual behavior**

- zoom-to-detail / crop transition permitted

**Interaction behavior**

- scroll or explicit user control

**Responsive expectation**

- mobile may use separate full-width detail image instead of animated zoom

**Evidence boundary**

- crop / zoom must not remove context required for accurate interpretation

---

## 16 — SYSTEM IN MOTION / VIDEO

**Purpose**  
Show system operation, demonstration, interview, recognition, or motion-dependent context.

**Allowed depth**  
L1 or L2.

**Required content**

- meaningful motion source
- accessible fallback / context

**Optional content**

- poster
- captions
- transcript
- chapter markers

**Visual behavior**

- full-bleed or contained cinematic presentation

**Interaction behavior**

- user-controlled playback
- autoplay must not be required to understand the story

**Responsive expectation**

- touch-safe controls
- poster-first loading
- captions / transcript consideration

**Evidence boundary**

Video is not a separate depth.

Working Inventory pattern:

```text
Dashboard / Data Story
→ Organizational Recognition
→ Interview / System in Motion
```

Potential headline direction:

```text
THE WORK WAS
SELECTED AND SHARED.
```

Recognition / diffusion must not be promoted into measured business impact.

---

## 17 — RECOGNITION / DIFFUSION

**Purpose**  
Show that work was selected, shared, discussed, or diffused beyond its initial implementation context.

**Allowed depth**  
L1 / L2.

**Required content**

- verified recognition / diffusion event

**Optional content**

- interview
- presentation
- internal sharing artifact

**Visual behavior**

- editorial or video-led

**Interaction behavior**

- may open related Showcase module

**Responsive expectation**

- retain clear event context

**Evidence boundary**

- recognition is not measured impact
- interview presence does not prove business outcome

---

## 18 — EVIDENCE ENTRY

**Purpose**  
Connect narrative/showcase layers to the case dossier.

**Allowed depth**  
L1 / L2.

**Required content**

- clear dossier CTA

**Optional content**

Concise trust signals such as:

- Sanitized Evidence
- Operational State
- Integrity Verified
- Claim Boundary

**Visual behavior**

- high-confidence transition into a lower-theatrical, higher-precision layer

**Interaction behavior**

Working CTA directions:

- `VIEW VERIFIED EVIDENCE`
- `OPEN CASE DOSSIER`

Must route to an addressable Evidence page.

**Responsive expectation**

- CTA remains prominent and touch-safe

**Evidence boundary**

- do not reproduce the full dossier inside L0/L1/L2
- concise trust signals must be canonical

---

## 19 — DOSSIER SYNOPSIS

**Purpose**  
Orient the visitor at the start of L3.

**Allowed depth**  
L3.

**Required content**

- case synopsis
- evidence scope
- current status

**Optional content**

- canonical arc
- depth / evidence count

**Visual behavior**

- technical, precise, low-theatrical

**Interaction behavior**

- links to dossier sections

**Responsive expectation**

- metadata stacks cleanly

**Evidence boundary**

- synopsis cannot change FORGE / canonical classification

---

## 20 — EVIDENCE LEDGER

**Purpose**  
Expose evidence items, classes, supported claims, and boundaries.

**Allowed depth**  
L3 only.

**Required content**

- evidence item / source label
- classification
- supported claim
- boundary

**Optional content**

- source date
- asset link
- integrity status

**Visual behavior**

- dense structured table / ledger / technical list

**Interaction behavior**

- filtering or anchors may be added later

**Responsive expectation**

- tables may transform into stacked records while preserving field labels

**Evidence boundary**

- portfolio presentation must not alter canonical evidence class or promotion state

---

## 21 — SOURCE / INTEGRITY

**Purpose**  
Expose repository / source / hash / commit / integrity information where relevant.

**Allowed depth**  
L3.

**Required content**

- source or repository reference appropriate to public disclosure
- integrity / status when available

**Optional content**

- commit SHA
- blob SHA
- file size
- SHA-256

**Visual behavior**

- technical typography
- compact aligned metadata

**Interaction behavior**

- links may open source repository locations where public and appropriate

**Responsive expectation**

- long hashes must remain selectable/readable without breaking layout

**Evidence boundary**

- private source IDs / URLs / secrets must never be exposed

---

## 22 — NEXT CASE

**Purpose**  
Continue exploration without returning to a card archive.

**Allowed depth**  
L1 / L2 / L3 endings.

**Required content**

- next case identity
- concise reason to continue

**Optional content**

- preview visual
- atmosphere transition

**Visual behavior**

- project-atmosphere handoff
- large transition permitted

**Interaction behavior**

- explicit link to next Case Story

**Responsive expectation**

- simple, clear CTA on mobile

**Evidence boundary**

- preview language remains public-safe and canonical

---

## 23 — GLOBAL DEPTH NAVIGATION

**Purpose**  
Keep current case, current depth, portfolio return path, and deeper paths understandable.

**Allowed depth**  
L0 / L1 / L2 / L3 with depth-specific variation.

**Required content**

- current location
- path back to Portfolio / Work Index

**Optional content**

- sibling depth links
- next / previous case

**Visual behavior**

Conceptual forms may include:

```text
PORTFOLIO / WMS / SHOWCASE
```

or:

```text
CASE 01
WMS
L2 / SHOWCASE
```

Exact component form is not frozen.

**Interaction behavior**

- all deep layers remain URL-addressable
- modal-only deep navigation prohibited

**Responsive expectation**

- may collapse into compact depth-aware header
- must preserve current case and depth

**Evidence boundary**

- depth labels must not imply quality / importance ranking

## Module Composition Principle

Modules should be composed according to case need, not used as a mandatory checklist.

A case should not be forced to include:

- a pivot when none existed
- a video when none is useful
- a Full-Bleed Exhibit without suitable public material
- a Dossier without canonical evidence maturity
- the same module sequence as another case

The system is reusable because modules can be assembled differently while preserving global depth, navigation, evidence, responsive, and accessibility contracts.
