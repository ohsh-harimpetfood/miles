# COLD-001 — Cold Container Operational Risk & Storage Strategy

**Status:** Canonical FORGE Case v0.3.1 — documentary lineage + operational intelligence + 5 integrity-verified sanitized visual evidence assets

COLD-001은 냉동 컨테이너 온도 측정값을 자동 분석하는 데서 끝나지 않고, 여러 CT의 운영 안정성과 반복적인 성능저하를 비교해 보이지 않던 시설 운영 리스크를 engineering / investment decision 문제로 전환한 사례다.

분석 workflow는 이후 실제 운영보고 단계로 확장되었다. Recent CT condition과 multi-day trend를 maintenance / defrost / recovery history와 결합하고, LLM-assisted contextual judgment / inspection recommendation을 생성해 관계자에게 반복 배포하는 human-in-the-loop operational intelligence workflow가 운영되었다.

```text
Measurement
→ Analysis
→ Operational Intelligence
→ Risk Diagnosis
→ Engineering / Investment Decision
```

## 1. Case at a Glance

냉동 컨테이너의 온도 데이터는 존재했지만, 개별 측정값과 그래프만으로는 여러 CT의 운영 안정성, 작업조건 영향, 반복적인 성능저하와 시설 리스크를 일관되게 비교하기 어려웠다.

초기에는 Google Sheets / CSV, Colab / Python, Streamlit을 이용해 온도 데이터를 자동 분석 가능한 구조로 전환했다. 이후 분석 범위를 개별 온도 확인에서 다수 CT의 안정성 비교와 운영 패턴 진단으로 확장하고, 최근 operating state와 maintenance-history context를 결합한 LLM-assisted inspection recommendation을 반복적인 operational report로 배포하는 단계까지 확장했다.

그 위에서 최종적으로 다음 구조적 대안을 비교하는 decision-support problem으로 발전시켰다.

- 현행 유지 / 반복수리
- 취약 CT 선별 교체 + 작업환경 개선
- 통합 냉동창고

현재 verified scope는 **통합 냉동창고를 포함한 구조적 개선안의 feasibility review를 시작할 근거가 형성된 단계**까지다. 냉동창고 구축, 투자 승인 또는 경제성 검증이 완료된 상태로 표현하지 않는다.

### External Source Boundary

현재 canonical case는 2024-06 → 2026-08 기간의 dated private operational documents와 sanitized source-system SENT evidence를 logical source family 단위로 검토해 구성한다. Source set에는 enabling infrastructure context, Cold Container temperature-management review, logger demonstration, analysis-system implementation material, monitoring expansion material, user manual, operational reporting evidence, operational stability diagnosis가 포함된다.

같은 내용을 담은 PPT / PDF derivative는 독립 evidence 여러 건으로 세지 않는다. Public repository에는 source date, sanitized title / family, evidence class, supported claim, boundary 수준만 남기며 Private Drive URL, file ID, internal sharing path, approval identifier, private infrastructure identifier, exact internal inventory value, vendor pricing, Gmail message/thread IDs, sender/recipient identity, email address 또는 credentials는 기록하지 않는다.

## Documentary Evidence Lineage

COLD-001의 field execution은 현재 repository history보다 앞선다. 현재 chronology는 당시의 dated private operational documents를 2026-08-11에 sanitized repository memory로 사후 승격한 것이다.

**Document date ≠ Git commit date.**  
**Documentary lineage ≠ repository-native execution history.**

Repository promotion occurred after the field work. 아래 chronology의 날짜는 source-document dates이며 과거 Git commit dates가 아니다.

- **2024** — enabling infrastructure reliability issues identified; Cold Container monitoring appears as a planned infrastructure use case
- **2025** — operational weakness formalized; logger demonstration, analysis automation, monitoring / infrastructure expansion documented
- **2026** — user-operable analysis workflow, repeated operational reporting, multi-CT diagnosis, and engineering / investment framing documented

[Detailed documentary evidence ledger](./EVIDENCE.md)  
[Operational intelligence evidence ledger](./OPERATIONAL_EVIDENCE.md)  
[Public evidence ledger](./PUBLIC_EVIDENCE.md)

## 2. The Measurement Problem

초기 문제는 온도 데이터가 없다는 것이 아니라, **측정값만으로 운영 안정성을 판단하기 어려웠다는 것**이었다.

개별 CT의 온도 그래프나 특정 시점의 minimum temperature만 확인하는 방식으로는 다음을 충분히 보기 어려웠다.

- CT 간 temperature-retention / stability 비교
- 평일과 주말 등 operating condition에 따른 패턴 차이
- 여러 CT에서 동시에 나타나는 성능저하
- 반복적인 불안정이 개별 equipment issue인지 broader facility / operating risk인지에 대한 판단

