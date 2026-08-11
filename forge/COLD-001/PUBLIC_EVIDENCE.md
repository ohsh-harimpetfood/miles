# COLD-001 — Public Evidence Selection

**Status:** Selection Review v0.3 — candidates identified; binary assets not yet promoted

This document defines which visual evidence candidates best support the canonical COLD-001 transformation and what must be true before any future public asset promotion.

**No binary evidence is published in this pass.**  
**No private source bytes are copied into the repository.**  
**Candidate selection does not equal publication approval.**  
**Sanitization must precede repository asset promotion.**

The canonical source remains:

- [`README.md`](./README.md)
- [`EVIDENCE.md`](./EVIDENCE.md)

## Selection Purpose

The selection question is not which screenshot or chart looks best. The question is which visual most directly supports the case transformation:

```text
Weak Visibility
→ Measurement
→ Analytical Visibility
→ Operational Risk Diagnosis
→ Engineering / Investment Decision Support
```

Public-facing shorthand:

```text
DETECT
→ ANALYZE
→ DIAGNOSE
→ DECIDE
```

A `PRIMARY` candidate must satisfy all three conditions:

1. directly support a canonical claim
2. be understandable to a first-time viewer
3. be publishable through reasonable sanitization without changing the evidentiary meaning

Visual attractiveness alone is not a basis for `PRIMARY` selection.

## Evidence Form Definitions

### Sanitized Evidence

An actual historical source visual with privacy-sensitive or confidential information removed, masked, or generalized while preserving the core data, structure, relationship, and evidentiary meaning.

Sanitization should alter sensitive data, not unnecessarily replace the evidence itself.

### Visual Derivative

A newly reconstructed graphic based on canonical data or claims for explanatory / portfolio use.

A Visual Derivative is **not** raw or primary historical evidence and must be classified separately from Sanitized Evidence.

### No recreated evidence rule

A newly redrawn chart must not be labeled simply as `Evidence` if the original source visual was not preserved. If reconstruction is necessary, it must be published as a `Visual Derivative` with an explicit link back to the canonical documentary source and claim boundary.

## Sanitization Risk Scale

| Level | Meaning |
|---|---|
| **LOW** | Visual is already generic or contains little to no internal identification; only minor publication review is expected. |
| **MEDIUM** | CT labels, dates, internal UI labels, contextual identifiers, or limited sensitive fields may need masking / generalization. |
| **HIGH** | Visual may contain inventory names or values, approval information, vendor / commercial data, internal financial assumptions, infrastructure identifiers, or other confidential business detail. Equivalent lower-risk evidence should be preferred when available. |

Risk levels in this selection are **preliminary** because the actual source image / page is not copied or published in this pass. Page-level review is required before promotion.

## Recommended Primary Public Set

Maximum primary set: **4 visual assets**.

The recommended set follows the case transformation rather than document count:

```text
01 Failure Visibility
→ 02 Analytical Visibility
→ 03 Risk Diagnosis
→ 04 Decision Support
```

Evidence density is preferred over evidence quantity. Duplicated PPT / PDF derivatives do not justify additional public assets.

## Candidate 01 — Failure Visibility / Logger Demonstration

**Transformation role:** DETECT / Measurement  
**Source date:** 2025-07-15  
**Source family:** Temperature Logger Demonstration Test Report  
**Documentary class:** PRIMARY / DIRECT  
**Sanitization risk:** MEDIUM  
**Publication recommendation:** PRIMARY

### Supported claim

Measurement made a previously weakly visible operating condition observable.

The historical source supports one Cold Container demonstration in which a logger was installed, an abnormal operating condition was identified after measurement began, corrective / defrost intervention occurred, and measurement continued afterward.

### Why it matters

This visual should establish the first transformation step: the case did not start with a dashboard. It started by making an actual internal operating condition visible enough to act on.

### Preferred public visual

Prefer one source visual that preserves the historical measurement meaning, such as:

- temperature trend from the demonstration period
- logger analysis result
- a chart where intervention / defrost transition is understandable without exposing private business data

### Sanitization required

Remove or generalize where present:

- product names
- raw inventory list
- exact internal inventory monetary exposure
- employee names
- approval numbers
- vendor contacts
- email addresses
- private filesystem / Drive references
- unrelated internal identifiers

May retain if necessary to preserve meaning:

- generic `CT10`, or sanitize further to `DEMO CT` if the identifier is not necessary
- dates relevant to the measurement sequence
- temperature values
- analysis metric
- intervention marker

### Boundary

The visual supports visibility of one demonstrated operating condition. It does not by itself prove population-wide performance, quantified savings, ROI, product-loss prevention, or company-wide monitoring deployment.

### Proposed future path

`forge/COLD-001/assets/01-failure-visibility.png`

**Proposal only — no file exists from this pass.**

## Candidate 02 — Analytical Visibility / Multi-Container Heatmap

