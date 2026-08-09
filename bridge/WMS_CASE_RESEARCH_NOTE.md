# WMS Case — Working Research Note

**Status:** Working Research Note  
**Case Track:** FORGE-001 — WMS  
**Current Phase:** Evidence reconstruction  
**Artifact Class:** BRIDGE research note, not yet a formal FORGE Case

이 문서는 WMS 프로젝트의 실제 기원, 기술 전환, 구현 방식, 운영 진화를 향후 `FORGE-001` 작성에 사용할 수 있도록 evidence-based chronology로 재구성하는 working note다.

아직 `forge/WMS-001/` 정식 Case를 작성하지 않는다. 현재 확인된 사실, evidence가 지지하는 해석, 추가 검증이 필요한 항목을 분리해 기록한다.

---

## 1. Interpretation Boundary

WMS는 **Docs as Code, Feature as Code, Git as Action의 직접적인 전신이나 초기 버전으로 해석하지 않는다.**

WMS는 별도의 독립적인 현업 문제 해결 소프트웨어 프로젝트다.

따라서 다음 두 track은 현재 분리해서 취급한다.

```text
Track A
WMS field problem
→ data / operating model
→ executable hypothesis
→ architecture pivot
→ incremental implementation
→ operational evolution

Track B
Docs as Code
→ Feature as Code
→ Git as Action
→ related MILES working-method research
```

두 track 사이의 상호 영향이나 계보를 주장하려면 별도의 evidence가 필요하다.

또한 현재 WMS를 `Abstraction Lift`의 대표 증거라고 주장하지 않는다. 향후 실제 implementation evidence와 verification record가 충분히 정리된 뒤 비교·분석할 수는 있지만, 지금은 독립적인 프로젝트 chronology를 먼저 복원한다.

---

## 2. Evidence Status Vocabulary

이 note에서는 가능한 경우 주장에 다음 상태를 붙인다.

- **Confirmed** — 현재 working evidence에서 직접 확인된 사실로 취급
- **Supported** — 복수의 정황이나 기록이 지지하지만 canonical Case 전에 source-level cross-check가 필요한 해석
- **Needs Further Verification** — 현재 evidence만으로 확정하지 않고 추가 자료 확인이 필요한 항목

`Confirmed`는 public FORGE Case publication-ready를 의미하지 않는다. 정식 Case 전에는 source cross-check와 sanitization review가 별도로 필요하다.

---

## 3. 2025-11 — Initial Field Problem / WMS Concept

**Evidence status: Confirmed**

WMS는 2025년 11월 수동 랙 창고의 실제 운영 문제에서 시작했다.

현재 확인된 문제:

- manual rack card compliance 문제
- physical location / item information mismatch
- inventory search에 현장 탐색 및 문의가 필요함
- physical inventory와 system inventory 사이의 차이
- stock count / closing 시 추가 검증 부담

이 단계의 출발점은 새로운 기술을 적용하는 것 자체가 아니라 **위치·품목·재고 상태를 더 신뢰 가능하고 빠르게 확인할 수 있어야 한다는 현업 문제**였다.

### Initial Solution Hypothesis

**Evidence status: Confirmed**

초기 solution hypothesis:

```text
Location QR
+ Item QR
+ AppSheet mobile input
+ Google Sheets data layer
+ PC read-only lookup terminal
```

초기 설계에서 PC 조회 화면은 **“library search terminal”**과 유사한 개념으로 정의되었다.

Google Sheets는 초기 **Single Source of Truth**로 설계되었다.

---

## 4. 2025-11-18 — Initial Data / Operating Model

**Evidence status: Confirmed**

확인된 핵심 구조:

- `LOC_MASTER`
- `ITEM_MASTER`
- `STOCK_TX`
- `LOC_ID`
- `ITEM_KEY`
- `ITEM_DIFF` / ERP comparison concept

핵심 설계는 Location / Item / Transaction을 분리하는 3-layer data model이었다.

