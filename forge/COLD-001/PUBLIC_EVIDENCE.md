# COLD-001 — Public Evidence Selection

**Status:** Public Evidence v0.3.1 — five sanitized evidence assets promoted and integrity-verified

This document defines which visual evidence supports the canonical COLD-001 transformation and the publication boundary for each promoted asset.

**Five approved sanitized PNG assets are published and integrity-verified.**  
**No private source document bytes are copied into the repository.**  
**Sanitization preceded repository asset promotion.**  
**Public Visual Derivatives: 0.**

The canonical source remains:

- [`README.md`](./README.md)
- [`EVIDENCE.md`](./EVIDENCE.md)
- [`OPERATIONAL_EVIDENCE.md`](./OPERATIONAL_EVIDENCE.md)

## Selection Purpose

The selection question is not which screenshot or chart looks best. The question is which visual most directly supports the case transformation:

```text
Weak Visibility
→ Measurement
→ Analytical Visibility
→ Operational Intelligence
→ Operational Risk Diagnosis
→ Engineering / Investment Decision Support
```

Public-facing shorthand:

```text
DETECT
→ ANALYZE
→ OPERATE
→ DIAGNOSE
→ DECIDE
```

`OPERATE` is distinct from `DIAGNOSE`.

```text
OPERATE
current / recent operating state
+ maintenance history
→ recommendation
→ distribution
→ human field check

DIAGNOSE
longer-horizon multi-CT dataset
→ simultaneous degradation
→ operating-pattern risk
→ structural diagnosis
```

A `PRIMARY` asset must satisfy all three conditions:

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
| **MEDIUM** | CT labels, dates, internal UI labels, contextual identifiers, or limited sensitive fields require bounded publication review. |
| **HIGH** | Visual may contain identities, email / message metadata, inventory names or values, approval information, vendor / commercial data, internal financial assumptions, infrastructure identifiers, or other confidential business detail. Equivalent lower-risk evidence should be preferred when available. |

The five promoted assets completed source review and exact-byte repository verification. Risk labels below describe the residual sensitivity of the approved public scope rather than an unreviewed candidate state.

## Promoted Primary Public Set

Primary public set: **5 visual assets**.

The promoted set follows the case transformation rather than document count:

```text
01 Failure Visibility
→ 02 Analytical Visibility
→ 03 Operational Intelligence
→ 04 Risk Diagnosis
→ 05 Decision Support
```

Evidence density is preferred over evidence quantity. Five assets are retained because each supports a distinct transformation role; duplicated PPT / PDF derivatives do not justify additional public assets.

## Candidate 01 — Failure Visibility / Logger Demonstration

**Transformation role:** DETECT / Measurement  
**Source date:** 2025-07-15  
**Source family:** Temperature Logger Demonstration Test Report  
**Documentary class:** PRIMARY / DIRECT  
**Public classification:** Sanitized Evidence  
**Sanitization risk:** MEDIUM  
**Publication recommendation:** PRIMARY — PROMOTED / INTEGRITY VERIFIED

### Supported claim

Measurement made a previously weakly visible operating condition observable.

The historical source supports one Cold Container demonstration in which a logger was installed, an abnormal operating condition was identified after measurement began, corrective / defrost intervention occurred, and measurement continued afterward.

### Why it matters

This visual establishes the first transformation step: the case did not start with a dashboard. It started by making an actual internal operating condition visible enough to act on.

### Publication scope

The approved source visual preserves the historical measurement sequence while excluding private business data outside the evidence meaning.

May retain where necessary to preserve meaning:

- generic CT identity where safe
- dates relevant to the measurement sequence
- temperature values
- analysis metric
- intervention / defrost transition

### Boundary

The visual supports visibility of one demonstrated operating condition. It does not by itself prove population-wide performance, quantified savings, ROI, product-loss prevention, or company-wide monitoring deployment.

### Promoted asset

`forge/COLD-001/assets/01-failure-visibility.png`

**Sanitized Evidence — Integrity Verified**

## Candidate 02 — Analytical Visibility / Multi-Container Heatmap

