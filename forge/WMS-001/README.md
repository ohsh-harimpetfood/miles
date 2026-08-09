# WMS-001 — Operational Warehouse Management System

**Status:** Canonical FORGE Case v0.1 — evidence-backed; public visuals pending sanitization

## 1. Case Summary

WMS-001은 수동 랙 창고에서 발생한 위치·품목 불일치, 재고 탐색 비효율, rack-card 의존, physical/system inventory reconciliation 부담을 해결하기 위해 시작된 operational warehouse management system 사례다.

첫 실행 가능한 가설은 Location QR, Item QR, AppSheet, Google Sheets, PC lookup의 조합이었다. 이후 실제 요구 범위가 커지면서 UX, performance, deployment flexibility, extensibility 한계가 드러났고 custom web architecture로 전환했다.

현재 시스템은 Next.js / React / TypeScript / Supabase(PostgreSQL) 기반의 deployed multi-user operational application으로 발전했으며, authentication / authorization, inventory/location workflows, transaction history, QR interaction, physical-digital mapping을 포함한다.

이 Case는 기능 수보다 **현장 문제 → architecture decision → operating model → evolution evidence**를 중심으로 기록한다.

---

## 2. Ground Truth

**Evidence Status: Supported**

초기 현업 문제는 다음과 같이 일반화할 수 있다.

- manual rack-card dependency
- physical location / item mismatch
- inventory search friction
- physical inventory와 system inventory reconciliation burden
- stock count / closing 시 추가 검증 부담

회사명, 시설명, 실제 item code, exact location code, 운영 수치와 같은 식별 가능 정보는 public MILES에 포함하지 않는다.

---

## 3. First Executable Hypothesis

초기 executable hypothesis:

```text
Location QR
+ Item QR
+ AppSheet
+ Google Sheets
+ PC Lookup
```

> **AppSheet was the first executable hypothesis.**

AppSheet phase는 실패한 기술 사례가 아니라 다음을 빠르게 검증한 초기 실행 단계였다.

- field concept validation
- QR workflow concretization
- data-model validation
- operational interaction discovery

Google Sheets는 초기 Single Source of Truth로 설계되었고, PC lookup 화면은 현장에서 빠르게 위치와 재고를 조회하는 “library search terminal”과 유사한 역할로 구상되었다.

---

## 4. Initial Data Model

초기 engineering concept은 Location / Item / Transaction을 분리하는 구조였다.

```text
Location
Item
Transaction
```

당시 설계 명칭으로는 다음이 존재했다.

- `LOC_MASTER`
- `ITEM_MASTER`
- `STOCK_TX`

또한 `LOC_ID`, `ITEM_KEY`, `ITEM_DIFF` / ERP comparison과 같은 identifier 및 reconciliation concept이 사용되었다.

이 명칭들은 초기 architecture intent를 설명하기 위한 evidence 수준에서만 사용하며, public Case에서는 실제 내부 coding scheme이나 company-specific identifier를 공개하지 않는다.

---

## 5. Architecture Pivot

**Evidence Status: Strongly Supported**

2026-01 중순, 초기 AppSheet/data-model concept은 custom web WMS architecture로 전환되었다.

```text
AppSheet
→ Next.js
→ Supabase / PostgreSQL
→ Git
→ Vercel
```

주요 trade-off는 다음과 같았다.

- UX control
- performance
- deployment flexibility
- extensibility

이 전환은 WMS의 최초 시작이 아니라, 이미 존재하던 field problem / data model / executable hypothesis를 더 확장 가능한 실서비스형 architecture로 옮긴 시점이다.

2026-01-16 KST의 Git commit `33dabbef4602bf57abba0c673ad44b7be0a5e029`은 architecture pivot 직후 실제 Next.js custom web codebase가 존재했음을 corroborate한다.

production URL, Supabase project identifier, private endpoint 등 실제 운영환경 식별자는 공개하지 않는다.

---

## 6. Current Architecture

**Evidence Status: Confirmed**

현재 source evidence에서 확인되는 주요 architecture:

- Next.js
- React
- TypeScript
- Supabase / PostgreSQL
- authentication / authorization
- role / feature permission
- transaction history
- QR interaction
- responsive / mobile operation

현재 source는 현재 구현 상태의 evidence이며, 과거 특정 milestone의 전체 상태를 소급해서 증명하지는 않는다.

---

## 7. Operational Model

현재 운영 흐름은 개념적으로 다음과 같이 연결된다.

```text
Inbound
→ Inventory
→ Movement
→ Outbound
→ Transaction History
```

이 흐름 주변에 다음 operational capability가 연결된다.

