# BRIDGE

BRIDGE는 AI session, project phase, working hypothesis 사이의 continuity를 Git으로 외부화하는 영역입니다. AI session memory 자체를 Source of Truth로 가정하지 않고, 다음 작업에 필요한 상태와 맥락을 durable artifact로 남깁니다.

## Purpose

세션과 작업 단계가 바뀌어도 현재 상태, active hypothesis, next-step handoff를 Git에서 다시 읽어 복원할 수 있게 합니다.

현재 주요 파일:

- [`CURRENT.md`](CURRENT.md) — 현재 bootstrap / Foundation 상태와 다음 단계
- [`GIT_AS_ACTION_RESEARCH_NOTE.md`](GIT_AS_ACTION_RESEARCH_NOTE.md) — 아직 정식 METHODS로 승격되지 않은 active working research note

## Belongs Here

- CURRENT state
- session / project continuity
- active working hypotheses
- research notes not yet promoted
- next-step handoff information

## Does Not Belong Here

- 장기적으로 안정화된 Method → `METHODS`
- production system Case → `FORGE`
- raw field evidence → `GROUNDTRUTH`

## Evidence / Entry Expectations

BRIDGE 문서는 현재 상태와 working assumption을 명확히 구분하고, 다음 세션이 실제 Git `main`을 다시 읽어 검증할 수 있도록 충분한 연결 정보를 제공합니다.

BRIDGE는 영구적인 잡동사니 폴더가 아닙니다. 임시 지식은 시간이 지나면 다음 중 하나로 정리되어야 합니다.

- discard
- archive
- promote to another taxonomy

## Relationship to Other Areas

BRIDGE는 세션 간 continuity를 제공하지만 최종 지식의 영구 목적지는 아닐 수 있습니다. 검증된 research note는 `METHODS`로, 실제 운영 결과는 `FORGE`로, 현장 근거는 `GROUNDTRUTH`로 이동하거나 연결될 수 있습니다.

최종 Source of Truth는 항상 GitHub `main`의 실제 저장소 상태이며, 다음 세션은 필요한 continuity를 Git에서 명시적으로 rehydrate합니다.
