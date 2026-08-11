# COLD-001 — Documentary Evidence Ledger

**Repository evidence promotion date:** 2026-08-11  
**Historical source window:** 2024-06 → 2026-08  
**Public visual evidence:** 5 integrity-verified Sanitized Evidence assets

## Purpose & History Boundary

COLD-001의 field work와 operational documentation은 현재 MILES repository history보다 앞선 2024–2026 기간에 존재한다. 이 ledger는 날짜가 명시된 private operational documents에서 확인된 사실, implementation lineage, analytical boundary를 public repository에 적합한 sanitized textual memory로 사후 승격한 것이다.

**Document date ≠ Git commit date.**  
**Documentary lineage ≠ repository-native execution history.**

Historical Git commits for the field work: **NONE**  
Dated operational documents: **AVAILABLE**  
Repository promotion: **2026-08-11**

아래 날짜는 source-document dates다. 해당 날짜에 MILES repository에 이 case 또는 commit이 존재했다는 뜻이 아니다.

Logical source family를 기준으로 해석하며, 같은 내용을 담은 PPT / PDF derivative를 독립 evidence 여러 건으로 세지 않는다.

## Evidence Classification

| Class | Meaning |
|---|---|
| **PRIMARY / DIRECT** | Cold Container operation, measurement, diagnosis 또는 operating-system state를 source가 직접 기록한다. |
| **IMPLEMENTATION / CORROBORATING** | 분석 시스템 구축과 technical evolution을 지지하지만 단독으로 operational outcome을 증명하지 않는다. |
| **INFRASTRUCTURE / CONTEXT** | monitoring을 가능하게 한 digital / network precondition. Cold Chain 자체의 성과로 사용하지 않는다. |
| **INFRASTRUCTURE / SUPPORTING** | monitoring deployment와 infrastructure evolution의 chronology를 보강한다. 직접적인 Cold Chain outcome proof는 아니다. |
| **SUPPORTING / DIRECT ADOPTION EVIDENCE** | monitoring 또는 analysis workflow의 adoption state를 source-stated 범위에서 직접 지지한다. |
| **OPERATIONAL / DIRECT** | Source-system SENT state 또는 operational report가 실제 보고 생성·배포·workflow execution 상태를 직접 기록한다. |
| **SYSTEM / CORROBORATING** | Build material, checklist, manual 등은 architecture / workflow를 지지하지만 특정 report의 actual send 자체는 증명하지 않는다. |
| **HISTORICAL CLAIM** | 문서에 표현은 존재하지만 baseline, definition 또는 independent measurement protocol이 충분히 확립되지 않아 canonical metric으로 승격하지 않는다. |
| **EXCLUDED** | 현재 artifact가 intended claim을 지지할 usable evidence를 제공하지 않는다. |

Evidence strength는 `DIRECT`, `CORROBORATING`, `CONTEXT`, `HISTORICAL CLAIM`, `EXCLUDED` 수준으로 기술한다. Legal / forensic 의미의 절대적 입증 표현은 사용하지 않는다.

## Documentary Chronology

### 2024-06 — Infrastructure instability identified

**Class:** INFRASTRUCTURE / CONTEXT

Factory digital operation의 precondition에서 intermittent delay, unmanaged networking equipment, configuration inconsistency 등 reliability issue가 진단되고 있었다.

**Supports:** future monitoring system이 올라갈 infrastructure의 안정성 개선 필요성이 monitoring deployment 이전부터 존재했다.

**Boundary:** Cold Container project 자체의 시작 또는 Cold Chain performance evidence로 사용하지 않는다.

### 2024-06 — Server / network resilience reviewed

**Class:** INFRASTRUCTURE / CONTEXT

Factory digital-system reliability 관점에서 server / network resilience improvement가 별도로 검토되었다.

**Supports:** later monitoring / analysis workflow가 의존하는 infrastructure reliability가 독립적인 engineering concern이었다.

**Boundary:** Cold Container direct evidence가 아니다.

### 2024-12 — Cold-container monitoring appears in infrastructure plan

**Class:** INFRASTRUCTURE / SUPPORTING

