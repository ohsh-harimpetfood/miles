# METHODS

METHODS는 여러 문제에 반복 적용할 수 있도록 추상화된 방법, 운영 체계, 설계 원칙을 기록하는 영역입니다. 특정 프로젝트의 경험을 그대로 옮기기보다 재사용 가능한 형태로 검증·정제된 지식을 다룹니다.

## Purpose

반복적으로 적용 가능한 문제 해결 방식과 운영 원칙을 축적해 이후의 프로젝트와 의사결정에 재사용합니다.

## Belongs Here

- reusable methods
- operating models
- decision frameworks
- architecture patterns
- implementation patterns
- governance methods
- validated working practices

## Does Not Belong Here

- 한 프로젝트에만 해당하는 상세 구현 → `FORGE`
- 아직 검증되지 않은 아이디어 → `WORKBENCH` 또는 research note
- 현재 세션 continuity → `BRIDGE`

## Evidence / Entry Expectations

실제 사용과 반복 적용을 통해 근거가 축적된 방식이어야 합니다. 적용 조건, 한계, 검증된 범위와 재사용 가능한 핵심 원리를 가능한 한 명확히 기록합니다.

Research Note의 기본 승격 흐름은 다음과 같습니다.

```text
Research Note
→ real use
→ evidence
→ refinement
→ METHODS
```

현재 `bridge/GIT_AS_ACTION_RESEARCH_NOTE.md`는 아직 METHODS로 승격하지 않습니다.

## Relationship to Other Areas

METHODS는 `FORGE`, `WORKBENCH`, `GROUNDTRUTH`, `SIGNALS`에서 축적된 경험을 반복 가능한 원리로 추상화합니다. 반대로 새로운 프로젝트에서는 METHODS가 설계와 실행의 출발점이 될 수 있습니다.