```text
Location Master
→ Item Master
→ Stock Transaction
```

현재 working interpretation:

- `LOC_MASTER` — location 기준정보
- `ITEM_MASTER` — item 기준정보
- `STOCK_TX` — stock movement / state change transaction layer
- `ITEM_DIFF` / ERP comparison concept — physical / WMS state와 기존 system state의 차이를 비교·확인하기 위한 개념

M-rack location model과 rack-card concept도 이 단계에 존재했다.

### AppSheet Interpretation at This Stage

**Evidence status: Supported**

AppSheet는 아직 정의되지 않은 아이디어에 임시 UI를 얹은 것이 아니라, 이미 형성되고 있던 data / operating model 위에 올라갈 **초기 executable frontend hypothesis**로 취급한다.

> **AppSheet was the first executable hypothesis.**

AppSheet phase의 현재 working value:

- 빠른 field concept validation
- QR workflow concretization
- data-model validation
- operational interaction discovery

따라서 AppSheet를 “실패한 기술”로 표현하지 않는다. 이후 요구 범위가 커지면서 capability ceiling이 드러났고, 그 결과 architecture pivot이 발생한 것으로 기록한다.

실제 schema column, 내부 location code, item code, ERP identifier, rack coding은 public Case 전에 sanitization해야 한다.

---

## 5. 2025-12 — WMS V1 Direction

**Evidence status: Confirmed**

2025년 12월에는 생산 현장 단독 사용을 목표로 WMS Version 1.0 방향이 구체화되었다.

초기에는 AppSheet를 통한 빠른 implementation 가능성을 우선 검토했다.

이 시기는 WMS가 단순 concept에서 실제 운영 가능한 software direction으로 이동하던 단계로 기록한다.

### Still Needs Verification

**Evidence status: Needs Further Verification**

- 최초 AppSheet prototype의 실제 완성 범위
- 실제 현장 pilot 여부
- 당시 사용자 범위
- AppSheet phase에서 실제 transaction이 어느 수준까지 수행되었는지

---

## 6. 2026-01-14 ~ 2026-01-15 — Architecture Pivot

**Evidence status: Confirmed**

AppSheet의 다음 한계를 기준으로 custom Web Application 전환이 결정되었다.

- UX
- performance
- deployment flexibility
- extensibility

전환된 architecture direction:

```text
Next.js
+ Supabase / PostgreSQL
+ Git
+ Vercel
```

AppSheet-era schema를 relational structure로 옮기고 data naming, CRUD, transaction structure를 실서비스형 architecture로 재구성하기 시작했다.

이 시점을 **“WMS의 최초 시작”으로 표현하지 않는다.**

정확한 표현은 다음과 같다.

> **Initial AppSheet / data-model concept에서 custom web WMS architecture로 전환한 시점.**

### Pivot Interpretation

**Evidence status: Supported**

AppSheet phase는 빠른 concept validation과 operating-model 구체화에 유효했고, 이후 실제 요구 범위가 증가하면서 capability ceiling이 드러나 custom architecture가 필요해진 것으로 해석한다.

### Still Needs Verification

**Evidence status: Needs Further Verification**

- AppSheet → Web 전환의 정확한 trigger sequence
- 각 limitation이 실제 decision에 미친 상대적 영향
- architecture decision이 확정된 정확한 log / commit boundary

---

## 7. 2026-01 ~ 2026-02 — Incremental Implementation

**Evidence status: Supported**

개발은 전체 시스템을 한 번에 생성하는 방식보다 다음 반복에 가까웠다.

```text
Domain understanding
→ one feature
→ AI-assisted implementation
→ run
→ human verification
→ correction
→ next feature
```

현재 development approach의 working characterization은 다음과 같다.

> **Domain-Grounded Incremental AI Development**

설명형 표현:

> **AI-assisted implementation within a deeply understood operational domain.**

이 명칭은 아직 formal method가 아니다.

현재 관찰되는 핵심 특성:

- domain / problem understanding remained with the human operator
- features were implemented incrementally
- each increment was exercised and verified
- the next layer was added after verification
- complexity accumulated over time

현재 working observation:

> **Complexity accumulated through verified increments.**

한국어 의미:

> **복잡성은 한 번에 생성된 것이 아니라 검증된 작은 구현들이 누적되며 형성됐다.**

이 관찰을 generic vibe coding과 완전히 별개의 범주라고 과장하지 않는다. 현재 말할 수 있는 차이는 **large one-shot generation보다 incremental implementation + verification 성향이 강했다**는 수준이다.

모든 commit이 동일한 방식으로 만들어졌다고 단정하지 않으며, 실제 AI / development log와 Git commit history를 통해 추가 검증한다.

---

## 8. 2026-02-12 — V1 Operational Baseline

**Evidence status: Confirmed**

2026-02-12에는 현장 pilot이 가능한 **V1 operational baseline**이 확보된 것으로 현재 확인된다.

확인된 V1 범위:

- inbound
- inventory movement
- outbound
- master data
- location model
- transaction history
- authentication / authorization
- permission control
- UAT

이 milestone은 WMS의 최초 시작이 아니라, 2025-11부터 이어진 문제 정의·data model·AppSheet hypothesis·architecture pivot 이후 custom web implementation이 operational baseline에 도달한 시점이다.

### Still Needs Verification

**Evidence status: Needs Further Verification**

- V1 baseline에 대응하는 정확한 Git commit boundary
- UAT의 구체적 범위와 결과
- 최초 production 또는 pilot deployment date
- 실제 사용 사용자/업무 범위
- 알려진 limitation과 당시 outstanding issues

---

## 9. 2026-02 ~ 2026-03 — V2 Evolution

**Evidence status: Confirmed**

현장 운영에서 발생하는 실제 불편과 예외를 중심으로 기능이 확장되었다.

주요 evolution area:

- QR scanner
- inventory adjustment
- shuttle rack mapping
- password reset
- bulk inbound / outbound
- rack card
- operational UX improvements

현재 working interpretation:

> 이 단계의 판단 기준은 단순 feature count보다 **operational fit**에 가까워졌다.

각 기능의 정확한 introduction date, triggering problem, business rule, validation evidence는 Git commit history와 AI / development log에서 추가 재구성해야 한다.

---

## 10. 2026-03 — V2.5 Direction

**Evidence status: Confirmed as direction; implementation state varies**

다음 방향이 검토되었다.

- dashboard
- KPI
- traceability
- Excel export
- safety-stock / expiry alerts
- location optimization

이 단계는 단순 transaction system에서 management / analysis / control capability로 확장하려는 방향으로 기록한다.

모든 항목이 동일한 production status였다고 단정하지 않는다.

### Still Needs Verification

**Evidence status: Needs Further Verification**

- 각 V2.5 항목의 실제 구현 여부
- prototype / partial / production-ready 상태 구분
- current source와 당시 chronology의 차이

---

## 11. Working Chronology Summary

| Period | Working Reconstruction | Status |
| --- | --- | --- |
| `2025-11` | 수동 랙 창고의 rack-card compliance, location/item mismatch, inventory search, physical/system difference, closing burden에서 시작 | Confirmed |
| Initial hypothesis | Location QR + Item QR + AppSheet + Google Sheets + PC lookup terminal | Confirmed |
| `2025-11-18` | `LOC_MASTER` / `ITEM_MASTER` / `STOCK_TX`, `LOC_ID`, `ITEM_KEY`, `ITEM_DIFF`/ERP comparison, M-rack/rack-card concept | Confirmed |
| AppSheet interpretation | 이미 형성된 data/operating model 위의 first executable hypothesis | Supported |
| `2025-12` | 생산 현장 단독 사용을 목표로 WMS V1 direction 구체화 | Confirmed |
| `2026-01-14~15` | AppSheet/data-model concept → Next.js + Supabase/PostgreSQL + Git + Vercel custom web WMS architecture pivot | Confirmed |
| `2026-01~02` | domain understanding → feature → AI implementation → run → human verification → correction 반복 | Supported |
| `2026-02-12` | inbound/movement/outbound/master/location/history/auth/permission/UAT의 V1 operational baseline | Confirmed |
| `2026-02~03` | QR scanner, adjustment, shuttle rack, password reset, bulk I/O, rack card, UX 중심 V2 evolution | Confirmed |
| `2026-03` | dashboard/KPI/traceability/Excel/alerts/location optimization의 V2.5 direction | Confirmed as direction; implementation state needs verification |