Dated network improvement planning material에서 future use case 중 하나로 Cold Container temperature monitoring이 명시되었다.

**Supports:** Cold-container monitoring was an identified infrastructure use case before deployment.

**Boundary:** planning evidence이며 completed deployment 또는 operational impact를 의미하지 않는다.

### 2025-03 — Network phase 1 completed

**Class:** INFRASTRUCTURE / SUPPORTING

Managed AP / switch infrastructure 개선 1단계가 완료되었고 Cold Container monitoring environment는 별도 후속 추진 대상으로 남아 있었다.

**Supports:** monitoring feasibility를 위한 enabling infrastructure가 단계적으로 개선되었다.

**Boundary:** network speed, internal cost, hardware detail은 COLD-001 canonical evidence로 promote하지 않는다.

### 2025-07-07 — Cold Container Temperature Management Improvement Review

**Class:** PRIMARY / DIRECT

COLD-001의 초기 핵심 operational problem definition을 직접 기록한 source로 취급한다.

**Source-stated observations:**

- operating Cold Container set: **12**
- temperature criterion deviation identified: **3 CT**
- actual internal temperature visibility insufficient
- monitoring / early-failure detection weakness
- management responsibility ambiguity
- recurring icing / defrost operational issue considered
- preventive actions and monitoring improvement proposed
- long-term structural option으로 cold-storage facility expansion 검토

**Supports:** Container operating limitation과 temperature-management weakness가 2025년에 formal operational issue로 제기되었고, cold-storage facility가 이미 long-term structural option으로 검토되었다.

```text
2025
Container operating limitation recognized
→ cold-storage facility considered as a long-term structural option

2026
broader multi-CT data
→ structural option review strengthened
```

#### Inventory-at-risk boundary

Emergency intervention 대상 material inventory-at-risk exposure가 source에 documented되어 있다.

Public repository에는 exact internal monetary value를 기록하지 않는다.

**Risk exposure ≠ realized loss.**  
**Risk exposure ≠ realized savings.**

해당 exposure를 절감액, 예방손실액 또는 ROI로 사용하지 않는다.

### 2025-07-15 — Temperature Logger Demonstration Test Report

**Class:** PRIMARY / DIRECT

**Verified source-stated scope:**

- target: **one Cold Container**
- source identifier: **CT10**
- measurement period: **2025-07-02 → 2025-07-15**
- measurement interval: **15 minutes**
- demonstration logger installed
- abnormal operating condition identified after measurement started
- emergency defrost / corrective intervention performed
- measurement continued after intervention

**Supports:** existing management method alone did not reliably reveal actual internal operating condition.

#### Early weekday / weekend signal

동일 demo material에는 one CT에서 weekday efficiency lower / weekend efficiency higher라는 early pattern이 기록된다.

**Classification:** EARLY / LIMITED-SCOPE SIGNAL

```text
2025
single-CT early operating-pattern signal
↓
2026
multi-CT operational dataset
weekday/weekend difference quantified
```

**Boundary:** one CT, 약 2주 범위의 observation이므로 general population conclusion으로 promote하지 않는다.

### 2025-07 — Analysis system implementation

**Class:** IMPLEMENTATION / CORROBORATING

Logical source family:

- Temperature Analysis Auto-processing Build Deck
- Streamlit Cold Container Analysis System Build Material
- Detailed Implementation Report

동일 내용의 presentation / PDF derivative는 physical file 수와 관계없이 independent corroboration으로 중복 계산하지 않는다.

Documented implementation sequence:

```text
Measured CSV data
→ Google Sheets
→ Colab / Python
→ data parsing / cleaning
→ calculated analysis metrics
→ Matplotlib visualization
→ Streamlit application
→ Excel / report output
```

Documented implementation characteristics include:

- long-format transformation
- date parsing
- per-container analysis
- user-selectable analysis
- downloadable analysis results

**Supports:** temperature analysis workflow가 manual review를 넘어 repeatable software-assisted analysis structure로 구현되었다.

**Boundary:** implementation documents alone do not establish operational business impact.

#### Real-time terminology boundary

Historical documents의 `real-time analysis` / `real-time monitoring` 표현은 다음 layer로 분리한다.