**Transformation role:** ANALYZE / Analytical Visibility  
**Source date:** 2026-07-03  
**Source family:** Cold Container Temperature Analysis Program User Manual  
**Documentary class:** PRIMARY / DIRECT OPERATIONALIZATION EVIDENCE  
**Public classification:** Sanitized Evidence  
**Sanitization risk:** MEDIUM  
**Publication recommendation:** PRIMARY — PROMOTED / INTEGRITY VERIFIED

### Supported claim

Multiple containers could be compared through a user-facing analysis workflow.

Retention was analyzed separately from minimum temperature.

### Why it matters

This asset shows the move from one-chart review to a repeatable multi-container analytical interface. It visually anchors the distinction between merely collecting temperature values and comparing operating stability across containers.

### Publication scope

The promoted heatmap preserves the cross-container analytical interface and its status-comparison structure. It is not treated as evidence of user volume or business outcome.

### Not supported from screenshot alone

- user count
- usage frequency
- daily operation frequency
- business impact
- AI accuracy
- automatic decision making
- report-send count

### Promoted asset

`forge/COLD-001/assets/02-analysis-heatmap.png`

**Sanitized Evidence — Integrity Verified**

## Candidate 03 — Operational Intelligence / Automated Briefing

**Transformation role:** OPERATE / Operational Intelligence  
**Source period:** 2026-07 → 2026-08  
**Primary representative source:** 2026-08-11 — Cold CT Operational Briefing  
**Documentary class:** OPERATIONAL / DIRECT  
**Public classification:** Sanitized Evidence — HTML-source-preserving render  
**Sanitization risk:** MEDIUM  
**Publication recommendation:** PRIMARY — PROMOTED / INTEGRITY VERIFIED

### Supported claim

Analysis was converted into an operating workflow that combined current condition, recent trend, and maintenance-history context with LLM-assisted inspection recommendations and distributed the result through automated email reporting.

The operational evidence also supports:

- urgent / caution / data-issue prioritization
- priority-inspection list
- current condition and recent multi-day issue persistence
- maintenance / defrost / recovery history context
- LLM-assisted contextual judgment
- recommended checks / inspection actions
- automated report generation
- repeated operational distribution across multiple dated SENT records

### Why it matters

This asset establishes the `OPERATE` layer between analytical visibility and longer-horizon risk diagnosis.

The case did not stop at a user-facing analysis interface. Structured operating state was repeatedly converted into prioritized operational briefing and inspection guidance for human action.

### Canonical architecture represented

```text
Temperature / Logger Data
→ Deterministic Metric Analysis
→ Current CT Condition + Recent Trend + Maintenance History
→ LLM-assisted Contextual Judgment
→ Inspection / Check Recommendation
→ Priority List / Operational Report
→ Automated Email Distribution
→ Human Field Verification / Action
```

AI is not used as a substitute for measurement or deterministic metric analysis. It is inserted after structured analysis to contextualize current condition with maintenance history and suggest checks for human action.

### Publication scope

The promoted asset is **not a Gmail UI screenshot**. It is a privacy-safe, HTML-source-preserving render of the representative SENT operational briefing scope:

`자동 분석 / Gemini 분석 → CT10 → 현상 → 이력 → 판단 → 권장조치`

The approved render excludes Gmail headers, sender / recipient identities, email addresses, and message / thread identifiers while preserving the operational report structure needed for the supported claim.

### Not supported from the visual

- AI diagnostic accuracy
- maintenance success rate
- issue-resolution rate
- repair-time reduction
- labor saving
- downtime reduction
- failure prevention
- recipient action-completion rate
- report-open / read rate
- exact scheduled frequency
- total send count
- ROI or quantified business impact

### Human-in-the-loop boundary

A recommendation is not a completed field action.

```text
Deterministic Analysis
→ LLM-assisted Contextualization / Recommendation
→ Human Field Verification / Action
```

Autonomous maintenance, autonomous repair, and autonomous engineering decision are not supported.

### Promoted asset

`forge/COLD-001/assets/03-operational-intelligence.png`

**Sanitized Evidence — HTML-source-preserving render — Integrity Verified**

