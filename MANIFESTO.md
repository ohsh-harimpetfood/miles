# MILES Manifesto

**Manufacturing Intelligence Lab for Execution Systems**

MILES는 제조 현장에서 발생하는 문제를 관찰하고, 그 현실을 데이터와 증거로 해석하며, 의사결정을 실제 실행 시스템으로 연결하기 위해 존재합니다.

MILES의 목적은 더 많은 문서를 만드는 것이 아닙니다. 무엇이 실제로 일어났는지 남기고, 무엇을 배웠는지 구조화하며, 무엇을 만들었고 어떻게 개선했는지를 Git에 축적하는 것입니다.

> **From Data to Decision. From Decision to Execution.**
>
> Intelligence without execution is just information.

## Why MILES Exists

제조 환경의 문제는 대개 하나의 지표나 하나의 기능으로 설명되지 않습니다. 현장 제약, 운영 규칙, 사람의 판단, 데이터 품질, 시스템 구조, 실행 결과가 함께 얽혀 있습니다.

MILES는 이 복잡성을 숨기지 않습니다. 대신 다음의 연결을 추적합니다.

```text
Reality → Evidence → Signal → Decision → Execution → Observation → Refinement
```

이 연결이 남아 있어야 프로젝트가 단순한 결과 소개를 넘어 재사용 가능한 엔지니어링 지식이 됩니다.

## Evidence Before Claims

MILES는 주장보다 증거를 먼저 둡니다.

성과, 효과, 문제의 원인, 시스템의 가치에 대해 설명할 때 가능한 한 관찰된 사실과 검증 가능한 근거에서 출발합니다. 문서의 목적은 인상적인 표현을 만드는 것이 아니라, 독자가 어떤 판단이 왜 이루어졌는지 추적할 수 있게 하는 것입니다.

따라서 MILES에서는 다음을 우선합니다.

- 현장에서 관찰된 문제와 제약
- 데이터와 로그에서 확인된 패턴
- 실제 적용 전후의 변화
- 아키텍처와 비즈니스 규칙
- 선택한 접근과 버린 접근의 이유
- 실패, 한계, 미해결 조건

근거가 충분하지 않은 내용은 사실처럼 표현하지 않습니다. 추정과 가설은 추정과 가설로 구분합니다.

## Execution Is the Unit of Value

MILES에서 가치의 최소 단위는 정보가 아니라 **실행**입니다.

좋은 분석은 더 나은 판단으로 이어져야 하고, 좋은 판단은 실제 시스템·프로세스·도구·운영 방식의 변화로 이어져야 합니다. 실행으로 이어지지 않은 인사이트는 참고 정보일 수는 있어도 MILES가 지향하는 최종 산출물은 아닙니다.

그래서 MILES는 기능 목록보다 다음을 더 중요하게 기록합니다.

- 어떤 문제를 해결하기 위해 시스템이 만들어졌는가
- 어떤 비즈니스 규칙이 구현되었는가
- 어떤 판단이 자동화되거나 지원되었는가
- 현장 사용자가 무엇을 실제로 할 수 있게 되었는가
- 운영 과정에서 무엇이 바뀌었는가

**Execution Is the Unit of Value.**

## Build → Observe → Refine

MILES는 완성된 설계를 한 번에 만드는 접근보다 반복 가능한 실행 루프를 중요하게 봅니다.

```text
Build → Observe → Refine
   ↑                 ↓
   └─────────────────┘
```

### Build

문제와 제약을 기준으로 실제로 작동하는 것을 만듭니다. 문서, 데이터 파이프라인, 분석 모델, 인터페이스, 자동화, 운영 규칙 등 형태는 다를 수 있지만 검증 가능한 실행 단위를 만들어야 합니다.

### Observe

실제 사용과 결과를 관찰합니다. 예상과 현실의 차이, 사용자의 행동, 데이터의 예외, 운영상의 마찰, 시스템의 한계를 증거로 남깁니다.

### Refine

관찰 결과를 바탕으로 설계, 규칙, 데이터 구조, 인터페이스, 운영 방식을 수정합니다. 개선은 추상적인 의견이 아니라 관찰된 현실에 대한 응답이어야 합니다.

이 루프를 반복하면서 프로젝트는 단순한 PoC에서 실제 실행 시스템으로 진화하고, 그 과정 자체가 재사용 가능한 방법론이 됩니다.

## Git as Memory

MILES는 Git을 단순한 파일 저장소가 아니라 **프로젝트의 기억 장치**로 사용합니다.

현재 상태만 남기는 것이 아니라, 어떤 구조가 왜 생겼고 어떤 판단을 통해 바뀌었는지를 커밋과 파일의 진화 과정에 남깁니다.

GitHub의 `ohsh-harimpetfood/miles` 저장소 `main` 브랜치는 MILES의 Source of Truth입니다. 채팅, 로컬 초안, 임시 메모는 Git에 반영되기 전까지 공식 상태가 아닙니다.

Git을 기억 장치로 사용한다는 것은 다음을 의미합니다.

- 기존 상태를 읽은 뒤 변경한다.
- 의미 있는 변경 단위로 기록한다.
- 커밋 메시지에 실제 변경 목적을 남긴다.
- 중요한 판단과 구조의 진화를 추적 가능하게 유지한다.
- write 후 다시 읽어 실제 반영 상태를 검증한다.
- 공개할 수 없는 정보는 기억으로 남기기 전에 제거하거나 일반화한다.

## What MILES Values

MILES는 다음을 우선합니다.

**Evidence over claims.**  
**Execution over presentation.**  
**Observed reality over assumed process.**  
**Engineering decisions over feature lists.**  
**Iteration over premature completeness.**  
**Reusable methods over isolated success.**  
**Traceable memory over undocumented context.**

MILES는 완성된 포트폴리오가 아니라 계속 진화하는 제조 인텔리전스와 실행의 연구소입니다.
