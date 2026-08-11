# PORTFOLIO-001 v2 — Expandable Portfolio System

**Status:** Structure Freeze Seed

PORTFOLIO-001 v2는 기존 root의 Narrative Portfolio Prototype을 즉시 대체하는 승격본이 아니다. 기존 v1 frontend는 그대로 유지하며, v2는 `workbench/PORTFOLIO-001/v2/` 아래 병렬 경로에서 expandable portfolio system의 구조적 기준을 먼저 고정한다.

```text
v1
Narrative Portfolio Prototype

v2
Expandable Portfolio System
```

## Visitor Depth Model

```text
PORTFOLIO
→ CASE STORY
→ SHOWCASE
→ CASE DOSSIER / EVIDENCE
```

- **L0 — PORTFOLIO:** 전체를 빠르게 이해하는 층
- **L1 — CASE STORY:** 문제를 왜 다뤘고 해결 구조가 어떻게 진화했는지 이해하는 층
- **L2 — SHOWCASE:** 실제로 무엇을 만들었는지 시각적으로 경험하는 층
- **L3 — CASE DOSSIER / EVIDENCE:** evidence, source, lineage, claim boundary, integrity까지 확인하는 층

모든 프로젝트가 L3까지 갈 필요는 없다. Project depth is progressive.

## Structural Principles

- Homepage는 project archive가 아니다.
- Selected Work는 소수의 대표 사례만 보여준다.
- 전체 사례는 Work Index에서 탐색한다.
- Deep-dive page는 URL-addressable해야 한다.
- Modal-only deep dive는 허용하지 않는다.
- Primary progression은 `Portfolio → Case Story → Showcase → Evidence`다.
- Expert visitor가 Case Story에서 Evidence로 직접 접근하는 것도 허용한다.
- Evidence는 global homepage section보다 각 Case의 deepest layer를 기본으로 한다.
- Work taxonomy와 page hierarchy는 분리한다.
- 새로운 case 추가가 homepage redesign을 요구하면 architecture regression으로 본다.

## Source-of-Truth Boundary

FORGE / MILES canonical state가 존재하는 case는 그 repository state가 source of truth다. Portfolio narrative는 canonical evidence classification, claim boundary, source lineage, integrity status를 임의로 변경하거나 확장하지 않는다.

## v1 Semantic Assets

v1의 의미 자산은 폐기하지 않는다. 향후 재사용 후보는 다음과 같다.

- WHO / WHAT / HOW / PROOF / EVOLUTION / IMPACT / METHOD semantic model
- Manufacturing capability SVG
- chapter / focus navigation concepts
- lens concept
- theme experiments
- WMS / COLD narrative work

Structure Freeze에서는 어떤 frontend implementation도 복사하거나 수정하지 않는다.

## Build Sequence

1. **Structure Freeze**
2. **Design Architecture**
3. **Portfolio Shell**
4. **WMS Deep Dive**
5. **COLD Deep Dive**
6. **Inventory Dashboard + Interview Deep Dive**
7. **Feature as Code**
8. **HTML Document Library**
9. **Additional cases**

현재 pass는 **1. Structure Freeze**까지만 수행한다.

## Root Promotion Boundary

v2는 현재 root portfolio를 자동 대체하지 않는다. Root 승격은 별도 promotion pass에서만 검토한다.

승격 전 최소 검토 대상:

- structure stability
- design consistency
- mobile usability
- deep-link behavior
- WMS / COLD / Inventory representative coverage
- evidence linkage
- no claim regression
- v1 archival preservation

## Structure Documents

- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — visitor hierarchy, routing, homepage, taxonomy, extensibility contract
- [`CASE_MODEL.md`](./CASE_MODEL.md) — case depth, narrative spine, showcase/evidence rules, working allocations
