# SIGNALS

SIGNALS는 GROUNDTRUTH와 데이터에서 의사결정에 필요한 의미 있는 신호를 도출하는 영역입니다. 단순한 데이터 보관이 아니라 “그래서 무엇을 판단할 수 있는가?”와 연결되어야 합니다.

## Purpose

관찰된 현실과 데이터를 분석해 패턴, 지표, 이상, 해석을 만들고 의사결정을 지원합니다.

## Belongs Here

- analysis
- metrics
- patterns
- anomaly findings
- derived indicators
- decision-support insights
- data interpretations

## Does Not Belong Here

- 해석되지 않은 현장 사실 → `GROUNDTRUTH`
- 최종 구현 시스템 → `FORGE`
- 아직 검증되지 않은 실험 → `WORKBENCH`

## Evidence / Entry Expectations

어떤 데이터나 관찰을 근거로 신호를 도출했는지, 해석의 조건과 한계가 무엇인지 가능한 한 명시합니다. 신호는 가능한 경우 실제 판단 또는 다음 행동과 연결합니다.

## Relationship to Other Areas

SIGNALS는 `GROUNDTRUTH`에서 출발해 의사결정을 지원하고, 그 결과가 `WORKBENCH`의 실험이나 `FORGE`의 구현으로 이어질 수 있습니다.
