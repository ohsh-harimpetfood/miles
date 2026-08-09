# WMS Case — Working Research Note

**Status:** Working Research Note  
**Case Track:** FORGE-001 — WMS  
**Current Phase:** Evidence reconstruction / case planning  
**Artifact Class:** BRIDGE research note, not yet a formal FORGE Case

이 문서는 WMS 프로젝트의 실제 chronology와 evidence를 재구성하기 위한 working note다. 아직 `forge/WMS-001/` 정식 Case를 작성하지 않으며, 현재 확인된 사실과 추가 검증이 필요한 사항을 분리해 기록한다.

WMS는 **Docs as Code, Feature as Code, Git as Action의 직접적인 전신으로 해석하지 않는다.** 이 프로젝트는 독립적인 현업 소프트웨어 프로젝트이며, 이후 MILES의 다른 working hypothesis와 비교·연결할 수는 있지만 chronology 자체를 후대의 개념에 맞춰 재해석하지 않는다.

---

## 1. Originating Operational Problem — 2025-11

WMS 프로젝트는 2025년 11월, 수동 랙 창고의 실제 운영 문제에서 시작했다.

현재 확인된 문제 정의:

- 위치와 품목 정보의 불일치
- 수기 랙 카드에 의존하는 운영
- 재고 위치를 찾는 데 발생하는 탐색 비효율
- 현장 상태와 기록 사이의 불일치 가능성

이 단계의 출발점은 새로운 소프트웨어 기술을 도입하는 것 자체가 아니라, **“무엇이 어디에 있는지 신뢰할 수 있고 빠르게 확인할 수 있어야 한다”**는 운영 문제였다.

public MILES에서는 실제 창고명, 시설 식별자, 구체적인 위치 코드, 운영 수량과 같은 내부 정보는 일반화한다.

---

## 2. Initial Solution Hypothesis

최초 솔루션 가설은 다음 조합이었다.

```text
Dual QR
+ AppSheet
+ Google Sheets
```

핵심 아이디어는 물리적 위치와 품목을 QR로 연결하고, 모바일 현장 입력을 low-code interface로 처리하며, 초기 데이터 상태를 Google Sheets에서 관리하는 것이었다.

이 시점의 구조는 완성된 WMS architecture가 아니라 현장 문제를 빠르게 다루기 위한 초기 solution hypothesis로 취급한다.

---

## 3. 2025-11-18 — Initial Data Structure

2025-11-18에는 다음 3계층 데이터 구조와 식별자 설계가 정리된 것으로 현재 확인된다.

```text
LOC_MASTER
ITEM_MASTER
STOCK_TX
```

주요 identifier:

- `LOC_ID`
- `ITEM_KEY`

현재 해석:

- `LOC_MASTER` — 위치 기준정보
- `ITEM_MASTER` — 품목 기준정보
- `STOCK_TX` — 재고 이동 또는 상태 변경을 기록하는 transaction layer

이 구조는 이후 구현의 출발점이 된 초기 data model로 취급한다.

실제 schema의 세부 column, 내부 location coding, 품목 identifier 규칙 등은 public Case 작성 전에 별도 sanitization과 evidence 확인이 필요하다.

---

## 4. Initial Operating Architecture

초기 설계에서 각 도구의 역할은 다음과 같이 나뉘었다.

### AppSheet

당시 모바일 현장 입력 채널로 설계되었다.

### Google Sheets

초기 **Source of Truth** 역할을 담당하도록 설계되었다.

### PC

현장에서 직접 transaction을 입력하는 주 채널보다 재고와 위치를 빠르게 찾는 조회 인터페이스에 가까웠으며, 당시 표현으로는 **“도서관 검색기”** 역할을 지향했다.

이 구조는 당시 운영 제약과 빠른 구축 가능성을 기준으로 한 초기 architecture choice로 기록한다.

---

## 5. 2026-01-14~15 — Architecture Pivot

2026-01-14~15 무렵, AppSheet 기반 접근에서 다음과 같은 한계가 확인되면서 architecture pivot이 이루어진 것으로 현재 확인된다.