**Transformation role:** ANALYZE / Analytical Visibility  
**Source date:** 2026-07-03  
**Source family:** Cold Container Temperature Analysis Program User Manual  
**Documentary class:** PRIMARY / DIRECT OPERATIONALIZATION EVIDENCE  
**Sanitization risk:** MEDIUM  
**Publication recommendation:** PRIMARY

### Supported claim

Multiple containers could be compared through a user-facing analysis workflow.

Retention was analyzed separately from minimum temperature.

### Why it matters

This candidate shows the move from one-chart review to a repeatable multi-container analytical interface. It visually anchors the distinction between merely collecting temperature values and comparing operating stability across containers.

### Preferred public visual

Select **one**, or at most **two only if they communicate materially different claims**, from:

- overall status heatmap
- minimum-temperature heatmap
- freezing-efficiency view
- `-15℃` retention heatmap

Preferred priority is a visual that makes cross-container comparison obvious and, where possible, demonstrates that retention / stability is a separate analytical view from minimum temperature.

If two source areas are ultimately needed, they should still be treated as one logical `Analytical Visibility` evidence role rather than inflated into independent evidence count without justification.

### Sanitization required

Review and remove / generalize where present:

- internal UI title or organization identifiers
- private URLs or filesystem paths
- user / account information
- confidential product or inventory labels
- unnecessary container identifiers
- internal report / approval identifiers

CT labels and dates may be retained only when useful to understand the analysis and safe for publication; otherwise generalize them.

### Screenshot crop boundary

If the user manual page contains several screenshots, a privacy-preserving crop of the relevant source interface area may be acceptable **only if**:

- the crop remains an actual source visual
- the analytical context is not distorted
- axes / legends / key comparison meaning are preserved
- the crop does not omit contradictory or limiting information needed to understand the claim

A source crop meeting those conditions remains `Sanitized Evidence`. A recreated heatmap is a `Visual Derivative`.

### Not supported from screenshot alone

- user count
- usage frequency
- daily operation frequency
- business impact
- AI accuracy
- automatic decision making
- report-send count

### Proposed future path

`forge/COLD-001/assets/02-analysis-heatmap.png`

**Proposal only — no file exists from this pass.**

## Candidate 03 — Risk Diagnosis / Multi-CT Stability

**Transformation role:** DIAGNOSE / Operational Risk Diagnosis  
**Source date:** 2026-08-07  
**Source family:** Cold Container Operational Stability Diagnosis  
**Documentary class:** PRIMARY / DIRECT  
**Sanitization risk:** MEDIUM  
**Publication recommendation:** PRIMARY

### Supported claim

The multi-CT dataset exposed broader operating / environmental risk patterns that could not be reduced to one isolated broken unit.

The preferred visual should explain at least one canonical diagnosis:

- weekday vs weekend retention difference
- simultaneous multi-CT degradation
- minimum-temperature trap
- multi-CT retention distribution

### Selection priority

Priority should be given to the source visual that most clearly communicates:

> the diagnosed problem was broader than a single isolated CT failure.

A simultaneous-degradation or multi-CT retention distribution visual is therefore preferred when it is understandable and sanitizable. A minimum-temperature-trap visual is also strong when it clearly shows why minimum temperature alone can miss continuous instability.

### Canonical numbers allowed if retained

Only already-canonical values may remain in a public visual without a new evidence review:

- `41 days`
- `529 daily aggregate records`
- `12 operating CT`
- `465 complete container-days`
- weekday retention difference: `11.1 percentage points`
- `20 / 41 days`
- `104 / 529 records`

Any additional number requires separate verification against the canonical documentary source before publication.

### Sanitization required

Remove or generalize where present:

- organization / internal report identifiers
- private source paths or URLs
- employee / approver identities
- confidential inventory / product context
- internal financial values
- vendor / infrastructure information unrelated to the diagnosis

Container labels may be generalized where they do not carry analytical meaning.

### Analytical boundary

`-15℃`, `80%`, and `90% retention` are analytical criteria for this diagnosis. They must not be visually presented as statutory, legal, universal food-safety, or product-acceptance standards.

The canonical observations remain dataset-specific. They are not universal laws and do not establish causality by themselves.

### Proposed future path

`forge/COLD-001/assets/03-risk-diagnosis.png`

**Proposal only — no file exists from this pass.**

## Candidate 04 — Decision Support / Storage Alternatives

**Transformation role:** DECIDE / Engineering & Investment Decision Support  
**Source date:** 2026-08-07  
**Source family:** Cold Container Operational Stability Diagnosis  
**Documentary class:** PRIMARY / DIRECT  
**Sanitization risk:** HIGH  
**Publication recommendation:** PRIMARY — page-level review required before asset promotion

### Supported claim

The analysis expanded beyond equipment repair into explicit engineering / investment alternative evaluation.

Canonical option structure:

- **A — Maintain / repeated repair**
- **B — Selected CT replacement + operating-environment improvement**
- **C — Integrated cold-storage facility**

### Why it matters

This candidate closes the transformation arc. It demonstrates that analysis was used to frame a decision problem rather than merely produce a dashboard or technical ranking.

### Preferred public visual