이 chronology는 canonical FORGE Case가 아니다. source-level cross-check가 끝나면 일부 status가 바뀔 수 있다.

---

## 12. Evidence Classification

WMS Case reconstruction에는 최소 다음 네 종류의 evidence source를 분리한다.

### 1. Drive Initial Design

초기 WMS 기획, 문제 정의, solution hypothesis, data model, operating-model intent를 확인하는 source.

주요 확인 대상:

- 초기 WMS 기획
- AppSheet / Dual QR concept
- Google Sheets Single Source of Truth 설계
- PC “library search terminal” concept
- 2025-11-18 DB/data model
- M-rack / rack-card concept

### 2. AI / Development Log

당시 작업일지, 기술전환 기록, 구현·검증 과정을 확인하는 source.

주요 확인 대상:

- AppSheet limitation 발견 과정
- architecture pivot decision trail
- feature-by-feature implementation
- run / verification / correction loop
- business rule evolution
- operational issue → software change 연결

### 3. Git Repository / Current Source

현재 구현된 system architecture, business rules, current features를 확인하는 source.

주요 확인 대상:

- current architecture
- relational data structure
- implemented business rules
- current feature set
- auth / permission model
- current operational logic

현재 source는 **현재 구현 상태의 강한 evidence**지만 과거 chronology 전체를 단독으로 증명하지 않는다.

### 4. Git Commit History

실제 evolution, feature introduction, refactoring, operational change를 확인하는 chronology source.

주요 확인 대상:

- architecture pivot boundary
- major feature introduction
- V1 baseline boundary
- V2 / V2.5 evolution
- refactoring and correction sequence
- operational feedback 이후의 change pattern

commit message만으로 결론내리지 않고 필요하면 diff와 current source를 함께 확인한다.

---

## 13. Currently Confirmed / Supported / Needs Verification

### Confirmed

현재 working chronology에서 직접 기록할 수 있는 항목:

- 2025-11 현장 문제에서 WMS concept가 시작됨
- Dual QR / AppSheet / Google Sheets / PC lookup 초기 방향
- Google Sheets의 초기 Single Source of Truth 역할
- 2025-11-18 3-layer data model과 주요 identifier / comparison concept
- 2025-12 V1 direction 구체화
- 2026-01-14~15 custom web architecture pivot
- Next.js + Supabase/PostgreSQL + Git + Vercel direction
- 2026-02-12 V1 operational baseline과 확인된 기능 범위
- 2026-02~03 V2 operational-fit feature evolution
- 2026-03 V2.5 management / analysis / control direction

### Supported

현재 evidence가 지지하지만 formal Case 전에 cross-check가 필요한 해석:

- AppSheet was the first executable hypothesis
- AppSheet phase가 QR workflow / data model / interaction discovery에 기여했다는 해석
- architecture pivot이 AppSheet capability ceiling이 드러난 결과라는 해석
- development가 Domain-Grounded Incremental AI Development에 가까웠다는 characterization
- `Complexity accumulated through verified increments.`라는 working observation
- V2의 판단 기준이 feature count보다 operational fit에 가까워졌다는 해석

### Needs Further Verification

