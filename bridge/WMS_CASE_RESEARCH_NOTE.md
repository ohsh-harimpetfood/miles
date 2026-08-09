# WMS Case — Working Research Note

**Status:** Working Research Note supporting FORGE promotion  
**Case Track:** FORGE-001 — WMS  
**Current Phase:** Promotion Gate PASS / canonical case v0.1 support  
**Artifact Class:** BRIDGE evidence note; not a METHODS artifact

이 문서는 WMS 프로젝트의 실제 기원, 기술 전환, 구현 방식, 운영 진화를 evidence-based chronology로 복원하고 첫 canonical FORGE Case v0.1을 지원하기 위한 working note다.

WMS는 **Docs as Code, Feature as Code, Git as Action의 직접적인 전신이나 초기 버전으로 해석하지 않는다.** WMS는 별도의 **독립적인 현업 문제 해결 소프트웨어 프로젝트**다. 두 track 사이의 상호 영향이나 계보를 주장하려면 별도의 evidence가 필요하다.

또한 WMS를 `Abstraction Lift`의 대표 증거라고 주장하지 않는다. chronology 자체를 후대의 MILES working hypothesis에 맞춰 재해석하지 않는다.

---

## Evidence Status Convention

- **Confirmed** — 확보된 evidence에서 직접 확인된 사실
- **Strongly Supported** — 여러 독립 evidence가 같은 결론을 강하게 지지하지만 일부 세부는 추가 cross-check 가능
- **Supported** — 현재 evidence가 지지하지만 canonical interpretation 전 추가 검증 여지가 있음
- **Needs Further Verification** — 정확한 chronology, 범위, trigger, 운영 수준 등을 추가 source로 확인해야 함
- **Not Yet Established / Not Yet Measured** — 현재 evidence로는 성과 또는 측정 결과를 주장할 수 없음

확인되지 않은 과거 상황은 추정으로 채우지 않는다.

---

## FORGE Promotion Gate — PASS

WMS는 현재 FORGE Content Contract의 핵심 조건인 **실제로 구현되고 운영된 시스템**, **originating problem**, **architecture / business rules**, **implementation evidence**, **operational flow**, **evolution evidence**를 충족하는 것으로 판단한다.

따라서 **FORGE Promotion Gate — PASS**로 기록한다.

| Promotion Evidence | Status |
| --- | --- |
| originating field problem | Supported |
| initial AppSheet / Dual QR hypothesis | Supported |
| architecture pivot | Strongly Supported |
| implemented system | Confirmed |
| incremental Git evolution | Confirmed |
| production deployment | Confirmed by visual evidence |
| authenticated application | Confirmed |
| operational transaction history | Confirmed |
| multi-user / role operation | Confirmed |
| role / feature permission | Confirmed |
| physical-digital location model | Confirmed |
| rack-card / QR output capability | Confirmed |
| heterogeneous storage topology support | Confirmed for current system |
| measured business impact | **Not Yet Established** |
| physical field photography | Optional Enhancement |

FORGE 승격은 measured ROI가 없다는 이유만으로 막지 않는다. 현재 확보된 evidence는 시스템이 실제로 구현·배포·운영되고 physical/digital warehouse model과 operational transaction을 수행한다는 점을 입증한다.

정량 성과가 아직 검증되지 않은 영역은 **Not Yet Measured / Not Yet Established**로 남긴다. 숫자를 추정하거나 성과를 과장하지 않는다.

---

## 1. 2025-11 — Initial Field Problem / WMS Concept

**Evidence Status: Supported**

WMS 프로젝트는 2025년 11월, 수동 랙 창고의 실제 운영 문제에서 시작한 것으로 재구성된다.

- manual rack card compliance 문제
- physical location / item information mismatch
- inventory search를 위해 현장 탐색 또는 문의가 필요한 비효율
- physical inventory와 system inventory 간 차이
- stock count / closing 시 추가 검증 부담

출발점은 기술 도입 자체가 아니라 **현장의 위치·품목·재고 상태를 더 신뢰 가능하고 빠르게 확인·운영할 수 있어야 한다**는 문제였다.

### Initial Solution Hypothesis

**Evidence Status: Supported**