- inventory adjustment
- stocktake / reconciliation
- master data
- authentication / authorization
- role / feature permission
- location model
- QR interaction

current source에서는 inbound workflow에 location / LOT / packing / business rules가 포함되고, movement workflow에는 packing-aware partial / full / merge handling이 존재한다.

---

## 8. Physical ↔ Digital Model

WMS-001의 핵심 architecture 중 하나는 physical warehouse와 digital inventory model을 연결하는 것이다.

```text
Physical Location
→ Managed Location Identity
→ QR / Rack Card
→ Transaction
→ Inventory
→ Digital Map
```

이 구조를 통해 physical rack / zone / alternate storage topology가 단순 자유 텍스트가 아니라 managed location model로 다뤄진다.

확인된 현재 capability:

- location master / builder
- rack / zone / level / side 구조 표현
- QR / rack-card bulk output
- warehouse map
- occupancy visualization
- mixed-stock location view
- standard rack 외 alternate storage topology 지원

actual location code, rack code, QR payload는 public MILES에 포함하지 않는다.

---

## 9. Evolution

현재 evidence에 따른 chronology는 다음과 같다.

```text
2025-11
Initial field problem / data model
→
2026-01
Architecture pivot to custom web WMS
→
2026-02-12
V1 operational baseline
→
2026-02~03
V2 operational-fit evolution
→
2026-03
V2.5 management / control direction
```

### 2025-11 — Initial Field / Data Model

Location / Item / Transaction 구조와 QR/AppSheet/Sheets 기반 첫 executable hypothesis가 형성되었다.

### 2026-01 — Architecture Pivot

AppSheet-era concept에서 Next.js / Supabase(PostgreSQL) / Git / Vercel 구조로 이동했다.

### 2026-02-12 — V1 Operational Baseline

현재 chronology에서는 inbound, inventory movement, outbound, master data, location model, transaction history, authentication / authorization, permission control, UAT를 포함한 operational baseline milestone으로 취급한다.

### 2026-02 ~ 2026-03 — V2 Operational-Fit Evolution

Git history와 current source에서 inventory adjustment, bulk inbound/outbound, QR, mobile operation, transaction taxonomy, movement sophistication 등이 확인된다.

### 2026-03 — V2.5 Direction

management / analysis / control capability로 다음 방향이 검토되었다.

- dashboard
- KPI
- traceability
- Excel export
- safety-stock / expiry alerts
- location optimization

`2026-01-23` commit title의 `v2 updated`는 공식 Version 2 milestone으로 단정하지 않는다. 공식 version boundary가 불확실한 부분은 chronology evidence를 추가 확인한다.

---

## 10. Operational Evidence

| Evidence | Status |
| --- | --- |
| Built | ✅ Confirmed |
| Deployed | ✅ Confirmed by visual evidence |
| Operational transactions | ✅ Confirmed |
| Multi-user / role operation | ✅ Confirmed |
| Role / feature permission | ✅ Confirmed |
| Physical-digital mapping | ✅ Confirmed |
| Rack-card / QR output | ✅ Confirmed for current system |
| Storage-model expansion | ✅ Confirmed for current system |
| Measured impact | **Not Yet Established** |

FORGE 승격은 measured ROI가 없다는 이유로 차단하지 않는다. 이 Case는 implemented / deployed / operational system이라는 evidence를 기준으로 canonical FORGE artifact가 되었다.

---

## 11. Engineering Decisions

### AppSheet as Executable Hypothesis

AppSheet는 field workflow와 data model을 빠르게 시험하기 위한 첫 executable hypothesis였다.

### Relational Architecture Pivot

요구 범위 증가에 따라 custom web application과 Supabase/PostgreSQL 중심 architecture로 전환했다.

### Explicit Transaction Taxonomy

transaction type을 application logic에서 명시적으로 관리하는 taxonomy가 현재 source에 존재한다.

### Role / Feature Permission

`AuthProvider` 기반의 role / feature permission model로 사용자 역할에 따라 기능 접근을 구분한다.

### Packing-aware Movement

inventory movement는 단순 location transfer가 아니라 partial / full / merge movement와 packing-information preservation을 다룬다.

### Stocktake Print Workflow

```text
Digital Inventory
→ Stocktake Sheet
→ Physical Verification
→ Adjustment / Reconciliation
```

physical verification과 digital inventory를 연결하는 reconciliation workflow를 제공한다.

### Rack-card / QR Physical Interface

```text
Digital Location Identity
→ QR / Rack Card
→ Physical Rack
```

managed digital location identity를 실제 physical rack interface와 연결한다.