- UX 한계
- 성능 한계
- 배포 및 운영 제약
- 기능 확장성 한계

이후 중심 architecture는 다음 구조로 이동했다.

```text
Next.js
+ Supabase (PostgreSQL)
+ Git
+ Vercel
```

이 pivot은 단순한 기술 스택 변경이 아니라, 초기 low-code 구조가 실제 요구되는 사용자 경험과 기능 진화를 충분히 감당하기 어렵다는 판단에 따른 architecture change로 기록한다.

정식 Case 작성 시에는 어떤 limitation이 어떤 evidence로 확인되었고, 어느 시점에 어떤 decision으로 이어졌는지 AI production log와 Git history를 통해 더 정밀하게 재구성해야 한다.

---

## 6. Incremental AI-Assisted Development

architecture pivot 이후 WMS는 기능을 한 번에 크게 설계해 완성하는 방식보다, **기능을 하나씩 구현하고 직접 실행·검증한 뒤 다음 기능을 쌓는 incremental AI-assisted development 방식**으로 발전한 것으로 현재 정리된다.

현재 working observation:

> **Complexity accumulated through verified increments.**

한국어 의미:

> **복잡성은 검증된 작은 증가분들이 누적되면서 형성되었다.**

예상되는 반복 흐름은 다음과 같다.

```text
Operational Need
→ Define One Feature / Rule
→ Implement with AI Assistance
→ Run Directly
→ Observe
→ Verify / Correct
→ Keep the Working Increment
→ Add the Next Increment
```

이 문장은 현재 **working observation**이며, 모든 commit이 정확히 같은 방식으로 만들어졌다는 보편적 사실로 확정하지 않는다. 실제 Git commit history와 production log를 통해 반복 패턴을 확인해야 한다.

또한 WMS를 `Abstraction Lift`의 대표 사례라고 현재 주장하지 않는다. 향후 evidence가 충분하다면 비교 대상으로 분석할 수 있지만, WMS chronology 자체와 이후의 MILES research hypothesis를 혼동하지 않는다.

---

## 7. 2026-02-12 — V1 Operational Baseline

2026-02-12는 현재 WMS의 **V1 operational baseline**이 형성된 시점으로 기록한다.

이 시점은 최초 아이디어 완성을 의미하기보다, 실제 사용 가능한 기본 운영 흐름이 하나의 baseline으로 자리잡은 milestone으로 취급한다.

정식 Case에서는 다음을 추가 검증해야 한다.

- V1 baseline에 실제 포함된 기능 범위
- 당시 current code와 commit의 대응 관계
- 어떤 operational flow가 실제로 사용 가능했는지
- 알려진 limitation과 후속 개선 필요사항

---

## 8. 2026-02~03 — V2 Operational Fit Evolution

2026년 2~3월에는 단순 기능 추가보다 실제 운영 적합성을 높이는 방향으로 V2가 진화한 것으로 현재 확인된다.

주요 evolution area:

- QR workflow
- 재고보정
- 대량 입출고
- 랙 카드

이 단계의 핵심 관점은 “더 많은 feature”보다 **현장 업무가 실제로 돌아가는 방식과 소프트웨어를 더 잘 맞추는 것**이었다고 현재 정리한다.

정식 Case에서는 각 기능의 정확한 구현 날짜와 동기, 실제 business rule, 검증 방법을 commit history 및 AI production log에서 재구성해야 한다.

---

## 9. 2026-03 — V2.5 Direction

2026년 3월에는 WMS가 transaction execution 중심 기능에서 운영 가시성과 관리 판단까지 확장되는 V2.5 방향으로 발전한 것으로 현재 확인된다.

주요 방향:

- dashboard
- KPI
- traceability
- alert

이 항목들은 모두 동일한 완성도 또는 production status였다고 현재 단정하지 않는다. 정식 Case 전에 current code와 Git history를 통해 각각의 실제 구현 상태와 chronology를 분리해서 검증해야 한다.

