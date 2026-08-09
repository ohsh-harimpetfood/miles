# WMS Case — Working Research Note

**Status:** Working Research Note  
**Case Track:** FORGE-001 — WMS  
**Current Phase:** Evidence reconstruction  
**Artifact Class:** BRIDGE research note, not yet a formal FORGE Case

이 문서는 WMS 프로젝트의 실제 기원, 기술 전환, 구현 방식, 운영 진화를 향후 `FORGE-001` 작성에 사용할 수 있도록 evidence-based chronology로 복원하기 위한 working note다.

아직 `forge/WMS-001/` 정식 Case를 작성하지 않으며, 현재 확인된 사실과 추가 검증이 필요한 사항을 구분한다.

## Interpretation Boundary

WMS는 **Docs as Code, Feature as Code, Git as Action의 직접적인 전신이나 초기 버전으로 해석하지 않는다.**

WMS는 별도의 **독립적인 현업 문제 해결 소프트웨어 프로젝트**다.

다음 두 track은 현재 별개로 취급한다.

```text
Track A
WMS operational software evolution

Track B
Docs as Code
→ Feature as Code
→ Git as Action
working-method evolution
```

두 track 사이의 상호 영향이나 계보를 주장하려면 별도의 evidence가 필요하다.

또한 WMS를 현재 `Abstraction Lift`의 대표 증거라고 주장하지 않는다. 향후 실제 Case evidence가 충분히 축적되면 비교·분석할 수 있지만, chronology 자체를 후대의 MILES working hypothesis에 맞춰 재해석하지 않는다.

---

## Evidence Status Convention

이 Research Note에서는 가능한 경우 각 주장에 다음 evidence status를 붙인다.

- **Confirmed** — 현재 확보된 evidence에서 직접 확인된 사실로 취급
- **Supported** — 둘 이상의 정황 또는 현재 재구성에서 강하게 지지되지만 canonical Case 전 추가 cross-check가 필요한 내용
- **Needs Further Verification** — 정확한 날짜, 범위, trigger, 운영 사용 수준 등을 추가 source로 확인해야 하는 내용

이 상태값은 최종 판정이 아니다. Drive, development log, Git repository/current source, Git commit history를 실제로 cross-check하면서 변경될 수 있다.

확인되지 않은 과거 상황은 추정으로 채우지 않는다.

---

## 1. 2025-11 — Initial Field Problem / WMS Concept

**Evidence Status: Supported**

WMS 프로젝트는 2025년 11월, 수동 랙 창고의 실제 운영 문제에서 시작한 것으로 현재 재구성된다.

확인된 문제 범위:

- manual rack card compliance 문제
- physical location / item information mismatch
- inventory search를 위해 현장 탐색 또는 사람에게 문의해야 하는 비효율
- physical inventory와 system inventory 간 차이
- stock count / closing 시 추가 검증 부담

이 단계의 출발점은 새로운 기술을 도입하는 것 자체가 아니라, **현장의 위치·품목·재고 상태를 더 신뢰 가능하고 빠르게 확인하고 운영할 수 있어야 한다**는 문제였다.

### Initial Solution Hypothesis

**Evidence Status: Supported**

초기 executable solution hypothesis는 다음 조합이었다.

```text
Location QR
+ Item QR
+ AppSheet mobile input
+ Google Sheets data layer
+ PC read-only lookup terminal
```

초기 PC 조회 화면은 **“library search terminal”**, 즉 도서관 검색기와 유사한 개념으로 정의된 것으로 현재 기록한다.

Google Sheets는 당시 초기 **Single Source of Truth**로 설계된 것으로 취급한다.

public MILES에서는 실제 창고명, 시설 식별자, 구체적인 위치 코드, 품목 코드, 운영 수량은 일반화한다.

---

## 2. 2025-11-18 — Initial Data Model

**Evidence Status: Supported**

2025-11-18에는 다음 핵심 구조가 정의된 것으로 현재 확인된다.

```text
LOC_MASTER
ITEM_MASTER
STOCK_TX
```

핵심 identifier / comparison concept:

- `LOC_ID`
- `ITEM_KEY`
- `ITEM_DIFF` / ERP comparison concept

현재 working interpretation:

- `LOC_MASTER` — Location 기준정보
- `ITEM_MASTER` — Item 기준정보
- `STOCK_TX` — 재고 이동·변경을 기록하는 Transaction layer
- `ITEM_DIFF` / ERP comparison — physical/operational inventory와 기존 system/ERP 상태의 차이를 비교하는 개념

즉, Location / Item / Transaction을 분리하는 **3-layer data model**이 초기 단계에 먼저 설계된 것으로 취급한다.

### M Rack / Rack Card Concept

**Evidence Status: Supported**

M rack location model과 rack card concept도 이 단계에 존재한 것으로 현재 chronology에 포함한다.

정확한 location code 체계, rack coding 규칙, 실제 rack 구조는 public repository에서 그대로 노출하지 않고 `security/REDACTION_POLICY.md`에 따라 일반화한다.

### Interpretation of AppSheet at This Stage

AppSheet는 단순 아이디어나 임시 UI가 아니라, 이미 정의된 data / operating model 위에서 빠르게 실행 가능성을 검증하기 위한 **초기 executable frontend hypothesis**로 취급한다.

> **AppSheet was the first executable hypothesis.**

이 문장은 AppSheet가 최종 architecture였다는 뜻이 아니라, 당시의 problem/data model을 실제 workflow로 빠르게 시험하기 위한 첫 실행 가능한 접근이었다는 의미다.

---

## 3. 2025-12 — WMS V1 Direction

**Evidence Status: Supported**

2025년 12월에는 생산 현장 단독 사용을 목표로 WMS Version 1.0 방향이 구체화된 것으로 현재 재구성한다.

초기에는 AppSheet를 통한 빠른 implementation 가능성을 우선 검토했다.

이 단계에서의 정확한 prototype 범위, 실제 현장 pilot 여부, 사용자 수, 운영 적용 수준은 아직 추가 확인이 필요하다.

**Needs Further Verification:**

- 최초 AppSheet prototype의 실제 실행 범위
- 현장 pilot 여부
- 당시 V1로 상정한 feature boundary

---

## 4. AppSheet Phase Interpretation

AppSheet를 실패한 기술로 표현하지 않는다.

현재 working interpretation은 다음과 같다.

> **AppSheet was the first executable hypothesis.**

AppSheet phase의 가치는 최소 다음 네 가지로 본다.

- 빠른 field concept validation
- QR workflow concretization
- data-model validation
- operational interaction discovery

즉, AppSheet phase는 이후 폐기된 잘못된 시도가 아니라 **현장 문제와 data model을 실행 가능한 형태로 빠르게 시험한 단계**로 취급한다.

이후 요구 범위가 증가하면서 AppSheet 기반 접근의 capability ceiling이 드러나고 architecture pivot이 발생한 것으로 기록한다.

정확히 어떤 limitation이 어떤 순서로 pivot을 촉발했는지는 추가 evidence가 필요하다.

---

## 5. 2026-01-14 ~ 2026-01-15 — Architecture Pivot

**Evidence Status: Supported**

2026-01-14~15에는 AppSheet 기반 접근에서 custom Web Application 구조로 전환하는 architecture decision이 이루어진 것으로 현재 재구성한다.

확인된 판단 기준:

- UX
- performance
- deployment flexibility
- extensibility

새 architecture direction:

```text
Next.js
+ Supabase / PostgreSQL
+ Git
+ Vercel
```

이 시점은 **“WMS의 최초 시작”이 아니다.**

정확한 표현은 다음과 같다.

> **Initial AppSheet/data-model concept에서 custom web WMS architecture로 전환한 시점.**

이후 AppSheet-era schema와 operating concept를 relational structure로 옮기고, data naming, CRUD, transaction structure를 실서비스형 architecture로 재구성하기 시작한 것으로 기록한다.

### Needs Further Verification

- AppSheet → Web 전환을 결정한 정확한 trigger sequence
- architecture decision의 구체적인 기록
- 최초 Next.js/Supabase implementation commit
- schema migration 과정에서 유지·변경된 business rule

---

## 6. 2026-01 ~ 2026-02 — Incremental Implementation

**Evidence Status: Supported as a working observation**

architecture pivot 이후 개발은 전체 시스템을 한 번에 생성하는 방식보다 다음과 같은 반복에 가까웠던 것으로 현재 정리한다.