## Candidate 04 — Risk Diagnosis / Multi-CT Stability

**Transformation role:** DIAGNOSE / Operational Risk Diagnosis  
**Source date:** 2026-08-07  
**Source family:** Cold Container Operational Stability Diagnosis  
**Documentary class:** PRIMARY / DIRECT  
**Public classification:** Sanitized Evidence  
**Sanitization risk:** MEDIUM  
**Publication recommendation:** PRIMARY — PROMOTED / INTEGRITY VERIFIED

### Supported claim

The multi-CT dataset exposed broader operating / environmental risk patterns that could not be reduced to one isolated broken unit.

The source visual supports the canonical diagnosis that multiple operating CT could simultaneously fall below the selected retention criterion, providing evidence to examine broader operating / environmental risk rather than only isolated equipment failure.

### Canonical numbers allowed if retained

Only already-canonical values are used without a new evidence review:

- `41 days`
- `529 daily aggregate records`
- `12 operating CT`
- `465 complete container-days`
- weekday retention difference: `11.1 percentage points`
- `20 / 41 days`
- `104 / 529 records`

### Analytical boundary

`-15℃`, `80%`, and `90% retention` are analytical criteria for this diagnosis. They must not be visually presented as statutory, legal, universal food-safety, or product-acceptance standards.

The canonical observations remain dataset-specific. They are not universal laws and do not establish causality by themselves.

### Promoted asset

`forge/COLD-001/assets/04-risk-diagnosis.png`

**Sanitized Evidence — Integrity Verified**

## Candidate 05 — Decision Support / Storage Alternatives

**Transformation role:** DECIDE / Engineering & Investment Decision Support  
**Source date:** 2026-08-07  
**Source family:** Cold Container Operational Stability Diagnosis  
**Documentary class:** PRIMARY / DIRECT  
**Public classification:** Sanitized Evidence  
**Sanitization risk:** MEDIUM  
**Publication recommendation:** PRIMARY — PROMOTED / INTEGRITY VERIFIED

### Supported claim

The analysis expanded beyond equipment repair into explicit engineering / investment alternative evaluation.

Canonical option structure:

- **A — Maintain / repeated repair**
- **B — Selected CT replacement + operating-environment improvement**
- **C — Integrated cold-storage facility**

### Why it matters

This asset closes the transformation arc. It demonstrates that analysis was used to frame a decision problem rather than merely produce a dashboard or technical ranking.

### Publication scope

The approved public comparison preserves the qualitative option structure and operational / engineering trade-offs. Page-level review confirmed that the promoted publication asset does not expose confidential vendor quotation, exact CAPEX, confidential OPEX, exact internal inventory valuation, or payback assumptions.

### Claim boundary

This asset supports decision framing only.

It does **not** support:

- selected option
- approved investment
- approved CAPEX
- construction completed
- ROI
- payback
- verified economic outcome

### Promoted asset

`forge/COLD-001/assets/05-investment-options.png`

**Sanitized Evidence — Integrity Verified**

## Evidence Role Matrix

| Candidate | Transformation Role | Supported Claim | Sanitization Risk | Recommendation |
|---|---|---|---|---|
| **01 — Failure Visibility / Logger Demonstration** | DETECT / Measurement | Measurement exposed a previously weakly visible abnormal operating condition in the demonstration scope | MEDIUM | **PRIMARY — PROMOTED / INTEGRITY VERIFIED** |
| **02 — Analytical Visibility / Multi-Container Heatmap** | ANALYZE / Analytical Visibility | Multiple containers could be compared in a user-facing workflow; retention was analyzed separately from minimum temperature | MEDIUM | **PRIMARY — PROMOTED / INTEGRITY VERIFIED** |
| **03 — Operational Intelligence / Automated Briefing** | OPERATE / Operational Intelligence | Structured current state + recent trend + maintenance history were contextualized into prioritized LLM-assisted inspection recommendations and repeatedly distributed | MEDIUM | **PRIMARY — PROMOTED / INTEGRITY VERIFIED** |
| **04 — Risk Diagnosis / Multi-CT Stability** | DIAGNOSE / Operational Risk Diagnosis | Multi-CT analysis exposed broader operating / environmental instability patterns | MEDIUM | **PRIMARY — PROMOTED / INTEGRITY VERIFIED** |
| **05 — Decision Support / Storage Alternatives** | DECIDE / Engineering & Investment Decision Support | Analysis was translated into maintain / partial-improvement / integrated-storage alternatives | MEDIUM | **PRIMARY — PROMOTED / INTEGRITY VERIFIED** |