| Layer | Canonical meaning |
|---|---|
| LOGGER / SENSOR PLATFORM | measurement + monitoring + alert capability |
| STREAMLIT ANALYSIS APPLICATION | uploaded data processing + visualization + comparison |
| REPORTING AUTOMATION | analysis result distribution |

Streamlit CSV-upload analysis 자체를 sensor-level real-time streaming system으로 표현하지 않는다.

### 2025-08 — Infrastructure expansion

**Class:** INFRASTRUCTURE / SUPPORTING

Dated network materials가 지지하는 범위:

- outdoor / factory wireless coverage expansion completed
- monitoring infrastructure expanded
- data logger deployment and network expansion became operationally linked
- additional moved container locations created new coverage requirements

**Boundary:** vendor-specific pricing, raw throughput numbers, network hardware model details, unrelated server improvement metrics는 COLD-001 canonical evidence에 포함하지 않는다.

### 2025-09 — Outdoor Network Expansion Review

**Class:** SUPPORTING / DIRECT ADOPTION EVIDENCE

**Source-stated operating state:**

- total Cold Containers: **13**
- monitored at that time: **8**
- additional unmonitored / planned: **5**

**Supports:** monitoring expanded beyond the single-CT demonstration.

**Boundary:** all 13 fully operational, all 13 validated 또는 company-wide deployment completed로 표현하지 않는다.

#### Legacy `44 → 116` metric

2025-09 source에는 legacy freezing efficiency가 approximately `44 → 116`으로 표현된 historical metric이 존재한다.

**Classification:** LEGACY METRIC — REQUIRES RECONCILIATION — NOT COMPARABLE

Reasons:

1. metric can exceed 100
2. definition is not clearly comparable with later bounded retention
3. document expresses a percentage increase in a mathematically ambiguous way
4. metric definition evolved across project stages

이 값은 canonical performance improvement로 promote하지 않고 metric-evolution evidence로만 남긴다.

### 2026-06 — Cold Container Automatic Report copy

**Class:** EXCLUDED / CURRENT COPY NOT EVIDENTIARY

Current copy에서 usable cell content가 확인되지 않는 상태로 분류한다.

**Does not support:**

- automated emails sent
- report count
- operating history

This exclusion applies only to that blank Drive copy. It does **not** exclude separately evaluated source-system evidence. Subsequent Gmail SENT records directly establish operational report distribution and are handled as `OPERATIONAL / DIRECT` evidence.

Stronger evidence is mapped in the operational ledger below rather than inferred from the blank copy.

### 2026-06 → 2026-08 — Operational Intelligence & Automated Reporting

**Class:** OPERATIONAL / DIRECT + SYSTEM / CORROBORATING

[Operational intelligence evidence ledger](./OPERATIONAL_EVIDENCE.md)

Sanitized operating evidence documents the progression from early report distribution through TEST, PILOT, broader distribution, and repeated SENT operation across multiple dates.

Representative operational evidence further documents:

- current CT condition + recent multi-day trend
- maintenance / defrost / recovery history context
- LLM-assisted contextual judgment
- inspection / check recommendations
- urgent / caution / data-issue prioritization
- automated report generation and email distribution
- human final field verification / action

Canonical control sequence:

```text
Deterministic Metric Analysis
→ Current Condition + Recent Trend + Maintenance History
→ LLM-assisted Contextualization / Inspection Recommendation
→ Automated Operational Report Distribution
→ Human Field Verification / Action
```

**Boundary:** Gmail SENT state proves actual distribution, not report-open rate, recipient action-completion rate, AI diagnostic accuracy, maintenance success, or measured business impact.

### 2026-07-03 — Cold Container Temperature Analysis Program User Manual

**Class:** PRIMARY / DIRECT OPERATIONALIZATION EVIDENCE

Manual이 지지하는 user-facing capabilities:

- CSV upload
- container status view
- aggregate heatmap
- minimum-temperature heatmap
- freezing-efficiency heatmap
- `-15℃` retention heatmap
- existing analysis result views
- automated reporting interface / workflow reference