- 최초 AppSheet prototype이 실제 현장 pilot까지 갔는가?
- AppSheet → Web 전환의 정확한 trigger sequence는 무엇인가?
- 최초 production / pilot deployment date는 언제인가?
- 각 major version의 실제 사용 범위는 어디까지인가?
- 사용자 피드백과 adoption evidence는 무엇인가?
- 중요한 Git commit과 architecture decision은 어떻게 연결되는가?
- quantitative outcome 중 public MILES에서 공개 가능한 evidence가 있는가?
- current code와 초기 design 사이에서 유지된 business rule은 무엇인가?
- 폐기되거나 변경된 초기 assumptions는 무엇인가?
- V2.5 각 feature의 실제 implementation state는 무엇인가?

확인되지 않은 과거 상황은 추정으로 채우지 않는다.

---

## 14. Public / Security Boundary

MILES는 public repository다.

`security/REDACTION_POLICY.md` 기준에 따라 다음은 Generalize 또는 Exclude 대상으로 취급한다.

- company-specific operational identifiers
- internal location codes
- confidential item codes
- infrastructure identifiers
- private URLs
- credentials
- sensitive production / inventory figures
- detailed rack/location coding
- private database / project identifiers
- internal endpoints or repository paths
- 내부 QR payload 중 operational identifier가 포함된 값

현재 Research Note는 chronology와 engineering decision을 이해하는 데 필요한 추상화 수준만 유지한다.

**Canonical FORGE publication 전에는 Drive initial design, AI / development log, Git evidence를 다시 검토해 additional sanitization review를 수행해야 한다.**

원칙:

> 아키텍처와 엔지니어링 학습은 가능한 한 보존하고, 실제 조직·시설·운영 환경을 직접 식별하는 값은 일반화하거나 제외한다.

---

## 15. Claim Discipline

현재 WMS에 대해 다음을 주장하지 않는다.

- Docs as Code, Feature as Code, Git as Action의 직접적인 전신이다.
- WMS의 발전사와 MILES working-method evolution이 동일한 track이다.
- Abstraction Lift의 대표 사례다.
- AppSheet는 실패한 기술이었다.
- 모든 feature가 동일한 AI-assisted workflow로 구현되었다.
- generic vibe coding과 완전히 별개의 category다.
- 각 milestone의 효과가 정량적으로 검증되었다.
- current source가 과거 모든 운영 상태를 그대로 반영한다.

현재 가능한 가장 신중한 development characterization은 다음이다.

> **Domain-Grounded Incremental AI Development**
>
> **AI-assisted implementation within a deeply understood operational domain.**

그리고 현재 working observation은 다음이다.

> **Complexity accumulated through verified increments.**

이 표현들은 모두 아직 formal methodology가 아니다.

---

## 16. Open Questions

정식 FORGE Case 이전에 해결해야 할 주요 질문:

- 최초 AppSheet prototype이 실제 현장 pilot까지 갔는가?
- AppSheet → Web 전환의 정확한 trigger sequence는 무엇인가?
- 최초 production / pilot deployment date는 언제인가?
- 각 major version의 실제 사용 범위는 어디까지인가?
- 사용자 피드백과 adoption evidence는 무엇인가?
- 중요한 Git commit과 architecture decision을 어떻게 연결할 수 있는가?
- quantitative outcome 중 공개 가능한 evidence는 무엇인가?
- current code와 초기 design 사이에서 유지된 business rule은 무엇인가?
- 폐기되거나 변경된 초기 assumptions는 무엇인가?

답을 추정해서 채우지 않는다.

---

## 17. Next Research Step

다음 단계는 canonical FORGE Case 작성이 아니라 **FORGE-001 — WMS evidence reconstruction**이다.

권장 evidence reconstruction 순서:

```text
Drive Initial Design
→ AI / Development Log
→ Git Commit History
→ Git Repository / Current Source
→ chronology cross-check
→ evidence status update
→ sanitization review
→ evidence gaps
→ only then consider formal FORGE Case
```

`forge/WMS-001/`은 아직 생성하지 않는다.