```text
Location QR
+ Item QR
+ AppSheet mobile input
+ Google Sheets data layer
+ PC read-only lookup terminal
```

초기 PC 조회 화면은 “library search terminal”, 즉 도서관 검색기와 유사한 개념으로 정의되었다. Google Sheets는 당시 초기 Single Source of Truth로 설계되었다.

---

## 2. 2025-11-18 — Initial Data Model

**Evidence Status: Supported**

초기 핵심 구조:

```text
LOC_MASTER
ITEM_MASTER
STOCK_TX
```

핵심 identifier / comparison concept:

- `LOC_ID`
- `ITEM_KEY`
- `ITEM_DIFF` / ERP comparison concept

Location / Item / Transaction을 분리하는 3-layer data model이 초기 단계에 먼저 설계되었다.

M rack location model과 rack card concept도 이 단계에 존재한 것으로 현재 chronology에 포함한다. exact location coding은 public MILES에서 공개하지 않는다.

### AppSheet Interpretation

> **AppSheet was the first executable hypothesis.**

AppSheet는 실패한 기술이 아니라 이미 정의된 data / operating model을 빠르게 실행 가능한 workflow로 시험하기 위한 첫 executable frontend hypothesis였다.

AppSheet phase의 가치는 다음과 같다.

- 빠른 field concept validation
- QR workflow concretization
- data-model validation
- operational interaction discovery

---

## 3. 2025-12 — WMS V1 Direction

**Evidence Status: Supported**

생산 현장 단독 사용을 목표로 WMS Version 1.0 방향이 구체화되었고 AppSheet 기반 rapid implementation 가능성을 우선 검토했다.

실제 AppSheet prototype의 pilot 범위와 당시 V1 feature boundary는 추가 검증 대상이다.

---

## 4. 2026-01-14 ~ 2026-01-15 — Architecture Pivot

**Evidence Status: Strongly Supported**

AppSheet 기반 접근에서 custom Web Application으로 architecture pivot이 이루어진 것으로 재구성된다.

판단 기준:

- UX
- performance
- deployment flexibility
- extensibility

새 architecture direction:

```text
AppSheet / Google Sheets concept
→ Next.js
→ Supabase / PostgreSQL
→ Git
→ Vercel
```

이 시점은 WMS의 최초 시작이 아니라 **initial AppSheet/data-model concept에서 custom web WMS architecture로 전환한 시점**이다.

### Git Corroboration — 2026-01-16 KST

**Evidence Status: Confirmed**

- `33dabbef4602bf57abba0c673ad44b7be0a5e029` — `fix build config`
- Next.js `next.config.ts`와 `package.json` build configuration 변경

Drive development log의 2026-01-14~15 architecture pivot 직후 실제 custom web codebase가 존재했음을 corroborate한다.

---

## 5. Git Cross-Check — Commit History

Git history는 기능과 business-rule surface가 시간에 따라 증가한 것을 직접 보여준다.

| Date | Commit | Evidence |
| --- | --- | --- |
| 2026-01-16 KST | `33dabbef4602bf57abba0c673ad44b7be0a5e029` | Next.js build configuration; custom web codebase existence Confirmed |
| 2026-01-23 | `0d738ddcd95e310585cee75b065a18c7f3bfdb6f` | History / Inbound / Supabase implementation presence Confirmed; `v2` meaning unresolved |
| 2026-01-27 | `91e3391ccbef461d6fa24cd43d0ba3737872cbce` | inbound tuning |
| 2026-01-30 | `49789c86d5225f7d09b7d8fab0c7375079ef5167` | mobile mode |
| 2026-02-03 | `a0e462029cedc030bf84043daf04aacd01cff352` | transaction taxonomy expansion |
| 2026-02-05 | `b146fef06f63d75b3034ea2c86991bd1b3c45ef6` | transaction taxonomy expansion |
| 2026-02-09 | `7df0c6c637c126f9ce80895bf9e9c0caa12ae045` | login function |
| 2026-02-12 | `d55bd9ffb17f76c1fe148185aa0c29fc4e321f0a` | QR function test |
| 2026-02-15 | `016f817ea1bf51137285ffae1e10682cd02f86dc` | inventory adjustment |
| 2026-02-20 | `0a809f96c8b3c186a6ec84177a0b00b64bf165c3` / `d4a9e84ef5fe0c05d5fd3b6135f98dad82d52213` | bulk inbound / outbound |
| 2026-03-19 | `5af56a596f446895c26d6f6bf279ffce8d0768f8` | partial/full/merge movement + packing-information preservation |