**Supports:** prototype build material 이후 analysis tool이 user-operable interface로 발전했다는 documentary evidence.

**Boundary:** manual만으로 user count, daily usage count, report send count, AI quality 또는 business impact를 claim하지 않는다.

### 2026-08-07 — Cold Container Operational Stability Diagnosis

**Class:** PRIMARY / DIRECT

Canonical source-stated analytical scope:

| Scope | Source-stated value |
|---|---:|
| Analysis period | 2026-06-27 → 2026-08-06 |
| Total period | 41 days |
| Daily aggregate records | 529 |
| Coverage | CT1 → CT13 |
| Conservative operating CT set | 12 |
| Complete container-days | 465 |

Canonical observations:

- weekday retention: weekend보다 **11.1 percentage points lower**
- **20 / 41 days**: 5 or more operating CT simultaneously below `80%` retention
- **104 / 529 records**: minimum temperature `≤ -18℃` but retention `<80%`

**Analytical boundary:** `-15℃`, `80%`, `90% retention`은 이 diagnosis를 위한 analytical criteria다. statutory compliance, legal cold-storage criterion, product acceptance specification 또는 universal food-safety standard로 사용하지 않는다.

#### Minimum-temperature trap

**Claim:** Minimum temperature alone can mask unstable continuous temperature retention.

**Evidence:** 2026-08 dataset에서 `104 / 529` records가 minimum temperature `≤ -18℃`이면서 retention `<80%`였다.

**Boundary:** 해당 analysis dataset에 대한 observation이며 universal law가 아니다.

### Engineering evolution summary

```text
Infrastructure reliability
↓
Monitoring feasibility
↓
Failure visibility
↓
Measurement
↓
Analysis automation
↓
Monitoring expansion
↓
Operationalization
↓
Operational Intelligence
↓
Multi-CT risk diagnosis
↓
Engineering alternative evaluation
```

Infrastructure는 enabling context / precondition이다. COLD-001의 core case arc는 다음을 유지한다.

```text
Measurement
→ Analysis
→ Operational Intelligence
→ Risk Diagnosis
→ Engineering / Investment Decision
```

### Investment decision lineage

**2025:** Cold Container operating limitation과 long-term cold-storage expansion 필요성이 operational review에서 제기되었다.

**2026:** larger multi-CT dataset을 통해 decision frame이 다음 formal alternatives로 구체화되었다.

- A. maintain / repeat repair
- B. selected CT replacement + environment improvement
- C. integrated cold-storage facility

**Not Established:** selected option, approved CAPEX, construction, ROI, payback.

## Claim-to-Source Matrix

