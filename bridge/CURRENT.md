# MILES Current State

## Project

**MILES — Manufacturing Intelligence Lab for Execution Systems**

Core idea:

> **From Data to Decision. From Decision to Execution.**

> **Intelligence without execution is just information.**

---

## Current Phase

**FORGE-001 — WMS canonical case v0.3 visual evidence publication complete / measured-impact validation next**

MILES has completed its initial foundation phase and is now validating the repository structure against real implemented systems and evidence.

Current focus:

```text
FOUNDATION
→ first canonical FORGE case
→ evidence-backed publication
→ visual evidence closure
→ measured-impact validation
→ reusable pattern discovery
```

The goal is not to expand the framework prematurely.

The goal is to test whether the current MILES structure can represent a real manufacturing execution system with enough evidence, architecture, business rules, failures and decisions to remain useful over time.

---

## Foundation Completed

The following foundation artifacts are currently in place:

### Repository Root

- `README.md`
- `.gitignore`
- `LICENSE`

### Groundtruth

- `groundtruth/README.md`

### Signals

- `signals/README.md`

### Forge

- `forge/README.md`

### Workbench

- `workbench/README.md`

### Methods

- `methods/README.md`
- `methods/PROBLEM_TO_SYSTEM.md`
- `methods/EVIDENCE_BEFORE_CLAIMS.md`

### Design

- `design/README.md`
- `design/BRAND_SYSTEM.md`
- `design/VISUAL_REFERENCES.md`
- `design/assets/miles-symbol.svg`
- `design/assets/miles-symbol-dark.svg`
- `design/assets/miles-symbol-mono.svg`
- `design/assets/miles-wordmark.svg`
- `design/assets/miles-wordmark-dark.svg`

### Security

- `security/REDACTION_POLICY.md`

### Bridge

- `bridge/CURRENT.md`
- `bridge/GIT_AS_ACTION_RESEARCH_NOTE.md`

---

## Git Write Gateway Verification Completed

The current MILES Git write path has been validated for text operations and repeatedly validated for exact-byte PNG binary publication, including a 5-asset sequential batch with per-asset write/read-back verification.

### Text Path

Verified:

- repository read
- repository write
- GitHub commit creation
- commit SHA return
- blob SHA return
- read-back verification
- path restrictions
- file-type restrictions
- redaction/security restrictions

The working principle remains:

```text
READ
→ UNDERSTAND
→ DECIDE
→ WRITE
→ READ BACK
→ VERIFY
```

### Binary Evidence Path — 2026-08-10

The first exact-byte binary evidence validation completed with `MILES Git Write Gateway v0.2.3`.

Verified flow:

```text
ChatGPT attachment
→ openaiFileIdRefs
→ writeRepositoryAssetFromAttachment
→ GitHub binary CREATE
→ readRepositoryAsset
→ exact size/hash read-back verification
→ resulting blob SHA verification
→ integrity_verified = true
```

Evidence:

- path: `forge/WMS-001/assets/03-transaction-history.png`
- source/read-back size: `128360` bytes
- source/read-back SHA-256: `1eafaeea9f7c57873060e93529786a4da8072e1518b26978869e8af8943026cf`
- expected/resulting Git blob SHA: `72d42e479ea5af9c82a3c6578c7a45f569dca549`
- evidence commit: `a6ce0bd1bafbdd26a2d478feab94b7473446553a`
- `integrity_verified = true`

This validation proves exact-byte repository transport/read-back for the tested sanitized PNG. It does not by itself establish broader binary-type coverage, business impact, or methodology-level cost claims.

### Repeated Binary / Batch Validation — 2026-08-10

Exact-byte PNG publication was subsequently repeated through WMS-001 visual closure. The repository now contains 8 public visual assets: 6 **Sanitized Evidence** assets and 2 **Public Visual Derivatives**.

The final 5-asset batch completed with sequential per-asset write/read-back verification:

- 04 role / permission — commit `52d73cbb91c24e2371ad84982a650a651a6ad46c`, blob `5e891e1f32d8f343709afedce1581f3f0840652d`
- 05 Side 2 mirroring derivative — commit `d9494dd43f85db1479bd90d66ad70a533c5c5296`, blob `1777b588a68586ef036fe1bceb342d44b52e6dc3`
- 06 cold-storage overview — commit `f2dbc50954391fe07bcca0e87fed7dd3933e0db9`, blob `15f69c79f4d103c5e3c920c934623043ac870ad8`
- 07 cold-storage detail derivative — commit `38eaf5747238249b222accef06f3767d8b6fec15`, blob `cd8ae7f8f4bc99ba80d39c4e5450b215422e2c22`
- 08 stocktake print — commit `47f78a0d7d0a04189a612937f84ad7175386325a`, blob `9282b15744a60f55e3b2cd9f1f072218dc2510b6`

Two earlier invalid batch preflights correctly failed closed before any binary or README write. The final README closure was commit `05bdd87a39bcae3805048485a1b9a3e88fe1afc0`, resulting in blob `859c71c7f9599e79ca9f9bc468e41d0db5e57379`.

---

## Git as Action — Active Research Note

The working research model is recorded in:

- `bridge/GIT_AS_ACTION_RESEARCH_NOTE.md`

Current working definition:

> **Conversation is the control plane.**  
> **Git is the memory.**  
> **Policy is the boundary.**  
> **Execution uses the best tool for the task.**

The first exact-byte binary evidence closed loop is now operationally validated. This is an observed extension of the Git as Action evidence scope from text artifacts to binary evidence, demonstrated with one sanitized PNG.

WMS-001 evidence promotion produced a technically successful Git write/read-back but exceeded semantic scope at commit `e566086f56c162261093ab9b174ee3adb80288c9`, resulting in blob `d86c2f1b6e5c44e0b9482ec90083e928e9dd179d`.
This operationally observed that **Technical write success does not guarantee semantic scope compliance**, and the policy boundary now includes `Repository scope → Branch scope → Path scope → Action scope → Semantic change scope`.
The first exact recovery attempt was fail-closed `BLOCKED` because the active Gateway could not directly read the required immutable historical blob.
Exact recovery then restored verified baseline `6dd00a555861ca8d2cace422fa3ac8d63050a62b` in commit `c38994604ea71df26839e2d461a638593b3dfba2`.
Controlled reconstruction applied Minimum Semantic Diff and passed at commit `854616bb0d5a00c57c19b1e0b5dc01cbc4553f33`, resulting in blob `7d23e40c1a4a5d7526c72225d01b3f1e1934e932`.
The validation is recorded in Research Note commit `d3b891fc77d221b8475a76a25a3c86c87ddd59d7`; `Semantic Diff Budget` remains a working control concept, not a formal `METHODS` artifact.

Batch Binary Publication Control was subsequently operationally validated. Two invalid batch preflights failed closed before repository mutation; final source selection was explicitly separated from the integrity baseline, and filename alone was not treated as integrity proof. Binary writes remained sequential and non-atomic, while an ALL-PASS gate protected the single README integration. The batch also preserved the classification boundary between **Sanitized Evidence** and **Public Visual Derivative**. This validation is recorded in Research Note commit `8620b776f007f19c3772339c1f8a98d9f0933e79`, resulting in blob `38a5c643992ec65e8f0e6cf38adef6f64a923f5e`.

Git as Action remains a **BRIDGE Working Research Note** and has **not** been promoted to `METHODS`.

Current research questions include:

- when conversational Git actions are more efficient than coding-agent workflows
- whether Context-Minimized Execution reduces total AI execution cost
- how much human context switching can be reduced
- when Codex / Claude Code should be used as the code-heavy execution plane
- how BRIDGE / future REGISTRY can reduce context rehydration cost
- whether exact-byte binary evidence validation repeats across additional PNG/PDF evidence and larger assets
- how agent-visible tool-surface lifecycle and multi-file non-atomicity should be managed
- how actual token / elapsed time / context-switching measurements should be collected
- whether constrained historical file / immutable blob reads should be added for exact recovery workflows

These remain hypotheses or open questions until supported by measurement.

---

## Canonical FORGE Artifact

The first canonical implemented-system case is:

- `forge/WMS-001/README.md`

Status:

**Canonical FORGE Case v0.3 — evidence-backed; sanitized visual evidence incrementally committed and integrity-verified**

Current case contents include:

- field-grounded warehouse problem
- QR + AppSheet first executable hypothesis
- custom web architecture transition
- operational system flow and permission control
- Physical ↔ Digital Warehouse model
- heterogeneous storage topology and Side 2 mirroring
- verified incremental evolution chronology
- human-controlled / AI-assisted Operator Role
- operational evidence and claim boundaries
- first sanitized transaction-history visual evidence with exact-byte integrity verification
- 6 public Sanitized Evidence assets
- 2 Public Visual Derivatives
- visual evidence publication closure
- evidence classification / claim boundary

Measured business impact remains:

**Not Yet Established**

No unsupported ROI, time-saving percentage or productivity claim should be added without defensible evidence.

---

## Current Visual Evidence State

### Public Sanitized Evidence — 6

- `forge/WMS-001/assets/01-warehouse-map.png`
- `forge/WMS-001/assets/02-rack-card-bulk-print.png`
- `forge/WMS-001/assets/03-transaction-history.png`
- `forge/WMS-001/assets/04-role-permission.png`
- `forge/WMS-001/assets/06-cold-storage-overview.png`
- `forge/WMS-001/assets/08-stocktake-print.png`

### Public Visual Derivatives — 2

- `forge/WMS-001/assets/05-side2-mirroring-derivative.png`
- `forge/WMS-001/assets/07-cold-storage-detail-derivative.png`

**Sanitized Evidence** is based on an actual operational screenshot that was sanitized before publication. **Public Visual Derivative** is a reconstructed or regenerated public representation and must not be presented as raw operational evidence.

Remaining **PRIVATE ORIGINAL EVIDENCE** includes production deployment, authenticated application, the original Side 2 screenshot, the original cold-storage detail screenshot, and other unpublished operational screenshots.

**Visual Evidence Publication = COMPLETE for current v0.3 scope**

Additional visual publication is not an immediate next step for the current canonical WMS-001 case unless a real evidence gap appears.

Public artifacts must continue to follow:

- `security/REDACTION_POLICY.md`

The evidence principle remains:

> **Evidence sanitization should alter the sensitive data, not unnecessarily replace the evidence itself.**

When the original image itself is sanitized, publish it as **Sanitized Evidence**.

When a screenshot is reconstructed, redesigned or regenerated for public use, label it as a **Public Visual Derivative** and do not present it as raw operational evidence.

---

## FOUNDATION-003 — Deferred

A lightweight registry / retrieval layer has been identified as a likely future need.

However, it is intentionally deferred.

Reason:

> **Do not design the retrieval and registry structure ahead of the evidence it is meant to organize.**

The next registry structure should be derived from real FORGE cases, evidence patterns and retrieval needs rather than designed abstractly in advance.

---

## Next Step

The current recommended sequence is:

```text
FORGE-001 WMS v0.3 visual publication closure
→ define defensible measured-impact metrics
→ establish measurement baseline
→ collect real operational measurements
→ validate Git as Action workload metrics
→ consider WMS v0.4 only when measured evidence justifies promotion
→ keep FOUNDATION-003 deferred until retrieval need is demonstrated
```

Immediate work should therefore focus on:

1. WMS business-impact measurement framework
2. baseline definition without retrospective invention
3. actual measurable evidence collection
4. Git as Action workload measurement
5. no additional visual publication unless a real evidence gap appears
6. keeping FOUNDATION-003 deferred until real evidence retrieval needs justify it

WMS v0.4 is not promoted by this synchronization. It is only a future candidate when at least one measured evidence point is defensibly established.

---

## Operating Principle

MILES is not a static portfolio.

It is a living manufacturing intelligence and execution laboratory.

Prefer:

- evidence over claims
- implemented systems over conceptual hype
- architecture over feature lists
- business rules over vague descriptions
- engineering decisions over retrospective storytelling
- verification over assumed success

Core idea:

> **From Data to Decision. From Decision to Execution.**

> **Intelligence without execution is just information.**