`2026-01-23`의 `v2 updated` commit title을 공식 WMS Version 2 milestone과 동일시하지 않는다. 현재 Drive chronology의 **2026-02-12 V1 operational baseline → 이후 V2 evolution**은 commit title 하나만으로 변경하지 않는다.

---

## 6. Git Cross-Check — Current Source

**Evidence Status: Confirmed**

현재 source에서 다음 architecture와 operational surface가 확인되었다.

- Next.js / React / TypeScript / Supabase architecture
- QR scanning libraries
- `constants/transaction.ts`의 transaction taxonomy
- `AuthProvider` 기반 role / feature permission model
- location / LOT / packing / business rules를 포함한 inbound workflow
- packing-aware partial / full / merge handling을 포함한 movement workflow

현재 source는 현재 상태의 evidence이며 과거 특정 milestone 화면이나 behavior 전체를 소급 증명하지 않는다.

---

## 7. Development Approach — Working Characterization

현재 working characterization:

> **Domain-Grounded Incremental AI Development**

또는:

> **AI-assisted implementation within a deeply understood operational domain.**

이 명칭은 formal Method가 아니다.

관찰되는 흐름:

```text
Domain Understanding
→ One Feature
→ AI-Assisted Implementation
→ Run
→ Human Verification
→ Correction
→ Next Feature
```

> **Complexity accumulated through verified increments.**

이 working observation은 이제 Git history에 의해 **Strongly Supported**된다. 1월 중순 custom web codebase 이후 inbound, mobile, transaction taxonomy, login, QR, adjustment, bulk I/O, movement sophistication이 별도 increments로 시간에 따라 나타난다.

그러나 Git history만으로 각 increment에서 AI가 정확히 어느 범위까지 관여했는지는 증명할 수 없다. AI / Development Log와의 cross-check가 계속 필요하다.

Generic vibe coding과 완전히 다른 formal category라고 주장하지 않는다. 현재 evidence가 지지하는 수준은 large one-shot generation보다 incremental implementation + verification이 강했다는 관찰이다.

---

## 8. Operational Chronology

### 2026-02-12 — V1 Operational Baseline

**Evidence Status: Supported; partially Git-corroborated**

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

현장 pilot 가능한 operational baseline이 확보된 milestone으로 취급한다.

### 2026-02 ~ 2026-03 — V2 Evolution

**Evidence Status: Supported; increasingly Git-corroborated**

운영 적합성 중심 evolution:

- QR scanner
- inventory adjustment
- shuttle rack mapping
- password reset
- bulk inbound / outbound
- rack card
- operational UX improvements

### 2026-03 — V2.5 Direction

**Evidence Status: Supported as direction**

- dashboard
- KPI
- traceability
- Excel export
- safety-stock / expiry alerts
- location optimization

각 항목의 implementation status는 동일하다고 단정하지 않는다.

---

## 9. Visual / Operational Evidence Registry

현재 아래 이미지는 **PRIVATE ORIGINAL EVIDENCE**로 취급한다. 이번 작업에서는 이미지 파일을 public MILES repository에 올리지 않는다.

### VE-01 — Production Deployment

**Evidence Status: Confirmed by visual evidence**

- production deployment dashboard 존재
- main-branch based deployment evidence 존재
- production/private URL 및 account identifier는 public publication에서 제외

### VE-02 — Authenticated Operational Application

**Evidence Status: Confirmed**

로그인된 운영 application에서 다음 navigation surface가 확인된다.

- inventory
- location
- inbound
- outbound
- history
- QR

### VE-03 — Multi-user Operation

**Evidence Status: Confirmed**

- 복수 사용자 계정 존재
- role assignment 존재
- 실명, 이메일, account ID는 public MILES에 기록하지 않음

### VE-04 — Role-based Feature Control

**Evidence Status: Confirmed**

WORKER / MANAGER 등 role에 따라 feature access가 구분된다.

예시 capability boundary:

- inventory
- inbound
- outbound
- master
- adjustment
- user-control