```text
Domain Understanding
→ One Feature
→ AI-Assisted Implementation
→ Run
→ Human Verification
→ Correction
→ Next Feature
```

현재 working observation:

> **Complexity accumulated through verified increments.**

한국어 의미:

> **복잡성은 한 번에 생성된 것이 아니라 검증된 작은 구현들이 누적되며 형성됐다.**

이 문장은 현재 formal methodology가 아니다.

### Working Characterization

현재 개발 접근을 임시로 다음과 같이 표현할 수 있다.

> **Domain-Grounded Incremental AI Development**

또는 설명형 표현:

> **AI-assisted implementation within a deeply understood operational domain.**

이 명칭도 아직 정식 Method가 아니다.

현재 관찰되는 핵심 특성은 다음과 같다.

- domain/problem understanding remained with the human operator
- features were implemented incrementally
- each increment was exercised and verified
- the next layer was added after verification
- complexity accumulated over time

Generic vibe coding과 완전히 다른 범주라고 과장해서 주장하지 않는다.

현재 evidence가 지지하는 수준의 표현은 **large one-shot generation보다 incremental implementation + verification이 강했다**는 관찰이다.

모든 commit이 동일한 workflow로 만들어졌다고 단정하지 않으며, Git history와 development log를 통해 반복 패턴을 추가 검증해야 한다.

---

## 7. 2026-02-12 — V1 Operational Baseline

**Evidence Status: Supported**

2026-02-12는 현재 WMS의 **V1 operational baseline**이 형성된 milestone으로 기록한다.

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

현재 해석은 이 시점에 **현장 pilot 가능한 operational baseline**이 확보되었다는 것이다.

다만 정식 Case 작성 전에는 아래 항목을 추가 검증해야 한다.

### Needs Further Verification

- V1 baseline에 실제 포함된 정확한 feature set
- 각 기능의 commit boundary
- UAT의 실제 범위와 결과
- 최초 pilot / production deployment date
- 당시 알려진 limitation
- 실제 사용자 범위와 adoption evidence

---

## 8. 2026-02 ~ 2026-03 — V2 Evolution

**Evidence Status: Supported**

2026년 2~3월에는 현장 운영에서 발생하는 실제 불편과 예외를 중심으로 WMS가 확장된 것으로 현재 재구성한다.

주요 evolution area:

- QR scanner
- inventory adjustment
- shuttle rack mapping
- password reset
- bulk inbound / outbound
- rack card
- operational UX improvements

이 단계의 판단 기준은 단순 feature count보다 **operational fit**에 가까워진 것으로 현재 해석한다.

즉, “무엇을 더 넣을 것인가?”보다 실제 현장 사용에서 나타나는 friction, exception, 반복 업무를 어떻게 줄일 것인가가 더 중요해졌다는 working interpretation이다.

### Needs Further Verification

- 각 feature의 정확한 도입 시점
- feature별 originating problem
- business rule 변화
- 사용자 feedback과 adoption evidence
- 어떤 기능이 pilot이고 어떤 기능이 안정 운영 상태였는지

---

## 9. 2026-03 — V2.5 Direction

**Evidence Status: Supported as direction, implementation status needs verification**

2026년 3월에는 WMS가 단순 transaction execution system을 넘어 management / analysis / control capability로 확장되는 V2.5 방향을 검토한 것으로 현재 기록한다.

주요 방향:

- dashboard
- KPI
- traceability
- Excel export
- safety-stock / expiry alerts
- location optimization

이 항목들이 모두 같은 시점에 같은 완성도로 구현되었다고 단정하지 않는다.

### Needs Further Verification

- 각 항목의 실제 implementation status
- proposal / prototype / production 여부
- current code에 유지된 범위
- KPI / alert logic의 business rule

---

## 10. Working Chronology Summary