---

## 10. Working Chronology

현재 확인된 chronology를 요약하면 다음과 같다.

| Period | Working Reconstruction |
| --- | --- |
| `2025-11` | 수동 랙 창고의 위치·품목 불일치, 수기 랙 카드, 재고 탐색 비효율에서 프로젝트 시작 |
| Initial hypothesis | Dual QR + AppSheet + Google Sheets |
| `2025-11-18` | `LOC_MASTER` / `ITEM_MASTER` / `STOCK_TX` 3계층 구조와 `LOC_ID` / `ITEM_KEY` 설계 |
| Initial architecture | AppSheet = 모바일 입력, Google Sheets = 초기 Source of Truth, PC = 조회용 “도서관 검색기” |
| `2026-01-14~15` | AppSheet UX/성능/배포/확장 한계 확인 후 Next.js + Supabase(PostgreSQL) + Git + Vercel로 pivot |
| After pivot | 기능 단위 구현 → 직접 실행·검증 → 다음 기능 추가의 incremental AI-assisted development 발전 |
| `2026-02-12` | V1 operational baseline |
| `2026-02~03` | QR, 재고보정, 대량 입출고, 랙 카드 중심의 V2 operational-fit evolution |
| `2026-03` | dashboard / KPI / traceability / alert 중심 V2.5 방향 |

이 표는 현재 evidence reconstruction을 위한 working chronology다. 정식 FORGE Case의 최종 chronology는 source별 cross-check 후 확정한다.

---

## 11. Evidence Sources

WMS Case reconstruction에는 최소 다음 네 종류의 evidence source를 구분한다.

### A. Drive Initial Design

초기 문제 정의, solution hypothesis, data model, architecture intent와 당시 설계 표현을 확인하는 자료.

검증 후보:

- 2025-11 초기 문제 정의
- Dual QR + AppSheet + Google Sheets 가설
- 2025-11-18 data structure
- AppSheet / Sheets / PC 역할 정의

### B. AI Production Log

실제 구현 과정에서 어떤 요구사항, 문제, 수정, 검증이 반복되었는지 확인하는 생산 기록.

검증 후보:

- architecture pivot을 유발한 구체적 limitation
- feature 단위 implementation chronology
- debugging / refinement 흐름
- 직접 실행·검증한 반복 패턴
- 당시 business rule의 진화

### C. Git Repository / Current Code

현재 실제로 존재하는 구현과 architecture를 확인하는 source.

검증 후보:

- 현재 기술 스택
- 현재 data model
- 실제 구현된 기능
- feature 간 관계
- 현재 operational logic

현재 코드는 **현재 상태의 evidence**이며, 그 자체만으로 과거 chronology 전체를 증명하지는 않는다.

### D. Git Commit History

구현이 언제, 어떤 단위로 진화했는지를 확인하는 chronology evidence.

검증 후보:

- architecture pivot 시점과 변경 범위
- V1 baseline의 실제 commit boundary
- V2 / V2.5 feature sequence
- feature-by-feature incremental pattern
- rework / correction / evolution sequence

commit history도 commit message만으로 해석하지 않고 필요하면 해당 diff와 current code를 함께 확인해야 한다.

---

## 12. Currently Established vs. Needs Further Verification

### Currently Established for This Working Note

현재 Research Note에서 작업 기준으로 사용할 수 있는 사실:

- 프로젝트는 2025-11 수동 랙 창고의 위치·품목 불일치, 수기 랙 카드, 탐색 비효율이라는 운영 문제에서 시작했다.
- 최초 solution hypothesis는 Dual QR + AppSheet + Google Sheets였다.
- 2025-11-18 `LOC_MASTER` / `ITEM_MASTER` / `STOCK_TX` 구조와 `LOC_ID` / `ITEM_KEY`가 설계되었다.
- AppSheet는 모바일 입력, Google Sheets는 초기 Source of Truth, PC는 조회 중심 interface로 설계되었다.
- 2026-01-14~15 AppSheet 기반 구조의 한계를 계기로 Next.js + Supabase(PostgreSQL) + Git + Vercel로 architecture pivot이 발생했다.
- 이후 기능 단위의 구현·실행·검증을 반복하는 incremental AI-assisted development 방식으로 발전했다.
- 2026-02-12 V1 operational baseline이 존재한다.
- 2026-02~03 V2는 QR, 재고보정, 대량 입출고, 랙 카드 등 operational fit 중심으로 진화했다.
- 2026-03에는 dashboard, KPI, traceability, alert의 V2.5 방향이 나타났다.