| Claim | Source period | Evidence class | Promotion | Boundary |
|---|---|---|---|---|
| Network instability existed before monitoring deployment | 2024-06 | INFRASTRUCTURE / CONTEXT | Context promoted | Cold Chain performance proof 아님 |
| Cold Container monitoring was planned as an infrastructure use case | 2024-12 | INFRASTRUCTURE / SUPPORTING | Promoted | Planning evidence, not deployment completion |
| Temperature-management weakness was formally identified | 2025-07-07 | PRIMARY / DIRECT | Promoted | Source-stated operational problem definition |
| Logger demo identified abnormal CT operating state | 2025-07-15 | PRIMARY / DIRECT | Promoted | One CT, demonstration scope |
| Analysis stack was implemented | 2025-07 | IMPLEMENTATION / CORROBORATING | Promoted | Implementation proof, not business outcome |
| Monitoring expanded beyond one demo CT | 2025-09 | SUPPORTING / DIRECT ADOPTION EVIDENCE | Promoted | 8 / 13 monitored state only |
| User-facing analysis workflow existed by 2026-07 | 2026-07-03 | PRIMARY / DIRECT OPERATIONALIZATION EVIDENCE | Promoted | Manual does not establish usage volume or impact |
| Weekday / weekend early signal existed | 2025-07 | PRIMARY / DIRECT | Limited-scope signal | One CT, about two weeks; not generalized |
| Weekday / weekend difference quantified | 2026-08 | PRIMARY / DIRECT | Promoted | 11.1 percentage-point dataset observation; causality not established |
| Simultaneous multi-CT degradation observed | 2026-08 | PRIMARY / DIRECT | Promoted | 20 / 41 days; dataset-specific observation |
| Minimum-temperature trap observed | 2026-08 | PRIMARY / DIRECT | Promoted | 104 / 529; dataset-specific observation |
| Engineering options expanded beyond equipment repair | 2025-07 → 2026-08 | PRIMARY / DIRECT | Promoted | Alternative evaluation, not construction delivery |
| Integrated cold-storage facility was considered | 2025-07 → 2026-08 | PRIMARY / DIRECT | Promoted | Not approved, selected or built |
| Operational report emails were actually sent | 2026-06 → 2026-08 | OPERATIONAL / DIRECT | **CONFIRMED** | SENT state proves distribution, not reading or action |
| TEST distribution occurred | 2026-07-02 | OPERATIONAL / DIRECT | **CONFIRMED** | Controlled test only |
| PILOT distribution occurred | 2026-07-02 | OPERATIONAL / DIRECT | **CONFIRMED** | Does not equal organization-wide rollout |
| Broader multi-recipient distribution occurred | 2026-07-03 | OPERATIONAL / DIRECT | **CONFIRMED** | Recipient identities / counts withheld; no read/action inference |
| Reporting operated repeatedly across multiple dates | 2026-07 → 2026-08-11 | OPERATIONAL / DIRECT | **CONFIRMED** | Exact frequency / total send count not established |
| Current condition and recent multi-day trend were included | 2026-08-11 | OPERATIONAL / DIRECT | **CONFIRMED** | Representative operational report scope |
| Maintenance-history context was included | 2026-08-11 | OPERATIONAL / DIRECT | **CONFIRMED** | Completeness / causal diagnostic value not established |
| LLM-assisted contextual judgment was generated | 2026-08-11 | OPERATIONAL / DIRECT | **CONFIRMED** | Execution evidence, not diagnostic-accuracy validation |
| Inspection recommendations were generated | 2026-08-11 | OPERATIONAL / DIRECT | **CONFIRMED** | Recommendation does not equal completed action |
| Final field verification / action remained human | 2026-08-11 | Workflow boundary | **PROMOTED** | No autonomous maintenance / repair / engineering decision claim |
| Report generation used Streamlit + Apps Script Webhook | 2026-08-11 | OPERATIONAL / DIRECT + SYSTEM / CORROBORATING | **CONFIRMED** | Source-stated implementation at that operating point |
| Gmail evidence establishes report-open rate | 2026-06 → 2026-08 | OPERATIONAL / DIRECT | **NOT ESTABLISHED** | SENT state does not prove open/read behavior |
| Gmail evidence establishes action-completion rate | 2026-06 → 2026-08 | OPERATIONAL / DIRECT | **NOT ESTABLISHED** | No action-completion measurement promoted |
| AI diagnostic accuracy is validated | 2026-08-11 | OPERATIONAL / DIRECT | **NOT ESTABLISHED** | No validation protocol / measured accuracy promoted |
| Quantified maintenance / business outcome is established | 2026-06 → 2026-08 | Operational evidence | **NOT ESTABLISHED** | No labor, time, downtime, prevention, financial, or ROI metric promoted |
| Quantified productivity claims from 2025 are canonical | 2025-07 | HISTORICAL CLAIM | **NOT PROMOTED** | Definitions / baselines / protocols conflict or are insufficient |
| Legacy `44 → 116` efficiency is comparable to 2026 retention | 2025-09 | HISTORICAL CLAIM | **NOT PROMOTED** | Legacy metric requires reconciliation; not directly comparable |
| Current automatic-report blank copy proves reporting history | 2026-06 | EXCLUDED | **EXCLUDED** | Current copy has no usable operating record; Gmail SENT evidence evaluated separately |
| Repository-hosted sanitized visual evidence is promoted | Current | Public evidence status | **PROMOTED — 5 Sanitized Evidence assets** | Public Visual Derivatives = 0; detailed visual ledger in `PUBLIC_EVIDENCE.md` |

## Metric Lineage & Comparability

### 2025 — Legacy Freezing Efficiency