| Period | Working Reconstruction | Evidence Status |
| --- | --- | --- |
| `2025-11` | 수동 랙 창고의 rack card compliance, 위치·품목 불일치, 재고 탐색, physical/system inventory 차이 문제에서 시작 | Supported |
| Initial hypothesis | Location QR + Item QR + AppSheet + Google Sheets + PC read-only lookup | Supported |
| `2025-11-18` | `LOC_MASTER` / `ITEM_MASTER` / `STOCK_TX`, `LOC_ID`, `ITEM_KEY`, `ITEM_DIFF`/ERP comparison concept 설계 | Supported |
| `2025-11-18` | M rack location model / rack card concept 존재 | Supported |
| `2025-12` | 생산 현장 단독 사용을 목표로 V1 방향 구체화, AppSheet rapid implementation 우선 검토 | Supported |
| `2026-01-14~15` | AppSheet/data-model concept에서 Next.js + Supabase(PostgreSQL) + Git + Vercel custom web architecture로 pivot | Supported |
| `2026-01~02` | domain understanding → feature → AI implementation → run → human verification → correction 반복 | Supported as working observation |
| `2026-02-12` | V1 operational baseline | Supported |
| `2026-02~03` | QR scanner, adjustment, shuttle rack, password reset, bulk I/O, rack card, UX 중심 V2 evolution | Supported |
| `2026-03` | dashboard, KPI, traceability, Excel export, alerts, location optimization의 V2.5 direction | Supported as direction |

정식 FORGE Case의 canonical chronology는 source별 cross-check 후 확정한다.

---

## 11. Evidence Classification

WMS evidence reconstruction에서는 최소 다음 네 종류를 구분한다.

### 1. Drive Initial Design

초기 WMS 기획, AppSheet / Dual QR concept, DB 설계 등 당시 problem framing과 solution hypothesis를 확인하는 source.

주요 검증 대상:

- 2025-11 initial field problem
- Location QR / Item QR concept
- AppSheet mobile input
- Google Sheets Single Source of Truth
- PC read-only lookup / “library search terminal” concept
- 2025-11-18 data model
- M rack / rack card concept

### 2. AI / Development Log

당시 작업일지, 기술전환 기록, 구현 및 검증 과정을 확인하는 source.

주요 검증 대상:

- AppSheet → Web architecture pivot trigger
- feature-by-feature development sequence
- debugging / correction loop
- human verification pattern
- business rule evolution
- operational feedback가 구현에 반영된 과정

### 3. Git Repository / Current Source

현재 구현된 system architecture, business rules, current features를 확인하는 source.

주요 검증 대상:

- current technology stack
- current data model
- current business logic
- implemented features
- authentication / authorization model
- 현재 남아 있는 초기 concept의 흔적

현재 source는 **현재 상태의 evidence**이며, 그 자체만으로 과거 chronology 전체를 증명하지 않는다.

### 4. Git Commit History

실제 evolution, feature introduction, refactoring, operational change를 시간순으로 확인하는 source.

주요 검증 대상:

- architecture pivot 시점과 변경 범위
- V1 baseline boundary
- feature introduction chronology
- refactoring / correction sequence
- V2 / V2.5 evolution
- incremental implementation pattern

commit message만으로 결론내리지 않고 필요하면 diff와 current source를 함께 본다.

---

## 12. Current Evidence Assessment

현재 Research Note에서 사용할 수 있는 working assessment는 다음과 같다.

### Supported

- 2025-11의 현장 문제에서 WMS concept가 시작됨
- Location QR / Item QR / AppSheet / Google Sheets / PC lookup의 초기 solution hypothesis
- 2025-11-18 3-layer data model 및 주요 identifier 설계
- M rack / rack card concept의 초기 존재
- Google Sheets의 초기 Single Source of Truth 역할
- AppSheet가 첫 executable hypothesis였다는 해석
- 2026-01-14~15 custom web architecture pivot
- Next.js + Supabase/PostgreSQL + Git + Vercel 방향
- incremental implementation + human verification pattern
- 2026-02-12 V1 operational baseline
- 2026-02~03 operational-fit 중심 V2 evolution
- 2026-03 management/analysis/control 방향의 V2.5 expansion

### Needs Further Verification

- 최초 AppSheet prototype이 실제 현장 pilot까지 갔는가?
- AppSheet → Web 전환의 정확한 trigger sequence
- 최초 production/pilot deployment date
- 각 major version의 실제 사용 범위
- 사용자 feedback과 adoption evidence
- 중요한 Git commit과 architecture decision의 직접 연결
- quantitative outcome 중 public하게 공개 가능한 evidence
- current code와 초기 design 사이에서 유지된 business rule
- 폐기되거나 변경된 초기 assumptions
- 각 V1/V2/V2.5 기능의 exact implementation date와 operational status

이 항목들의 답을 추정해서 채우지 않는다.

