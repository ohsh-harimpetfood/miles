# FORGE

FORGE는 실제로 구현되어 운영되거나 제품화된 시스템과 실행 결과를 기록하는 영역입니다. 기능 목록보다 왜 그렇게 설계되었는지와 실제 업무가 어떻게 바뀌었는지를 중요하게 봅니다.

## Purpose

현장 문제와 의사결정이 실제 시스템, 자동화, 도구, 운영 변화로 구현된 결과를 추적 가능하게 남깁니다.

## Belongs Here

- production systems
- operational applications
- implemented automation
- deployed decision / execution systems
- validated internal tools
- systems that changed real work

## Does Not Belong Here

- idea only → `WORKBENCH`
- unfinished experiment → `WORKBENCH`
- PoC without operational adoption → `WORKBENCH`
- raw analysis → `SIGNALS`

## Evidence / Entry Expectations

가능한 경우 다음을 포함합니다.

- originating problem
- architecture
- business rules
- implementation evidence
- operational flow
- evolution / major design changes
- verified outcomes when available

## Relationship to Other Areas

FORGE는 `GROUNDTRUTH`와 `SIGNALS`에서 출발한 판단이 실제 실행으로 구현된 결과를 담습니다. 충분히 검증된 `WORKBENCH` 산출물이 운영에 채택되면 FORGE로 이동할 수 있고, 반복 가능한 원리는 이후 `METHODS`로 추상화될 수 있습니다.