Prefer an actual source option-comparison table / matrix if it can be sanitized without removing the comparison logic.

Allowed public content can include:

- option structure
- relative qualitative comparison
- stability considerations
- scalability considerations
- operating-environment considerations
- engineering trade-offs already supported by the canonical source

### High-risk sanitization required

Do not publicly expose without separate review:

- internal CAPEX estimates
- vendor quotation or vendor identity
- confidential OPEX assumptions
- exact inventory valuation
- exact payback assumptions
- internal approval identifiers
- employee / approver names
- commercially sensitive facility detail

If removing sensitive values would destroy the original comparison logic, do **not** misrepresent the sanitized result as primary evidence. In that case either:

1. select a safer equivalent source visual, or
2. publish a separately classified `Visual Derivative` based only on canonical qualitative option structure.

### Claim boundary

This candidate supports decision framing only.

It does **not** support:

- selected option
- approved investment
- approved CAPEX
- construction completed
- ROI
- payback
- verified economic outcome

### Proposed future path

`forge/COLD-001/assets/04-investment-options.png`

**Proposal only — no file exists from this pass.**

## Evidence Role Matrix

| Candidate | Transformation Role | Supported Claim | Sanitization Risk | Recommendation |
|---|---|---|---|---|
| **01 — Failure Visibility / Logger Demonstration** | DETECT / Measurement | Measurement exposed a previously weakly visible abnormal operating condition in the demonstration scope | MEDIUM | **PRIMARY** |
| **02 — Analytical Visibility / Multi-Container Heatmap** | ANALYZE / Analytical Visibility | Multiple containers could be compared in a user-facing workflow; retention was analyzed separately from minimum temperature | MEDIUM | **PRIMARY** |
| **03 — Risk Diagnosis / Multi-CT Stability** | DIAGNOSE / Operational Risk Diagnosis | Multi-CT analysis exposed broader operating / environmental instability patterns | MEDIUM | **PRIMARY** |
| **04 — Decision Support / Storage Alternatives** | DECIDE / Engineering & Investment Decision Support | Analysis was translated into maintain / partial-improvement / integrated-storage alternatives | HIGH | **PRIMARY** — page-level review required |

Primary candidate count: **4**

These are selection recommendations, not binary publication approvals.

## Rejected / Deferred Visuals

### Legacy `44 → 116` freezing-efficiency visual

**Recommendation:** REJECT as primary public evidence

**Reason:** metric definition requires reconciliation and is not directly comparable to current bounded retention. It remains documentary metric-lineage evidence only.

### Historical productivity / error-rate charts

**Recommendation:** REJECT as primary public evidence

Includes visual claims based on historical presentation values such as time reductions, percentage reductions, annual hours, `5–10%` error, or `0% error`.

**Reason:** canonical evidence does not establish sufficiently consistent definitions / baselines / measurement protocol for promotion as measured business impact.

### Network / infrastructure diagrams

**Recommendation:** DEFER from the primary Cold Chain visual set

**Reason:** 2024–2025 network materials are valuable documentary context but risk making infrastructure history appear to be the primary COLD-001 transformation. They may be considered later as appendix / context evidence only.

Do not expose internal IP maps, network topology, private identifiers, device inventories, vendor information, or configuration detail.

### Blank automatic-report sheet copy

**Recommendation:** REJECT

**Reason:** current copy is classified `EXCLUDED / CURRENT COPY NOT EVIDENTIARY` and does not establish email sending, report count, or operating history.

### Other visuals excluded from primary selection by default

- presentation title slides
- generic architecture diagrams that do not directly support the transformation
- raw source-code screenshots
- vendor quotations
- network configuration screens
- internal IP maps
- raw inventory tables
- approval paperwork
- duplicated PPT / PDF visuals from one logical source family

## Publication Boundary

Before any future binary promotion, the actual source visual / page must be reviewed for:

- claim supported
- evidence class
- privacy and confidentiality
- organization / employee identifiers
- product / inventory information
- exact internal financial values
- vendor / quotation information
- private URLs / Drive references
- infrastructure identifiers
- approval / workflow identifiers
- misleading crop risk
- non-canonical metrics

Sanitization must occur **before** repository asset transport. Repository transport itself is not a sanitization mechanism.

If sensitive information cannot be removed while preserving the evidentiary structure, the visual should not be promoted as Sanitized Evidence.

## Future Asset Path Proposals

The following paths are naming proposals only:

```text
forge/COLD-001/assets/01-failure-visibility.png
forge/COLD-001/assets/02-analysis-heatmap.png
forge/COLD-001/assets/03-risk-diagnosis.png
forge/COLD-001/assets/04-investment-options.png
```

**No directory or binary asset is created by this selection review.**

## Public Evidence Status

**Public Sanitized Visual Evidence:** Not Yet Promoted

Current state:

- documentary evidence lineage: promoted
- public visual candidates: selected
- binary publication approval: not yet granted
- sanitized binary assets in repository: none from this pass
- private source bytes copied to repository: none

Next legitimate step is a source-image / source-page review with the user before any binary asset promotion.
