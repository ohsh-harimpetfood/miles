# MILES Current Bridge

이 문서는 MILES 저장소의 **현재 작업 상태와 다음 단계로 이어지는 연속성**을 기록합니다.

GitHub `ohsh-harimpetfood/miles`의 `main` 브랜치가 현재 MILES의 Source of Truth입니다.

## Current State

MILES는 현재 **bootstrap / foundation 단계**를 지나 실제 FORGE Case를 구축하고 검증하는 단계로 이동하고 있습니다.

완료된 Foundation 단계:

- **FOUNDATION-001 — COMPLETED**
- **FOUNDATION-002 — COMPLETED**

현재 Foundation 상태:

- **FOUNDATION-003 — DEFERRED / evidence pending**

현재 / 다음 실행 단계:

- **FORGE-001 — WMS canonical case v0.1 review / visual sanitization**

저장소의 기본 목적, 철학, taxonomy, Source of Truth 원칙, Git Write Gateway 운영 원칙은 루트 `README.md`에 정의되어 있습니다.

기존의 다음 두 파일은 MILES 본 프로젝트 콘텐츠가 아니라 Git Write Gateway 연결 및 쓰기 경로 검증을 위한 테스트 자산입니다.

- `FIRST_GWG_TEST.md`
- `GWG_WRITE_TEST.md`

## Gateway Verification Completed

초기 bootstrap 이전에 다음 Git Write Gateway 동작이 검증되었습니다.

- `main` 브랜치 대상 repository read
- 신규 파일 write
- 기존 파일 update
- write 후 commit SHA 반환
- write 후 파일 재조회
- UTF-8 및 한국어 Unicode 보존
- `ChatGPT → Git Write Gateway → GitHub → MILES` 경로 확인

이 검증은 저장소 콘텐츠 자체의 완성을 의미하지 않습니다. Gateway가 MILES의 Git 변경을 안전하게 수행하고 검증할 수 있는 기본 경로가 작동함을 의미합니다.

## FOUNDATION-001 — COMPLETED

FOUNDATION-001에서는 다음 세 Foundation 문서를 생성했습니다.

| Document | Role | Initial creation commit |
| --- | --- | --- |
| `MANIFESTO.md` | MILES의 존재 이유와 핵심 실행 철학 정의 | `a20d6ab7e58c9d9b78127c44fa72df0cafe32d08` |
| `security/REDACTION_POLICY.md` | public repository를 위한 공개·일반화·제외 및 redaction 기준 정의 | `a5610c2ce21733edca437023a66e21927c95d656` |
| `bridge/CURRENT.md` | bootstrap 상태와 작업 연속성 기록 | `39a0989632b1857b1b159a2673d87ea20a20efa6` |

FOUNDATION-001의 목적은 MILES의 핵심 철학, public publication 안전 기준, 세션 간 continuity 기반을 세우는 것이었으며 이 단계는 완료되었습니다.

## FOUNDATION-002 — COMPLETED

FOUNDATION-002에서는 README에 개념으로 존재하던 MILES taxonomy를 실제 Git directory structure와 각 영역의 Content Contract로 구현했습니다.

생성된 9개 taxonomy entry README:

- `groundtruth/README.md` — `GROUNDTRUTH`
- `signals/README.md` — `SIGNALS`
- `forge/README.md` — `FORGE`
- `workbench/README.md` — `WORKBENCH`
- `methods/README.md` — `METHODS`
- `design/README.md` — `DESIGN`
- `registry/README.md` — `REGISTRY`
- `security/README.md` — `SECURITY`
- `bridge/README.md` — `BRIDGE`

이 단계는 실제 Case, registry data, template, 정식 Method를 생성하는 단계가 아니라 **콘텐츠가 들어갈 문법과 경계**를 정의하는 데 한정되었습니다.

## Active Research Notes

현재 BRIDGE에는 다음 working research note가 활성 상태로 존재합니다.

### `bridge/GIT_AS_ACTION_RESEARCH_NOTE.md`

Git as Action은 Conversation을 control plane, Git을 durable memory, policy를 boundary로 보고 execution은 task에 가장 적합한 도구에 위임하는 operating hypothesis를 검증 중입니다.

### `bridge/ABSTRACTION_LIFT_RESEARCH_NOTE.md`

Abstraction Lift는 AI를 통해 사용자의 직접 구현 능력 상한을 넘어서는 시스템을 설계·구현할 수 있지만, **intent, constraints, verification에 대한 통제권은 인간에게 남겨야 한다**는 working hypothesis입니다.