따라서 case의 관찰 단위는 단일 temperature point에서 retention / stability, cross-CT comparison, operational pattern으로 확장되었다.

## 3. The Analysis System

2025 source가 지지하는 초기 analysis system은 다음 구조다.

```text
Data Input / Reference
Google Sheets / CSV

Analysis
Python / Colab

Processing
Temperature parsing / cleaning
→ metric calculation
→ visualization

Interface
Streamlit

Output
Analysis visualization / report-style result
```

이 단계의 목적은 반복적인 온도 데이터를 비교 가능한 형태로 처리하고 분석 결과를 확인할 수 있는 실행 가능한 analysis workflow를 만드는 것이었다.

과거 자료에 포함된 특정 시간절감, 오류율, productivity, food-safety improvement 또는 ROI 관련 정량 표현은 이번 canonical truth로 promote하지 않는다.

### Operational Intelligence extension

이후 operating workflow는 structured analysis result를 실제 operational intelligence로 연결했다.

```text
Temperature / Logger Data
→ Deterministic Metric Analysis
→ Current CT Condition + Recent Trend + Maintenance History
→ LLM-assisted Contextualization / Inspection Recommendation
→ Automated Operational Report Distribution
→ Human Field Verification / Action
```

AI는 measurement나 deterministic analysis를 대체하지 않는다. Rule / metric analysis가 먼저 존재하고, LLM은 current condition을 maintenance history와 함께 해석하고 inspection / check recommendation을 생성하는 데 사용된다.

**Deterministic analysis → LLM-assisted contextualization → Human field action.**

Autonomous maintenance, autonomous repair, autonomous engineering decision 또는 operator judgment replacement를 주장하지 않는다.

## 4. From Measurement to Risk Visibility

Case의 핵심 변화는 다음과 같다.

```text
Temperature Measurement
→ Retention / Stability
→ Cross-CT Comparison
→ Operational Pattern
→ Facility Risk
```

즉, 온도를 자동으로 분석한 것 자체보다 **보이지 않던 시설 운영 리스크를 판단 가능한 문제로 바꾼 것**이 핵심이다.

이 narrative는 engineering transformation을 설명하는 것이며, ROI 또는 검증된 business outcome을 의미하지 않는다.

## 5. Operational Diagnosis

2026-08-07 diagnosis에서 source가 명시한 분석 범위는 다음과 같다.

| Scope | Source-stated value |
|---|---:|
| Analysis period | 2026-06-27 → 2026-08-06 |
| Total period | 41 days |
| Daily aggregate records | 529 |
| Coverage | CT1 → CT13 |
| Conservative operating CT set | 12 |
| Complete container-days | 465 |

보수적 핵심 분석에서는 spare CT10과 incomplete measurement days를 제외했다. 위 값은 **source-stated analytical scope**이며 business performance metric으로 해석하지 않는다.

### Operating-load sensitivity

평일의 temperature-retention performance가 주말보다 **11.1 percentage points 낮게 관찰**되었다.

이 관찰은 door opening, inbound / outbound activity, loading, work movement 같은 normal operating activity와 temperature stability의 관계를 추가로 검토할 근거를 제공한다. 다만 해당 operating activity가 retention 차이의 인과원인임을 실험적으로 확정한 것으로 표현하지 않는다.

### Simultaneous degradation

41일 중 **20 days**에 operating CT 중 **5 or more**가 동시에 retention `<80%`를 기록했다.

이는 특정 단일 CT의 isolated failure만으로 설명하기 어려운 broader operating / environmental risk를 검토하게 한 evidence로 사용한다.

### Minimum-temperature trap

전체 529건 중 **104 records**는 minimum temperature가 `-18℃ 이하`였음에도 retention이 `<80%`였다.

따라서 순간 minimum temperature 하나만으로 continuous temperature stability를 판단하면 운영상 불안정성을 놓칠 수 있다는 observation을 지지한다.

## 6. Engineering Judgment

분석은 단순한 `bad CT ranking`으로 끝나지 않았다.

다음 질문으로 확장되었다.

- 반복수리를 계속할 것인가
- 취약 CT를 선별 교체할 것인가
- 작업환경 / 개방구조를 개선할 것인가
- 분산형 CT 구조 자체를 통합 냉동창고로 전환할 것인가

```text
Operational Data
→ Facility Risk Diagnosis
→ Engineering Alternative Evaluation
```

이 case는 physical construction delivery 자체가 아니라, operational data를 facility-risk diagnosis와 engineering alternative evaluation으로 연결한 범위까지 지지한다.

## 7. Investment Options

