# GROUNDTRUTH

GROUNDTRUTH는 제조 현장에서 실제로 관찰된 문제, 사실, 제약, 요구사항과 증거를 기록하는 영역입니다. 해석보다 관찰된 현실에 가깝게 작성하고, 사실과 추정을 명확히 구분합니다.

## Purpose

현장의 현재 상태와 문제를 검증 가능한 형태로 남겨 이후 분석과 의사결정의 출발점을 제공합니다.

## Belongs Here

- field observations
- operational pain points
- physical constraints
- process constraints
- stakeholder requirements
- publication-safe 형태로 sanitization된 screenshots / logs / observations
- confirmed current-state facts

## Does Not Belong Here

- 분석 결과나 해석 → `SIGNALS`
- 구현된 시스템 → `FORGE`
- 아이디어, 실험, PoC → `WORKBENCH`
- 재사용 가능한 방법론 → `METHODS`

## Evidence / Entry Expectations

가능한 경우 관찰 시점, 출처, 조건 또는 재현 가능한 근거를 남깁니다. 확인된 사실과 추정·가설을 같은 수준의 사실처럼 섞지 않습니다.

public repository에 들어가는 증거는 `security/REDACTION_POLICY.md`를 따라 commit 전에 sanitization합니다.

## Relationship to Other Areas

GROUNDTRUTH는 `SIGNALS`의 분석 입력이 되고, 이후의 의사결정과 `FORGE` 또는 `WORKBENCH` 작업이 어떤 현실에서 출발했는지 추적할 수 있게 합니다.