### Operator-view Side-2 Mirroring

```text
Database Coordinate
→ Physical Rack Geometry
→ Operator Viewpoint
→ Mirrored UI
```

Side 2의 좌우 배열을 작업자 관점에서 반전하는 domain-specific UI decision이 존재한다.

### Heterogeneous Storage Topology Modeling

standard rack뿐 아니라 freezer / container / deep-lane 등 다른 physical topology를 하나의 location abstraction 안에서 표현하도록 진화했다.

---

## 12. Development Approach

현재 working observation:

> **Complexity accumulated through verified increments.**

Git history는 custom web codebase 이후 inbound, mobile mode, transaction taxonomy, login, QR, adjustment, bulk I/O, movement sophistication이 시간에 따라 별도 increments로 추가된 것을 보여준다.

따라서 이 문장은 현재 **Strongly Supported working observation**이다.

현재 working characterization은 다음과 같다.

> **Domain-Grounded Incremental AI Development**

다만 이는 아직 formal methodology가 아니다. Git history alone으로 AI involvement의 exact scope를 증명할 수 없으므로 AI / Development Log cross-check가 계속 필요하다.

---

## 13. Impact

### Observed

현재 evidence로 관찰 가능한 변화:

- manual lookup 중심에서 system-based location lookup으로 이동
- location / transaction / permission을 하나의 operating system 안에 연결
- physical warehouse structure가 managed digital model로 전환
- operational history가 system record로 축적

### Measured

현재 public canonical Case에 포함할 수 있는 검증된 quantitative measurement는 없다.

### Not Yet Measured

- ROI
- time saving
- inventory accuracy improvement
- search-time reduction
- labor reduction
- 기타 quantitative business impact

숫자를 추정하거나 만들어내지 않는다.

---

## 14. Visual Evidence Plan

현재 visual evidence는 모두 **PRIVATE ORIGINAL EVIDENCE**다.

public MILES에는 sanitization 후 **6~8장** 정도의 핵심 visual만 선별해 추가하는 방향을 계획한다.

후보:

- initial concept
- rack-card QR output
- live warehouse map
- transaction history
- role / permission
- Side-2 mirroring 또는 deep-lane view
- freezer / container expansion
- production deployment

이번 v0.1 commit에서는 image file을 추가하지 않는다.

---

## 15. Evidence Boundary

### Confirmed

- implemented system
- production deployment by visual evidence
- authenticated application
- operational transaction history
- multi-user / role operation
- role / feature permission
- physical-digital location model
- rack-card / QR output capability in current system
- heterogeneous storage topology support in current system
- incremental Git evolution
- current Next.js / React / TypeScript / Supabase architecture
- packing-aware movement logic

### Strongly Supported

- architecture pivot
- `Complexity accumulated through verified increments.`
- operational fit as a major driver of later evolution

### Supported

- originating field problem
- initial AppSheet / Dual QR hypothesis
- 2025-11 initial data model
- 2026-02-12 V1 operational baseline chronology
- V2 operational-fit evolution
- V2.5 direction

### Needs Further Verification

- first AppSheet field-pilot extent
- exact AppSheet → Web trigger sequence
- official version boundaries
- `2026-01-23 v2 updated` naming meaning
- exact rack-card commit lineage from initial concept to current implementation
- user adoption / feedback chronology
- AI involvement exact scope
- quantitative outcome evidence suitable for public release

---

## 16. Publication Boundary

이 Case는 `security/REDACTION_POLICY.md`를 따른다.

public artifact에서 다음을 제외하거나 일반화한다.

- names
- emails
- account IDs
- private URLs
- production endpoints
- infrastructure / project identifiers
- exact facility identifiers
- exact locations
- rack/location coding schemes
- QR payloads
- item identifiers
- LOT identifiers
- operator identities
- exact quantities / sensitive inventory figures
- credentials

Visual evidence를 추가할 때도 동일한 기준을 적용한다.

---

## Claim Boundary

WMS-001은 다음을 주장하지 않는다.

- Docs as Code / Feature as Code / Git as Action의 직접 전신
- Abstraction Lift의 대표 사례
- AppSheet 실패 사례
- 모든 feature가 동일한 AI workflow로 만들어짐
- generic vibe coding과 완전히 별개인 formal methodology
- V1 / V2 / V2.5 전체가 이미 정량 검증됨
- current screenshots가 과거 특정 milestone 상태까지 증명함
- measured ROI / time-saving이 이미 입증됨

이 Case는 **implemented and operational system with evidence-backed evolution**을 기록하는 FORGE artifact다.