### VE-05 — Operational Transaction History

**Evidence Status: Confirmed**

- 실제 날짜가 존재하는 복수 transaction record 확인
- movement / issue / adjustment 등 transaction taxonomy 확인
- item / LOT / location / operator / quantity는 public에서 일반화 또는 제외

### VE-06 — Live Warehouse Map

**Evidence Status: Confirmed**

- physical rack / zone 구조를 digital map으로 표현
- occupancy visualization 존재

### VE-07 — Freezer / Container Storage Model

**Evidence Status: Confirmed for current system**

- standard rack 외 별도 storage topology 표현
- capacity / occupancy 및 pallet-like representation 존재
- 실제 container ID, capacity value, item data는 공개하지 않음

### VE-08 — Stocktake Print Workflow

**Evidence Status: Confirmed**

```text
Digital Inventory
→ Stocktake Sheet
→ Physical Verification
→ Adjustment / Reconciliation
```

physical verification을 digital inventory와 연결하는 print/reconciliation workflow가 존재한다.

### VE-09 — Location Master / Builder

**Evidence Status: Confirmed**

- location이 managed master data로 운영됨
- zone / rack / level / side와 같은 구조적 location modeling 존재
- exact coding scheme은 공개하지 않음

### VE-10 — Rack Card / QR Bulk Output

**Evidence Status: Confirmed for current system; lineage Needs Further Verification**

```text
Digital Location Identity
→ QR / Rack Card
→ Physical Rack
```

현재 시스템에 rack-card bulk generation이 실제 존재하는 것은 Confirmed다.

다만 2025 initial concept부터 현재 구현까지의 **exact commit lineage**는 추가 검증 대상이다.

QR payload와 exact location code는 공개하지 않는다.

### VE-11 — Rack Occupancy / Mixed-stock View

**Evidence Status: Confirmed**

- location-level inventory visibility
- mixed-stock state visualization

### VE-12 — Side-2 Operator-view Mirroring

**Evidence Status: Confirmed**

```text
Database Coordinate
→ Physical Rack Geometry
→ Operator Viewpoint
→ Mirrored UI
```

작업자 시점에 맞추어 Side 2의 좌우 배열을 반전시키는 **domain-specific UI decision**이 존재한다.

### VE-13 — Deep-lane / Alternate Storage Topology

**Evidence Status: Confirmed for current system**

- standard rack과 다른 physical storage topology 표현
- 하나의 location abstraction 안에서 heterogeneous storage model 지원

이 evidence는 WMS가 단일 rack geometry만 다루는 시스템이 아니라 서로 다른 physical storage topology를 managed digital model 안에 표현하도록 진화했음을 보여준다.

---

## 10. Promotion Evidence Summary

### Confirmed

- implemented operational system
- production deployment by visual evidence
- authenticated application
- operational transaction history
- multi-user / role operation
- role / feature permission model
- current Next.js / React / TypeScript / Supabase architecture
- QR interaction capability
- physical-digital location model
- live warehouse map / occupancy visualization
- rack-card / QR bulk output capability in current system
- heterogeneous storage topology support in current system
- packing-aware partial/full/merge movement logic
- incremental Git evolution

### Strongly Supported

- AppSheet/data-model concept에서 custom web architecture로의 pivot
- `Complexity accumulated through verified increments.`
- operational fit이 evolution의 중요한 판단 기준이었다는 해석

### Supported

- originating field problem
- initial AppSheet / Dual QR hypothesis
- 2025-11-18 initial data model
- 2026-02-12 V1 operational baseline chronology
- 이후 V2 operational-fit evolution과 V2.5 direction

### Needs Further Verification

- 최초 AppSheet prototype의 actual field pilot 여부
- AppSheet → Web 전환의 exact trigger sequence
- `2026-01-23 v2 updated`의 `v2` 의미
- 각 major version의 exact official boundary
- rack-card concept에서 current implementation까지 exact commit lineage
- user feedback / adoption evidence의 chronology
- current code와 초기 design 사이에서 유지·변경된 business rule
- AI involvement의 exact scope

### Not Yet Established / Not Yet Measured

- measured ROI
- measured time saving
- measured inventory accuracy improvement
- measured search-time reduction
- measured labor reduction
- 기타 quantitative business impact