핵심 working positions:

- `Build beyond your implementation ceiling`
- `Implementation is delegated, intent is retained`
- `Capability ≠ Competence`
- capability가 커질수록 verification / evidence / testing 요구도 함께 강화

이 note는 Git as Action과 Feature as Code를 관통하는 working hypothesis로 취급하며, 아직 `METHODS`로 승격하지 않습니다.

### `bridge/WMS_CASE_RESEARCH_NOTE.md`

WMS Case Research Note는 독립적인 현업 WMS 프로젝트의 기원, 초기 AppSheet/data-model concept, custom web architecture pivot, incremental Git evolution, operational evidence를 cross-check한 **BRIDGE evidence note**입니다.

이 note는 현재 **FORGE Promotion Gate — PASS**를 지원하며, chronology, evidence provenance, visual/operational evidence registry, unresolved questions와 claim boundary를 유지합니다.

WMS를 Docs as Code, Feature as Code, Git as Action의 직접적인 전신이나 Abstraction Lift의 대표 증거로 해석하지 않습니다.

`Complexity accumulated through verified increments.`는 현재 **Strongly Supported working observation**이지만, `Domain-Grounded Incremental AI Development`는 여전히 working characterization이며 `METHODS`로 승격하지 않습니다.

Research Note의 기본 승격 원칙은 다음과 같습니다.

```text
Research Note
→ real use
→ evidence
→ refinement
→ METHODS
```

## Canonical FORGE Artifact

WMS의 첫 canonical FORGE artifact가 생성되었습니다.

- `forge/WMS-001/README.md`
- **Status:** `Canonical FORGE Case v0.1 — evidence-backed; public visuals pending sanitization`

이 Case는 manual warehouse/location problem, first executable AppSheet/QR hypothesis, custom web architecture pivot, deployed multi-user operational system, physical-digital location model, operational evolution을 evidence-backed narrative로 정리합니다.

measured business impact는 아직 **Not Yet Established / Not Yet Measured**로 유지합니다.

## FOUNDATION-003 — DEFERRED / Evidence Pending

FOUNDATION-003에서 검토하던 후보 범위는 다음과 같았습니다.

- machine-readable registries
- reusable templates
- repository metadata conventions
- retrieval structure

현재 이 단계는 **DEFERRED / evidence pending** 상태로 유지합니다.

이유는 실제 Case가 충분히 존재하지 않는 상태에서 registry, template, retrieval structure를 먼저 설계하면 실제 workload보다 가정에 맞춘 구조를 만들 가능성이 있기 때문입니다.

따라서 다음 원칙을 계속 적용합니다.

> **Do not design the retrieval and registry structure ahead of the evidence it is meant to organize.**

이제 실제 canonical FORGE Case가 하나 존재하므로, 향후 Case review와 visual/publication 작업에서 반복적으로 필요한 metadata, template, retrieval need를 관찰합니다. 그러나 **FOUNDATION-003은 아직 재개하지 않습니다.**

## Current / Next Execution — FORGE-001 — WMS Canonical Case v0.1 Review / Visual Sanitization

현재 실행 단계는 **FORGE-001 — WMS canonical case v0.1 review / visual sanitization**입니다.

다음 단계:

- canonical narrative review
- 6~8 visual assets 선별
- public sanitization
- measured impact evidence 탐색
- 실제 Case를 통해 반복적인 metadata / template need 관찰

visual evidence는 현재 PRIVATE ORIGINAL EVIDENCE로 유지하며 public repository에 추가하기 전에 `security/REDACTION_POLICY.md` 기준으로 sanitization합니다.

현재 단계에서 FOUNDATION-003, registry, reusable template를 선행 설계하거나 생성하지 않습니다.

## Continuity Rule

다음 세션이나 작업은 이 문서의 내용만 믿고 진행하지 않습니다. 반드시 GitHub `main`의 실제 파일과 구조를 다시 읽고 현재 상태를 확인합니다.

기본 연속성 절차는 다음과 같습니다.

```text
READ CURRENT MAIN
      ↓
VERIFY COMPLETED WORK
      ↓
CONFIRM CURRENT EXECUTION STAGE
      ↓
EXECUTE ONLY THE DECLARED SCOPE
      ↓
WRITE → READ BACK → VERIFY
```

`bridge/CURRENT.md`는 현재 작업의 안내판이며, 최종 Source of Truth는 항상 GitHub `main`의 실제 저장소 상태입니다.
