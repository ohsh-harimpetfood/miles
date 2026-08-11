# PORTFOLIO-001 v2 — Case Model

**Status:** Structure Freeze Seed

This document defines the progressive case-depth model, standard Case Story spine, Showcase rules, Case Dossier candidate structure, and current working allocations for PORTFOLIO-001 v2.

## 1. Depth Model

### D0 — Portfolio Teaser

Public-safe summary only.

May include:

- title
- short problem / capability statement
- selected role in the portfolio
- current case status

D0 does not imply that a full narrative, showcase, or evidence dossier exists.

### D1 — Case Story

A stable narrative exists.

Expected characteristics:

- field reality / problem definition
- why the problem mattered
- implementation or decision sequence where supported
- current operational state where supported
- what the case proves
- claim boundary

### D2 — Showcase

Public-safe visual / system / video assets exist.

Expected characteristics:

- sanitized captures
- source-faithful publication visuals
- videos where appropriate
- system flow or UI sequence
- visual derivatives only when explicitly classified

Showcase quality and visual richness do not replace evidence classification.

### D3 — Case Dossier

Canonical evidence / claim boundaries / source lineage exist.

Expected characteristics:

- evidence ledger
- documentary / operational lineage where applicable
- public visual evidence state
- architecture / decision records
- what is proven / not proven
- source / commit / integrity information where available

**Depth is not a project importance ranking.** It describes evidence/content maturity and available public material.

## 2. Current Working Allocations

These are **working allocations**, not automatic promotions. Each case must be verified before its depth is promoted in implementation.

| Case / Work | Working Depth | Notes |
|---|---|---|
| **WMS** | D3 candidate | Canonical FORGE case with public evidence / claim boundaries available. |
| **COLD** | D3 candidate | Canonical FORGE case with documentary, operational, and public visual evidence state available. |
| **Inventory Dashboard** | D2 candidate | Showcase candidate; Interview / recognition belongs inside Showcase as a module rather than a separate evidence claim. |
| **Feature as Code** | D2 candidate | Visual / system demonstration candidate; evidence depth requires separate verification. |
| **HTML Document Library** | D2 candidate | Public-safe system / visual material candidate; evidence maturity requires separate verification. |
| **SAP / One ERP** | D1 candidate | Narrative candidate; deeper evidence requires separate public-source maturity review. |
| **Process & Facility Engineering cases** | D1+ candidate | Expand according to source/public-material maturity; do not infer construction delivery without evidence. |

No allocation above changes canonical FORGE status or evidence classification.

## 3. Standard Case Story Spine

Recommended spine:

```text
Field Reality
→ Problem Definition
→ Why It Mattered
→ First Executable Hypothesis
→ Constraint / Failure
→ Pivot / Decision
→ Implemented Structure
→ Operational State
→ What This Proves
→ Claim Boundary
→ Next Exploration
```

This is a narrative scaffold, not a mandatory checklist.

Rules:

- omit stages that are not relevant
- do not invent a failure solely to create drama
- do not invent a pivot that is not supported
- do not manufacture chronology for structural symmetry
- preserve the actual order of problem, decision, implementation, and operation
- distinguish built state from planned / reviewed / considered state

A case may move directly from an initial hypothesis to implemented structure if no meaningful failure / pivot occurred.

## 4. Case Story Content Contract

A Case Story should answer, where supported:

- What was the field reality?
- What problem was actually defined?
- Why did it matter operationally?
- What executable hypothesis or first implementation existed?
- What constraint changed the direction?
- What decision / pivot followed?
- What structure was implemented?
- What operating state was reached?
- What capability does the case directly prove?
- What does the case not prove?
- What remains open for future exploration?

The Case Story should be readable without opening the dossier, but it must not silently exceed dossier-supported claims when a dossier exists.

## 5. Showcase Contract

**Showcase is not an evidence ledger.**

Purpose:

- show actual work quality
- communicate scale / structure / system experience
- make implementation tangible
- provide visual continuity through the case

Allowed:

- sanitized full-screen captures
- source-faithful publication visuals
- video
- system flow
- UI sequence
- visual derivatives when explicitly classified

Not allowed:

- fake production screen presented as source
- generated derivative presented as raw evidence
- claim amplification through captioning
- fabricated metrics
- altered visual that removes a necessary claim boundary
- reconstruction presented without derivative classification

Working principle:

> Showcase earns attention. Evidence earns trust.

A strong Showcase may exist at D2 without a D3 dossier. It must remain honest about that depth.

## 6. Evidence Form Boundary

Where a visual has evidentiary value, classification remains explicit.

Examples:

- **Sanitized Evidence** — source visual retained with privacy-sensitive information removed while preserving evidentiary meaning
- **Visual Derivative** — reconstructed visual based on canonical data / claims for explanation

Portfolio presentation must not merge these classes.

A generated or redrawn explanatory graphic cannot be promoted as raw evidence solely because it is accurate or visually useful.

## 7. Case Dossier Candidate Structure

A D3 Case Dossier may include:

1. **Synopsis**
2. **Evidence Ledger**
3. **Documentary Lineage**
4. **Operational Evidence**
5. **Public Visual Evidence**
6. **Architecture / Decisions**
7. **Claim Boundaries**
8. **What Is Proven**
9. **What Is Not Proven**
10. **Source / Commit / Integrity**

Not every dossier needs every section. Sections should correspond to actual evidence types.

For example:

- a repository-native software case may emphasize commit / implementation evidence
- a historical operational case may require documentary lineage
- an operational-reporting case may require source-system evidence boundaries
- a project with no public visual assets should not fabricate a Public Visual Evidence section

## 8. Canonical Source-of-Truth Rule

If a FORGE / MILES canonical state exists, that state is authoritative for:

- evidence classification
- supported claims
- unsupported claims
- source lineage
- public evidence status
- integrity status
- business-impact boundary

Portfolio layers may improve narrative readability and visitor navigation, but they must not change those facts.

A Case Story, Showcase, or Dossier must not:

- promote an unverified metric
- remove an evidence caveat
- convert `considered` into `approved`
- convert `implemented` into `measured impact`
- convert `operational` into `ROI proven`
- convert `LLM-assisted` into autonomous AI
- convert a derivative into source evidence

## 9. Primary Domain & Metadata Contract

Each registered case should support metadata compatible with the architecture contract:

- **Primary Domain** — exactly one
- **Secondary Capabilities** — zero or more
- **Methods** — zero or more
- **Depth** — D0 / D1 / D2 / D3
- **Status** — case-specific current state

Primary Domain options are defined in `ARCHITECTURE.md`.

One case may cross several capabilities. Primary Domain exists to support primary grouping and discovery, not to erase cross-domain work.

## 10. New Case Progression

A new case should progress only as its public material matures:

```text
Register metadata
→ D0 Portfolio Teaser if selected
→ D1 Case Story when narrative is stable
→ D2 Showcase when public-safe visual/system material is ready
→ D3 Case Dossier when canonical evidence maturity permits
```

Depth upgrades should be evidence/content events, not cosmetic portfolio milestones.

Do not fabricate missing material to force a case into the same depth as WMS or COLD.

## 11. Regression Conditions

The case model is considered regressed if future implementation:

- treats depth as project ranking
- requires every case to have every narrative stage
- requires every case to have visual evidence
- turns Showcase into an evidence ledger
- hides deep dives behind modal-only interaction
- changes canonical evidence classification in presentation code
- forces homepage redesign when a new case is registered
- introduces unsupported failure / pivot / outcome claims for narrative symmetry

Any intentional departure requires a separate architecture decision and versioned update to these structure documents.