정량 evidence가 확보되기 전에는 수치를 만들거나 효과를 확정적으로 주장하지 않는다.

---

## 11. Claim Boundary

현재 WMS에 대해 다음을 주장하지 않는다.

- Docs as Code / Feature as Code / Git as Action의 직접 전신
- Abstraction Lift의 대표 사례
- AppSheet 실패 사례
- 모든 feature가 동일한 AI workflow로 만들어짐
- generic vibe coding과 완전히 별개인 formal methodology
- V1 / V2 / V2.5 전체가 이미 정량 검증됨
- current screenshots가 과거 특정 milestone 상태까지 증명함
- measured ROI / time-saving이 이미 입증됨
- `2026-01-23 v2 updated`가 공식 WMS Version 2 milestone임

`Domain-Grounded Incremental AI Development`는 working characterization일 뿐이며 `METHODS`로 승격하지 않는다.

---

## 12. Evidence Sources

### Drive Initial Design

- 초기 WMS 기획
- AppSheet / Dual QR concept
- 초기 DB / operating model

### AI / Development Log

- 기술전환 기록
- 구현 / 검증 과정
- AI involvement 범위
- business rule evolution

### Git Repository / Current Source

- current architecture
- business rules
- current features

### Git Commit History

- feature introduction
- refactoring
- operational evolution

### Private Original Visual Evidence

- deployment
- authenticated application
- multi-user / permission surfaces
- transaction history
- digital warehouse maps
- rack-card / QR output
- alternate storage topology

Visual evidence는 public publication 전 별도 sanitization이 필요하다.

---

## 13. Public / Security Boundary

MILES는 public repository다. `security/REDACTION_POLICY.md`를 따른다.

다음 정보는 Generalize 또는 Exclude한다.

- company-specific operational identifiers
- names / emails / account IDs / contact data
- internal location codes
- exact rack coding schemes
- confidential item / LOT identifiers
- exact quantities 또는 sensitive inventory figures
- QR payloads
- production/private URLs
- infrastructure / project identifiers
- credentials
- exact facility identifiers
- private database identifiers

현재 visual evidence는 모두 **PRIVATE ORIGINAL EVIDENCE**로 유지하며 이번 commit에서 image file을 추가하지 않는다.

Canonical FORGE publication에 visual을 추가하기 전에는 별도의 sanitization review를 수행한다.

---

## 14. Open Questions

- 최초 AppSheet prototype이 실제 현장 pilot까지 갔는가?
- AppSheet → Web 전환의 정확한 trigger sequence는 무엇인가?
- 최초 production/pilot deployment date의 canonical evidence는 무엇인가?
- 각 major version의 실제 사용 범위는 어디까지였는가?
- 사용자 feedback과 adoption evidence는 무엇이 남아 있는가?
- quantitative outcome 중 public하게 공개 가능한 evidence가 있는가?
- current code와 초기 design 사이에서 유지된 business rule은 무엇인가?
- 어떤 초기 assumptions가 폐기되거나 변경되었는가?
- AI involvement의 정확한 범위를 development log와 Git evolution 사이에서 어디까지 corroborate할 수 있는가?
- **2026-01-23 `v2 updated` commit의 `v2`가 공식 WMS Version 2를 의미하는가, 아니면 local implementation revision인가?**
- rack-card / QR current implementation을 2025 initial concept까지 연결하는 exact commit lineage는 무엇인가?

답을 추정해서 작성하지 않는다.

---

## Promotion Result / Next Step

**FORGE Promotion Gate — PASS.**

WMS는 이제 첫 canonical FORGE Case v0.1을 작성할 수 있는 evidence threshold를 충족한다.

승격의 근거는 measured ROI가 아니라 다음의 결합이다.

```text
Originating Problem
+ Implemented System
+ Production Deployment
+ Operational Transactions
+ Multi-user / Permission Operation
+ Physical ↔ Digital Model
+ Git Evolution Evidence
+ Explicit Claim / Publication Boundaries
```

canonical artifact는 `forge/WMS-001/README.md`에서 관리하고, 이 Research Note는 chronology와 evidence provenance, unresolved questions를 유지하는 BRIDGE evidence note로 남긴다.