현재 source가 지지하는 대안 검토는 다음 세 방향이다.

### Option A — 현행 유지 / 반복수리

현재 분산형 CT 운영구조를 유지하면서 필요한 수리를 반복하는 대안.

### Option B — 취약 CT 선별 교체 + 작업환경 개선

상대적으로 취약한 CT를 선별적으로 교체하고, operating condition과 연결된 작업환경 / 개방구조의 개선을 함께 검토하는 대안.

### Option C — 통합 냉동창고

분산형 CT 구조를 통합형 냉동창고로 전환하는 구조적 대안.

세 대안은 cost, stability, scalability 등 여러 관점에서 비교 검토하는 단계다. 현재 자료만으로 final economic decision은 완료되지 않았다.

경제성 판단을 위해서는 향후 inventory value, electricity cost, repair cost, logistics / external-storage cost, CAPEX quotation, required capacity, future demand 등의 추가 data가 필요하다.

## 8. Evidence & Analytical Boundaries

### Analytical criteria boundary

이번 운영진단에서 사용한 `-15℃` 및 `80% / 90% retention` threshold는 **이 analysis를 위한 analytical criteria**다.

다음 의미로 사용하지 않는다.

- statutory compliance criterion
- legal cold-storage criterion
- product acceptance specification
- universal food-safety standard

제품 판정 또는 법규 적합성은 별도의 quality / compliance 기준 영역이다.

### Data quality boundary

현재 analysis에는 다음 limitation이 있다.

- CT별 데이터 수집주기가 동일하지 않음
- 일부 기간 데이터 누락 존재
- 일별 집계 기반 분석
- 유지율을 시간으로 환산할 경우 측정점이 하루를 대표한다는 assumption 존재
- raw time-series event tagging은 완전히 적용되지 않은 상태

따라서 결과를 source가 지지하는 분석 정밀도 이상으로 과장하지 않는다.

### Investment / outcome boundary

현재 verified scope는 structural improvement alternatives를 비교하고 feasibility review를 시작할 근거가 형성된 단계까지다.

다음을 주장하지 않는다.

- 냉동창고 구축 완료
- 냉동창고 투자 확정
- 통합 냉동창고 도입 결정
- CAPEX 승인 완료
- 투자 효과 검증 완료
- ROI / payback 확정

Operational reporting evidence 역시 실제 workflow operation을 지지하지만 labor saving, repair reduction, downtime reduction, failure prevention, energy saving 또는 financial outcome을 자체적으로 증명하지 않는다.

## 9. What This Case Proves

### DATA & ANALYSIS

흩어진 temperature data를 비교 가능한 analysis structure로 전환했다.

### OPERATIONAL INTELLIGENCE

분석 결과를 화면에서 끝내지 않고, recent operating state와 maintenance / defrost / recovery history를 결합해 점검 우선순위와 LLM-assisted inspection recommendation으로 전환하고 실제 operational email로 반복 배포했다.

### OPERATIONAL RISK FRAMING

측정값을 개별 온도 문제가 아니라 operating-condition / facility risk 문제로 재구성했다.

### ENGINEERING JUDGMENT

분석 결과를 equipment repair만의 문제로 끝내지 않고 storage structure와 facility alternative 비교로 확장했다.

### DECISION SUPPORT

현행 유지 / 부분 개선 / 통합 냉동창고라는 investment options를 검토할 근거를 만들었다.

## 10. What Is Not Yet Established

다음은 현재 evidence로 확정하지 않는다.

- freezer warehouse construction
- approved investment
- final CAPEX
- ROI
- payback
- energy saving
- labor saving
- product-loss reduction
- validated quality improvement
- AI diagnostic accuracy
- maintenance success rate
- issue-resolution rate
- recipient action-completion rate

정량 business outcome을 새로 만들거나 추정하지 않는다.

## 11. Public Evidence Status

**Public Sanitized Visual Evidence:** 5  
**Public Visual Derivatives:** 0

Canonical public evidence arc:

```text
01 DETECT — Failure Visibility / Logger Demonstration
02 ANALYZE — Analytical Visibility / Multi-Container Heatmap
03 OPERATE — Operational Intelligence / Automated Briefing
04 DIAGNOSE — Risk Diagnosis / Multi-CT Stability
05 DECIDE — Decision Support / Storage Alternatives
```

All five public evidence assets are repository-hosted Sanitized Evidence and completed exact-byte write / read-back integrity verification.

[Public evidence ledger](./PUBLIC_EVIDENCE.md)

The visual evidence supports the bounded claims documented in the evidence ledgers. It does not establish AI diagnostic accuracy, autonomous maintenance, business impact, approved investment, ROI, payback, or completed cold-storage construction.
