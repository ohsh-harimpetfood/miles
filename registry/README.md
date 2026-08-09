# REGISTRY

REGISTRY는 MILES의 project, method, design source 등 주요 객체를 machine-readable 형태로 검색하고 연결하기 위한 index layer입니다. 현재 단계에서는 실제 registry 데이터 파일을 만들지 않고 구조적 역할만 정의합니다.

## Purpose

MILES 안의 주요 객체에 stable ID, 관계, 탐색용 metadata를 부여해 사람이 읽는 문서와 machine-readable navigation을 연결합니다.

## Belongs Here

- machine-readable indexes
- stable IDs
- relationships
- metadata required for discovery / navigation
- future projects registry
- future methods registry
- future design sources registry

## Does Not Belong Here

- 긴 서술형 Case → 해당 taxonomy artifact
- 실제 Method 본문 → `METHODS`
- raw operational data

## Evidence / Entry Expectations

Registry entry는 실제 존재하는 artifact와 검증 가능한 관계를 가리켜야 하며, 임의의 중복 ID나 존재하지 않는 대상을 만들지 않습니다.

현재 FOUNDATION-002에서는 `projects.yaml`, `methods.yaml`, `design-sources.yaml` 등 실제 registry YAML 파일을 생성하지 않습니다. 해당 파일과 schema의 구체적 범위는 FOUNDATION-003 planning 이후 별도로 결정합니다.

## Relationship to Other Areas

REGISTRY는 `FORGE`, `METHODS`, `DESIGN` 및 향후 주요 MILES artifact를 검색·연결하는 index layer입니다. Source content 자체를 대체하지 않으며 각 artifact의 canonical location을 가리킵니다.