Primary public evidence count: **5**

Public Visual Derivatives: **0**

## Promoted Asset Integrity

| Asset | Classification | Size | SHA-256 | Git Blob | Evidence Commit | Integrity |
|---|---|---:|---|---|---|---|
| `01-failure-visibility.png` | Sanitized Evidence | `825957` | `bc4331dff65b696400a807b4fd55d2f7644ba489188acc6b02d4e4f818df1ca8` | `715f4537b1a98d4e6af3aaeb917e14c33cfb8213` | `5320898869f05ea3497c40bfa9f048bc34daf866` | PASS |
| `02-analysis-heatmap.png` | Sanitized Evidence | `216865` | `08ecce2e17375c862682aeacbb8f9690fbf91faf172382f5a7d1d18bde3dd8c6` | `c3a18084673ba4f28d730d638913d6231a01d3d1` | `fa0620390a42da9326818bbf4397d2b1a8f2323e` | PASS |
| `03-operational-intelligence.png` | Sanitized Evidence — HTML-source-preserving render | `64341` | `4826c8eb3692f772619f27df847b4fd3d448e87701b9618440fff89cb52bc593` | `8151fddbfe685c92b2a6e759488b35e1b9ee7466` | `f36c87f3b97d735791f4a1a36ed194abe2b39dac` | PASS |
| `04-risk-diagnosis.png` | Sanitized Evidence | `51254` | `28218ea1eee5fb695ed3ead53fa53f3026e1f14fbe8d70dece9790816065ffb8` | `e1f4d455d2c7b1f8a1bdf9e74d202c31db00bf2e` | `d2f61c3dc262bdc1859240e21ab67b42a9533846` | PASS |
| `05-investment-options.png` | Sanitized Evidence | `154927` | `26f51581059cd2947d9df9140c51ffc3af8454ff4f595cb66ea9c8f32b57a0a6` | `35bfdd8c55db46d0847fc692d6f855878ce69cca` | `b78a00a011f43bf6dad7dcfc225ea13b26647d65` | PASS |

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

**Reason:** current Drive copy remains classified `EXCLUDED / CURRENT COPY NOT EVIDENTIARY` and does not establish email sending, report count, or operating history.

The exclusion remains correct even though separately evaluated Gmail SENT records directly establish actual operational distribution.

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

Any future replacement or additional binary promotion must be reviewed for:

- claim supported
- evidence class
- privacy and confidentiality
- organization / employee identifiers
- personal / email identities
- Gmail message / UI identifiers
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

## Promoted Asset Paths

```text
forge/COLD-001/assets/01-failure-visibility.png
forge/COLD-001/assets/02-analysis-heatmap.png
forge/COLD-001/assets/03-operational-intelligence.png
forge/COLD-001/assets/04-risk-diagnosis.png
forge/COLD-001/assets/05-investment-options.png
```

### Previous asset-promotion instruction status

The previous four-image `COLD-001 v0.3.1 — Sanitized Evidence Asset Promotion` instruction remains **OBSOLETE / DO NOT RUN** because the canonical evidence arc includes the distinct `OPERATE / Operational Intelligence` layer.

The current five-asset promotion supersedes that older four-image instruction.

## Public Evidence Status

**Public Sanitized Visual Evidence:** 5  
**Public Visual Derivatives:** 0

Current state:

- documentary evidence lineage: promoted
- operational intelligence evidence: promoted textually and visually
- public visual evidence: five integrity-verified Sanitized Evidence assets
- binary publication: completed for the five approved assets
- private source document bytes copied to repository: none

Canonical public evidence arc:

```text
DETECT
→ ANALYZE
→ OPERATE
→ DIAGNOSE
→ DECIDE
```
