# MILES Current Bridge

이 문서는 MILES 저장소의 **현재 작업 상태와 다음 단계로 이어지는 연속성**을 기록합니다.

GitHub `ohsh-harimpetfood/miles`의 `main` 브랜치가 현재 MILES의 Source of Truth입니다.

## Current State

MILES는 현재 **bootstrap / foundation 단계**에 있습니다.

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

## Current Work Stage — FOUNDATION-001

현재 작업 단계는 **FOUNDATION-001**입니다.

FOUNDATION-001의 범위는 다음 세 Foundation 문서로 제한됩니다.

1. `MANIFESTO.md`
   - MILES가 왜 존재하는지 정의
   - Evidence Before Claims
   - Execution Is the Unit of Value
   - Build → Observe → Refine
   - Git as memory

2. `security/REDACTION_POLICY.md`
   - public repository 전제
   - 회사 기밀, 고객/협력사 정보, 개인정보, 인증정보 보호
   - 내부 운영 수치와 민감 세부사항에 대한 공개·일반화·제외 기준
   - commit 이전 redaction 원칙

3. `bridge/CURRENT.md`
   - 현재 bootstrap 상태
   - 완료된 Gateway 검증
   - 현재 Foundation 작업 단계와 다음 작업 연결

FOUNDATION-001에서는 이 세 파일 외의 Foundation 구조나 콘텐츠를 확장하지 않습니다.

## Next Planned Work

FOUNDATION-001 이후의 예정 작업은 다음과 같습니다.

### FOUNDATION-002

다음 Foundation 계층을 구체화하는 후속 단계입니다. 세부 범위는 FOUNDATION-002 작업을 시작할 때 현재 Git 상태를 다시 읽고 명시적으로 정의합니다.

### FOUNDATION-003

FOUNDATION-002 이후 이어지는 후속 Foundation 단계입니다. 마찬가지로 실제 작업 범위는 해당 단계 시작 시점의 `main`을 Source of Truth로 다시 확인한 뒤 확정합니다.

현재 문서에서는 FOUNDATION-002와 FOUNDATION-003의 세부 구현을 선행하지 않습니다.

## Continuity Rule

다음 세션이나 작업은 이 문서의 내용만 믿고 진행하지 않습니다. 반드시 GitHub `main`의 실제 파일과 구조를 다시 읽고 현재 상태를 확인합니다.

기본 연속성 절차는 다음과 같습니다.

```text
READ CURRENT MAIN
      ↓
VERIFY COMPLETED WORK
      ↓
CONFIRM CURRENT FOUNDATION STAGE
      ↓
EXECUTE ONLY THE DECLARED SCOPE
      ↓
WRITE → READ BACK → VERIFY
```

`bridge/CURRENT.md`는 현재 작업의 안내판이며, 최종 Source of Truth는 항상 GitHub `main`의 실제 저장소 상태입니다.
