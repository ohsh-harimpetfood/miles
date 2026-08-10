# Narrative Interface — Portfolio Frontend Contract

**Status:** Working Design Contract  
**Scope:** MILES Portfolio / narrative-driven frontend

## 1. Core Goal

MILES Portfolio의 frontend는 단순한 project gallery가 아니다.

핵심 목표:

> **AI narrative를 극한까지 끌어올려 실제 interface로 구현한다.**

AI는 사실을 만들어내지 않는다.

이미 존재하는:

- career history
- project evidence
- architecture
- business rules
- measurements
- research / methods

를 독자의 맥락에 맞는 narrative와 information hierarchy로 재구성한다.

Working concept:

> **AI as Narrative Compiler**

Flow:

```text
MILES Repository
+ Evidence
+ Career History
+ Projects
+ Methods / Research
+ Audience Context
        ↓
   Narrative Compiler
        ↓
Narrative Structure
Information Hierarchy
Presentation
Interaction
```

## 2. Portfolio Narrative Backbone

기본 구조:

```text
WHO
나는 누구인가
        ↓
WHAT
어떤 문제를 다뤄왔는가
        ↓
HOW
어떤 방식으로 해결하는가
        ↓
PROOF
실제로 무엇으로 증명할 수 있는가
        ↓
EVOLUTION
어디에서 출발해 어디로 가고 있는가
```

Project-first가 아니라 WHO-first.

Project는 identity의 출발점이 아니라 PROOF다.

## 3. Working Identity

현재 working identity:

> **현실의 운영 문제를 시스템으로 바꾸는 사람.**

설명:

제조 현장에서 문제를 발견하고,
프로세스·데이터·소프트웨어를 연결해
실제 운영 가능한 시스템으로 구현한다.

## 4. Narrative Before Navigation

메뉴보다 narrative가 먼저다.

```text
Narrative
→ Question
→ Context
→ Decision
→ Evidence
→ Next Insight
```

Navigation은 narrative를 보조한다.

## 5. Evidence Beneath Narrative

모든 강한 claim 아래에는 evidence path가 존재해야 한다.

```text
Narrative
    ↓
Claim
    ↓
Evidence
    ↓
Source / Commit / Measurement
```

다음을 명확히 구분:

- Sanitized Evidence
- Public Visual Derivative
- Measured Evidence
- Working Hypothesis
- Research Note

Visual polish 또는 AI narrative가 evidence classification을 바꾸면 안 된다.

## 6. Adaptive Presentation, Stable Truth

Core principle:

> **One truth, multiple narratives.**

변경 가능:

- narrative emphasis
- information hierarchy
- typography
- color / surface
- spacing density
- card / section treatment
- image framing
- motion
- selected evidence emphasis

변경 불가:

- career facts
- project facts
- chronology
- architecture decisions
- evidence classification
- measurements
- claim boundaries
- Git-backed source state

## 7. Audience Narrative Lenses

### Executive

Emphasis:

- business problem
- operational impact
- transformation
- governance
- leadership / decision

### Engineer

Emphasis:

- architecture
- implementation decisions
- system boundaries
- evidence
- verification

### Manufacturer

Emphasis:

- field problem
- physical workflow
- operator interaction
- process rules
- physical ↔ digital mapping

### AI Builder

Emphasis:

- domain grounding
- AI-assisted implementation
- context minimization
- Git as durable memory
- validation loop

Lens는 source truth를 바꾸지 않고
읽는 순서와 강조만 변경한다.

## 8. Project Narrative Pattern

Flagship case 권장 구조:

```text
Field Problem
→ Why It Mattered
→ First Executable Hypothesis
→ Failure / Constraint
→ Architecture Pivot
→ Implemented System
→ Operational Evidence
→ Measured Result or Claim Boundary
→ What Changed Next
```

WMS example:

```text
Manual Rack Card
→ Location Mismatch
→ Search Friction
→ AppSheet Hypothesis
→ Operational Limits
→ Next.js + Supabase Pivot
→ Physical ↔ Digital Warehouse
→ Public Evidence
→ Measured Impact: Not Yet Established
```

## 9. Frontend as Proof

Portfolio가 “AI를 잘 활용한다”라고 주장하는 것이 아니라
interface 자체가 그것을 보여줘야 한다.

Possible interaction:

- audience lens change
- visual theme change
- evidence drill-down
- narrative reordering
- claim → source trace
- chronology exploration

Frontend 자체가 PROOF가 되어야 한다.

## 10. Anti-Patterns

Avoid:

- project list first
- technology logo wall
- generic AI gradient
- excessive KPI card grid
- decorative motion without information purpose
- evidence보다 강한 marketing copy
- audience별 fact 변경
- generated image를 raw evidence처럼 사용
- 모든 project를 같은 depth로 설명

## 11. v0.1 Boundary

Portfolio v0.1:

1. WHO → WHAT → HOW → PROOF → EVOLUTION shell
2. WMS first flagship proof
3. 2–3 audience / visual theme profiles
4. theme persistence
5. evidence classification visible
6. responsive desktop/mobile narrative

Not v0.1:

- dynamic LLM runtime generation
- visitor profiling
- automatic Git rendering pipeline
- advanced motion choreography
- fully personalized narrative generation

## 12. Working Position

> **MILES Portfolio는 한 사람의 실제 경험과 증거를 narrative interface로 컴파일하는 시스템을 목표로 한다.**

Narrative는 강하게 만들되,
truth와 evidence는 더 강하게 고정한다.