---

## 13. Development Approach — Working Characterization

현재 가장 적절한 working characterization은 다음 두 표현이다.

> **Domain-Grounded Incremental AI Development**

> **AI-assisted implementation within a deeply understood operational domain.**

이 표현들은 formal methodology가 아니다.

현재 관찰되는 핵심은 다음과 같다.

```text
Human domain understanding
→ explicit operational need
→ small implementation increment
→ AI-assisted implementation
→ direct execution
→ human verification
→ correction
→ next increment
```

중요한 점은 complexity가 처음부터 한 번에 설계·생성된 것이 아니라 시간에 따라 누적되었다는 것이다.

> **Complexity accumulated through verified increments.**

이 working observation은 향후 Git history와 development log를 통해 검증해야 하며, 충분한 반복 evidence가 쌓이기 전에는 `METHODS`로 일반화하지 않는다.

---

## 14. Public / Security Boundary

MILES는 public repository다.

`security/REDACTION_POLICY.md` 기준에 따라 다음 정보는 Generalize 또는 Exclude 대상으로 취급한다.

- company-specific operational identifiers
- internal location codes
- confidential item codes
- infrastructure identifiers
- private URLs
- credentials
- sensitive production / inventory figures
- exact facility identifiers
- detailed rack/location coding schemes
- internal QR payloads
- private database / project identifiers

현재 Research Note에서는 chronology와 engineering decisions를 이해하는 데 필요한 수준만 남기고 실제 운영 환경을 직접 식별하는 값은 기록하지 않는다.

**Canonical FORGE publication 전에는 Drive 자료, development log, Git source/history에 대해 additional sanitization review가 필요하다.**

Redaction의 목적은 프로젝트의 engineering value, problem, architecture, business rule, evolution을 보존하면서 회사·개인·운영 환경을 재식별할 수 있는 정보를 제거하는 것이다.

---

## 15. Claim Discipline

현재 WMS에 대해 다음을 주장하지 않는다.

- Docs as Code, Feature as Code, Git as Action의 직접적인 전신 또는 초기 버전이다.
- Abstraction Lift의 대표 사례다.
- AppSheet는 실패한 기술이었다.
- 모든 feature가 동일한 AI-assisted workflow로 구현되었다.
- Generic vibe coding과 완전히 다른 독립적 범주다.
- V1/V2/V2.5의 모든 기능과 성과가 이미 정량 검증되었다.
- current code가 과거 모든 운영 상태를 그대로 반영한다.

현재 가장 중요한 working position은 다음과 같다.

> WMS는 먼저 **독립적인 현업 소프트웨어 프로젝트**로 chronology와 evidence를 복원한다.

다른 MILES working hypothesis와의 연결은 canonical Case evidence가 충분히 정리된 이후 별도 분석 대상으로 다룬다.

---

## 16. Open Questions

- 최초 AppSheet prototype이 실제 현장 pilot까지 갔는가?
- AppSheet → Web 전환의 정확한 trigger sequence는 무엇이었는가?
- 최초 production/pilot deployment date는 언제인가?
- 각 major version의 실제 사용 범위는 어디까지였는가?
- 사용자 feedback과 adoption evidence는 무엇이 남아 있는가?
- 중요한 Git commit과 architecture decision을 직접 연결할 수 있는가?
- quantitative outcome 중 public하게 공개 가능한 evidence가 있는가?
- current code와 초기 design 사이에서 유지된 business rule은 무엇인가?
- 어떤 초기 assumptions가 폐기되거나 변경되었는가?
- V1 baseline에서 실제 UAT는 어떤 범위로 수행되었는가?
- operational fit을 개선한 feature 중 가장 큰 영향을 준 것은 무엇인가?

답을 추정해서 작성하지 않는다.

---

## Next Research Step

다음 단계는 정식 FORGE Case 작성이 아니라 **FORGE-001 — WMS evidence reconstruction**이다.

권장 evidence reconstruction 순서:

```text
Drive Initial Design
→ AI / Development Log
→ Git Commit History
→ Git Repository / Current Source
→ Chronology Cross-Check
→ Evidence Status Update
→ Sanitization Review
→ Evidence Gaps
→ Only Then Consider Canonical FORGE Case
```

`forge/WMS-001/`은 아직 생성하지 않는다.
