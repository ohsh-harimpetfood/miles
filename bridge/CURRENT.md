# MILES Current State

## Project

**MILES — Manufacturing Intelligence Lab for Execution Systems**

Core idea:

> **From Data to Decision. From Decision to Execution.**

> **Intelligence without execution is just information.**

---

## Current Phase

**FORGE-001 — WMS canonical case v0.3 evidence integration / additional visual sanitization**

MILES has completed its initial foundation phase and is now validating the repository structure against real implemented systems and evidence.

Current focus:

```text
FOUNDATION
→ first canonical FORGE case
→ evidence integration
→ visual sanitization
→ claim discipline
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

The current MILES Git write path has been validated for both text operations and one exact-byte binary evidence closed loop.

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

**Canonical FORGE Case v0.3 — evidence-backed; first sanitized visual asset committed and integrity-verified**

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

Measured business impact remains:

**Not Yet Established**

No unsupported ROI, time-saving percentage or productivity claim should be added without defensible evidence.

---

## Current Visual Evidence State

First public sanitized asset:

- `forge/WMS-001/assets/03-transaction-history.png`

This asset has passed sanitization/publication review and exact-byte repository write/read-back verification.

Remaining original visuals are still classified as:

**PRIVATE ORIGINAL EVIDENCE**

Additional assets require individual sanitization and publication review before repository inclusion.

Likely remaining visual candidates include:

- production deployment view
- role/permission structure
- warehouse map
- rack-card / location view
- alternate topology or operational screens

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
FORGE-001 WMS v0.3 evidence integration
→ review/sanitize additional 5–7 visual candidates
→ preserve evidence provenance
→ explore defensible measured impact evidence
→ repeat Git as Action binary evidence validation
→ measure actual Git as Action workload
→ keep FOUNDATION-003 deferred until evidence justifies retrieval structure
```

Immediate work should therefore focus on:

1. additional 5–7 visual candidates review/sanitization
2. evidence provenance maintenance between private originals and public assets
3. measured impact evidence exploration without retrospective invention
4. repeated Git as Action binary evidence validation across additional suitable evidence
5. actual workload measurement for Git as Action, including token / elapsed time / context-switching where feasible
6. keeping FOUNDATION-003 deferred until real evidence retrieval needs justify it

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
