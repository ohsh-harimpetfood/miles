# PORTFOLIO-001 v2 — Architecture

**Status:** Structure Freeze Seed

This document freezes the structural contract for the PORTFOLIO-001 v2 Expandable Portfolio System. It defines visitor depth, homepage composition, URL behavior, work taxonomy, and extensibility boundaries before any frontend implementation begins.

## 1. Visitor Hierarchy

```text
L0 PORTFOLIO
→ L1 CASE STORY
→ L2 SHOWCASE
→ L3 CASE DOSSIER / EVIDENCE
```

### L0 — PORTFOLIO

전체를 빠르게 이해하는 층.

Purpose:

- establish positioning
- show representative capability
- surface a small number of selected cases
- reveal the breadth of work without becoming a project archive
- provide clear paths into deeper case material

### L1 — CASE STORY

왜 문제를 다뤘고 해결 구조가 어떻게 진화했는지 이해하는 층.

Purpose:

- explain field reality and problem framing
- show the sequence of decisions and implementation
- connect context to operational state
- summarize what the case proves and where its claim boundary remains

### L2 — SHOWCASE

실제로 무엇을 만들었는지 시각적으로 경험하는 층.

Purpose:

- demonstrate actual work quality, system scope, interface, workflow, or scale
- provide visual continuity through sanitized source material or explicitly classified derivatives
- earn attention without replacing evidence discipline

### L3 — CASE DOSSIER / EVIDENCE

무엇이 실제로 검증되는지 evidence / source / lineage / claim boundary / integrity까지 확인하는 층.

Purpose:

- expose canonical evidence state
- show source lineage and provenance
- separate supported claims from unproven claims
- record integrity / commit / evidence classification where available

Not every project must reach L3. Project depth is progressive and reflects evidence/content maturity, not project importance.

## 2. Primary Visitor Progression

Primary progression:

```text
Portfolio
→ Case Story
→ Showcase
→ Evidence
```

An expert visitor may move directly from Case Story to Evidence when evidence inspection is more relevant than visual exploration.

Evidence is case-local by default. It is not a global homepage section that flattens all cases into one undifferentiated proof wall.

## 3. Homepage / L0 Contract

Homepage sequence:

```text
POSITION
→ CAPABILITY
→ SELECTED WORK
→ WORK SPECTRUM
→ EVOLUTION
→ METHOD
```

### POSITION

Who this work represents and the operating identity behind it.

### CAPABILITY

The major layers of capability without turning the homepage into a complete project directory.

### SELECTED WORK

A small set of representative cases with clear case-entry paths.

Selected Work is not the complete work archive.

### WORK SPECTRUM

Shows breadth across domains and systems without requiring every case to appear as a homepage feature.

### EVOLUTION

Explains how the scope of work developed across operating management, engineering, systems, data, automation, and AI-assisted execution.

### METHOD

Shows the recurring execution model and working methods that connect problem framing to implemented systems and evidence.

## 4. Work Index

The complete case set is explored through a dedicated Work Index.

URL:

`/v2/work/`

Purpose:

- browse all registered cases
- filter / group by metadata rather than homepage layout
- expose case depth and current status
- add new cases without redesigning the homepage

Homepage and Work Index serve different functions:

```text
Homepage
→ representative understanding

Work Index
→ complete exploration
```

## 5. URL Contract

Canonical routing contract:

```text
/v2/
/v2/work/
/v2/work/{case}/
/v2/work/{case}/showcase/
/v2/work/{case}/evidence/
```

Meaning:

- `/v2/` — Portfolio / L0
- `/v2/work/` — Work Index
- `/v2/work/{case}/` — Case Story / L1
- `/v2/work/{case}/showcase/` — Showcase / L2
- `/v2/work/{case}/evidence/` — Case Dossier / Evidence / L3

All deep-dive pages must be URL-addressable.

**Modal-only deep dive is prohibited.**

A modal may support local interaction, but it cannot be the only addressable form of a case story, showcase, or evidence dossier.

## 6. Work Taxonomy

Page hierarchy and work taxonomy are separate systems.

Primary Domain options:

- Manufacturing & Operations
- Process & Facility Engineering
- Digital Execution Systems
- Data & Decision
- Enterprise Systems & Business Process
- Work Systems & Methods

A case may carry the following metadata:

- **Primary Domain**
- **Secondary Capabilities**
- **Methods**
- **Depth**
- **Status**

A case may cross multiple capabilities, but exactly one **Primary Domain** should be assigned for primary navigation / grouping.

Taxonomy describes what the work is. Depth describes how much public material is available. URL hierarchy describes where the visitor is. These concepts must not be collapsed into one hierarchy.

## 7. Evidence Placement

Evidence is normally the deepest case layer.

```text
Case Story
→ Showcase
→ Evidence
```

But expert access is allowed:

```text
Case Story
→ Evidence
```

A homepage-level evidence section may summarize trust signals, but it must not replace the case-local evidence dossier.

If a FORGE / MILES canonical case exists, the portfolio evidence layer must defer to that state.

Portfolio narrative must not:

- change evidence classification
- turn a derivative into raw evidence
- amplify claim strength
- remove a claim boundary
- infer unsupported impact
- rewrite source lineage

## 8. New Case Extensibility Contract

New case flow:

```text
Register case metadata
→ Assign Primary Domain
→ Set current Depth
→ Add Portfolio Teaser if selected
→ Add Case Story when ready
→ Add Showcase when visual material is ready
→ Add Case Dossier when evidence maturity permits
```

The system must allow this sequence without redesigning the homepage.

If adding a new case requires structural homepage redesign, global route changes, or new evidence semantics, that is an **architecture regression** unless explicitly approved as a new architecture version.

## 9. Progressive Depth Principle

Not all projects need the same public depth.

Examples:

- a strategically important project may remain D1 if no public-safe visual material exists
- a smaller but well-documented project may reach D3
- lack of L3 evidence does not imply low importance
- depth is not a ranking system

This prevents the portfolio from fabricating visual or documentary material solely to create structural symmetry.

## 10. v1 Preservation Boundary

v1 remains the current root Narrative Portfolio Prototype.

v2 is a parallel Expandable Portfolio System under `workbench/PORTFOLIO-001/v2/`.

Structure Freeze does not copy, port, rewrite, or delete v1 frontend implementation.

Potential semantic reuse from v1 may be considered later, including:

- WHO / WHAT / HOW / PROOF / EVOLUTION / IMPACT / METHOD
- Manufacturing capability SVG
- chapter / focus navigation concepts
- lens concept
- theme experiments
- WMS / COLD narrative work

Frontend implementation reuse is out of scope for this pass.

## 11. Root Promotion Gate

v2 must not automatically replace the root portfolio.

A separate promotion pass must review at minimum:

- structure stability
- design consistency
- mobile usability
- deep-link behavior
- WMS / COLD / Inventory representative coverage
- evidence linkage
- no claim regression
- v1 archival preservation

Until that review passes, root v1 remains intact.