Historical implementation material documents an integration-based analysis concept whose exact definition evolved across prototype documents.

Characteristics:

- some legacy values may exceed `100`
- the metric is not assumed to be bounded
- historical definition is not clearly identical across documents
- not directly comparable to current retention

**Status:** LEGACY / NON-COMPARABLE WITHOUT RECONCILIATION

The `44 → 116` historical value is retained only as metric-lineage evidence, not as canonical performance improvement.

### 2026 — Retention / Stability

Retention / stability is used as a bounded operating indicator to evaluate continuous temperature stability separately from minimum temperature alone.

- `-15℃` retention analysis used
- `80% / 90%` are analytical thresholds for this diagnosis
- the thresholds are not legal, statutory or universal product-acceptance criteria

**Status:** CURRENT DIAGNOSTIC ANALYTICAL INDICATOR

### Cross-period comparability

**2025 legacy efficiency and 2026 retention are not treated as the same KPI and are not used for year-over-year comparison.**

Cross-period comparability: **NO — reconciliation would be required before any direct comparison.**

## Historical Claims Not Promoted

### Productivity claims

Historical presentation materials contain conflicting values or formulations equivalent to:

- `30–40 min per case`
- `45 min → 2 min`
- `90%+ reduction`
- `~1 minute`
- annual hours saved

**Status:** HISTORICAL PRESENTATION CLAIM — NOT PROMOTED

The documents do not provide one sufficiently consistent canonical definition / baseline / independent measurement protocol for promotion as measured business impact.

### Error-rate claims

Historical presentation materials include values such as:

- `5–10% error rate`
- `0% error`

**Status:** HISTORICAL PRESENTATION CLAIM — NOT PROMOTED

In particular, `0% error` is not promoted as a canonical measured outcome.

### Legacy `44 → 116`

**Status:** LEGACY METRIC — NOT COMPARABLE / REQUIRES RECONCILIATION

It is not used as a canonical performance improvement metric.

### Inventory exposure

An internal monetary exposure was documented during emergency intervention.

**Status:** exact amount withheld / not publicly promoted.

**Boundary:** exposure is not realized loss and is not realized savings.

## Excluded / Insufficient Evidence

### 2026-06 Cold Container Automatic Report copy

**Status:** EXCLUDED / CURRENT COPY NOT EVIDENTIARY

The current copy does not contain usable operating records sufficient to establish automated email sending, report count or operating history.

File existence alone is not treated as operational evidence.

This exclusion applies only to the blank Drive copy. Gmail SENT evidence is independently evaluated in [`OPERATIONAL_EVIDENCE.md`](./OPERATIONAL_EVIDENCE.md) and directly supports actual report distribution without changing the status of this excluded artifact.

## Privacy & Sanitization Boundary

This public ledger intentionally does **not** promote:

- Google Drive file IDs
- Google Drive URLs
- internal folder / sharing paths
- internal approval document numbers
- private IP addresses or IP ranges
- vendor contact information
- vendor-specific pricing or confidential quotations
- individual employee names or email addresses
- Gmail message IDs / thread IDs / URLs
- sender / recipient identities or email addresses
- exact recipient distribution lists
- private label identifiers
- raw inventory / product lists
- exact internal inventory monetary exposure
- credentials, API keys, webhook secrets, or spreadsheet IDs

`withheld / not promoted` means the sensitive detail is intentionally excluded from public durable memory. It does not mean no private source exists.

Only sanitized source labels, dates, evidence classification, supported claims and claim boundaries are retained here.

## Public Evidence Status

**Public Sanitized Visual Evidence:** 5  
**Public Visual Derivatives:** 0

Canonical public evidence roles:

```text
01 DETECT — Failure Visibility
02 ANALYZE — Analytical Visibility
03 OPERATE — Operational Intelligence
04 DIAGNOSE — Risk Diagnosis
05 DECIDE — Decision Support
```

All five public assets completed exact-byte repository write / read-back verification.

[Detailed public evidence ledger](./PUBLIC_EVIDENCE.md)

The public visual promotion does not change the existing documentary, analytical, operational, metric-comparability, AI, investment, or business-impact boundaries recorded above.