### Needs Further Verification Before Formal Case

정식 FORGE Case 전에 추가로 검증해야 할 사항:

- 각 milestone에 대응하는 정확한 Drive document 또는 log entry
- 2026-01 architecture pivot의 정확한 decision trail
- V1 baseline을 구성한 실제 feature set과 commit boundary
- V2와 V2.5 각 기능의 정확한 구현 chronology
- 현재 code와 과거 milestone 사이의 차이
- feature별 business rule과 변경 이유
- 실제 운영 적용 범위와 알려진 failure / limitation
- 어떤 increment가 직접 실행·검증되었는지에 대한 구체적 evidence
- measurable outcome이 있는 경우 공개 가능한 형태로 검증 가능한지 여부

정식 Case는 이 검증 결과를 바탕으로 사실, 해석, working observation을 분리해야 한다.

---

## 13. Public MILES / Sanitization Boundary

MILES는 public repository이므로 WMS 원자료를 그대로 옮기지 않는다.

`security/REDACTION_POLICY.md` 기준에 따라 다음 정보는 Generalize 또는 Exclude 대상으로 취급한다.

- 회사 내부 운영 수치
- 고객·협력사 정보
- 개인정보
- 실제 시설명 및 정확한 location identifier
- 상세 rack/location coding scheme
- 내부 QR payload
- private URL / endpoint / hostname
- database project / instance identifier
- 내부 repository/path 정보
- non-public schema detail 중 공격 표면 또는 내부 구조를 불필요하게 노출하는 내용

현재 Research Note에서는 chronology와 architecture 학습에 필요한 수준만 남기고 세부 운영 식별정보를 포함하지 않는다.

**정식 FORGE Case를 작성하기 전에는 Drive 자료, AI production log, Git evidence를 다시 검토해 추가 sanitization을 수행해야 한다.**

Redaction의 목표는 프로젝트의 엔지니어링 가치와 의사결정 구조를 보존하면서 실제 조직과 운영 환경을 재식별할 수 있는 정보를 제거하는 것이다.

---

## 14. Claim Discipline

현재 다음은 chronology reconstruction을 위한 working position이다.

> **Complexity accumulated through verified increments.**

이 문장은 WMS 개발 과정에서 관찰되는 패턴을 요약하는 working observation이며, Git history와 production log를 통한 추가 검증 전에는 정식 Method로 일반화하지 않는다.

또한 현재 WMS에 대해 다음을 주장하지 않는다.

- Docs as Code, Feature as Code, Git as Action의 직접적인 전신이다.
- Abstraction Lift의 대표 사례다.
- 모든 feature가 동일한 AI-assisted workflow로 구현되었다.
- 각 milestone의 효과가 정량적으로 검증되었다.
- 현재 code가 과거 모든 운영 상태를 그대로 반영한다.

WMS는 먼저 **독립적인 현업 소프트웨어 프로젝트**로 evidence와 chronology를 복원한다. 다른 MILES hypothesis와의 연결은 Case evidence가 정리된 이후 별도 분석 대상으로 다룬다.

---

## Next Research Step

다음 단계는 정식 FORGE Case 작성이 아니라 **WMS evidence reconstruction**이다.

권장 순서:

```text
Drive initial design
→ AI production log
→ Git commit history
→ current repository / code
→ chronology cross-check
→ sanitization review
→ evidence gaps
→ only then consider formal FORGE Case
```

`forge/WMS-001/`은 아직 생성하지 않는다.
