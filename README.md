# MILES

**Manufacturing Intelligence Lab for Execution Systems**

MILES는 제조 현장의 문제를 데이터로 관찰하고, 신호를 해석해 의사결정으로 연결하며, 그 결정을 실제 실행 시스템으로 구현하는 살아있는 제조 인텔리전스 및 실행 연구소입니다.

> **From Data to Decision. From Decision to Execution.**  
> Intelligence without execution is just information.

## Purpose

MILES의 목적은 단순한 포트폴리오나 문서 보관소를 만드는 것이 아닙니다. 현장에서 발생한 문제와 제약을 근거로 남기고, 데이터와 분석을 통해 의미 있는 신호를 도출하며, 그 결과를 실제 시스템·제품·업무 방식으로 구현하는 과정을 재사용 가능한 지식으로 축적하는 것입니다.

MILES는 다음을 지향합니다.

- 주장보다 **증거와 현장 근거**를 우선합니다.
- 아이디어보다 **구현된 시스템과 검증된 실행**을 우선합니다.
- 기능 목록보다 **문제, 제약, 아키텍처, 비즈니스 규칙, 의사결정과 진화 과정**을 기록합니다.
- 분석 자체보다 **의사결정과 실행으로 이어지는 연결 구조**를 중요하게 봅니다.
- 일회성 프로젝트 경험을 **재사용 가능한 방법과 운영 체계**로 전환합니다.

## Philosophy

MILES에서 데이터는 출발점이지 결과가 아닙니다. 중요한 것은 데이터가 어떤 신호를 만들고, 그 신호가 어떤 판단을 가능하게 하며, 그 판단이 어떤 실행 시스템으로 이어지는지입니다.

따라서 MILES의 기본 흐름은 다음과 같습니다.

```text
Field Reality
    ↓
GROUNDTRUTH
    ↓
SIGNALS
    ↓
Decision
    ↓
FORGE / WORKBENCH
    ↓
Execution
    ↓
METHODS
```

실제 현장 경험은 다시 방법론과 운영 원칙으로 추상화되고, 이후의 문제 해결에 재사용됩니다.

## Repository Taxonomy

MILES는 다음 taxonomy를 기본 정보 구조로 사용합니다. 모든 콘텐츠를 억지로 분류하지는 않으며, 실제 목적과 역할에 가장 적합한 위치를 선택합니다.

| Area | Role |
| --- | --- |
| `GROUNDTRUTH` | 현장 문제, 관찰된 사실, 증거, 제약조건, 요구사항 |
| `SIGNALS` | 데이터, 분석, 지표, 패턴, 해석, 의사결정에 필요한 신호 |
| `FORGE` | 실제 구현되어 운영되거나 제품화된 시스템과 실행 결과 |
| `WORKBENCH` | 실험, PoC, 프로토타입, 탐색적 구현과 검증 과정 |
| `METHODS` | 반복 적용 가능한 문제 해결 방법, 운영 방식, 설계 원칙 |
| `DESIGN` | 시각 언어, 인터페이스 원칙, 레퍼런스, 패키징과 아이덴티티 |
| `REGISTRY` | 프로젝트, 시스템, 방법론 등을 연결하는 machine-readable 인덱스 |
| `SECURITY` | 공개 범위, 비식별화, redaction, 보안 및 출판 정책 |
| `BRIDGE` | 현재 프로젝트·세션의 연속성, 진행 맥락, 다음 작업으로 이어지는 연결 정보 |

이 taxonomy는 MILES의 기본 지도이며, 저장소가 성장하면서 실제 콘텐츠와 운영 경험을 기준으로 진화할 수 있습니다.

## Source of Truth

**GitHub의 `ohsh-harimpetfood/miles` 저장소와 `main` 브랜치를 MILES의 Source of Truth로 취급합니다.**

다음 원칙을 따릅니다.

1. 채팅, 임시 메모, 로컬 초안은 Git에 반영되기 전까지 공식 MILES 상태가 아닙니다.
2. 프로젝트 구조, 문서, registry, 정책의 현재 상태는 GitHub에 커밋된 내용을 기준으로 판단합니다.
3. 기존 파일을 변경할 때는 반드시 현재 Git 내용을 먼저 읽고, 관련 구조와 맥락을 보존합니다.
4. 중요한 변경은 실제 파일 내용과 commit SHA로 추적 가능해야 합니다.
5. 저장소에 반영된 결과는 write 성공만으로 완료된 것으로 보지 않고, 다시 읽어 정상 반영 여부를 검증합니다.
6. 기밀정보, 인증정보, 고객정보, 개인 연락처 등 공개 저장소에 부적절한 정보는 Source of Truth에 포함하지 않습니다. 내부 프로젝트를 사례화할 때는 엔지니어링 방법과 판단을 보존하면서 민감정보를 제거합니다.

## Git Write Gateway Operating Principles

MILES의 저장소 변경은 Git Write Gateway를 통한 명시적이고 검증 가능한 작업을 기본으로 합니다.

기본 실행 루프는 다음과 같습니다.

```text
READ → UNDERSTAND → PROPOSE OR EXECUTE → WRITE → VERIFY
```

운영 원칙:

- **Read before write.** 기존 파일을 수정하기 전에 반드시 현재 내용을 읽습니다.
- **Preserve context.** 기존 구조와 의미 있는 내용을 무시한 채 파일을 통째로 대체하지 않습니다.
- **Write complete artifacts.** 변경 시 해당 경로의 완전한 최종 파일을 작성합니다.
- **Verify every write.** write 이후 파일을 다시 읽어 실제 Git 상태를 확인합니다.
- **Track commits.** 중요한 변경은 commit SHA와 변경 경로를 함께 확인합니다.
- **Use clear commit messages.** 실제 변경 내용을 설명하는 커밋 메시지를 사용합니다.
- **Preserve UTF-8 and Unicode.** 한국어를 포함한 Unicode 콘텐츠를 안전하게 유지합니다.
- **Never expose secrets.** `.env`, 토큰, 자격증명, 개인키, API key 등 비밀정보를 저장하거나 응답에 노출하지 않습니다.
- **Do not request personal access tokens.** 사용자에게 GitHub PAT를 요구하지 않습니다.
- **Protect repository automation.** 아키텍처가 명시적으로 허용하도록 확장되기 전에는 GitHub workflow 파일을 생성하거나 수정하지 않습니다.

## Repository Status

Git Write Gateway bootstrap verification은 완료되었습니다. 루트의 `FIRST_GWG_TEST.md`와 `GWG_WRITE_TEST.md`는 연결, 쓰기, UTF-8/한글 저장 경로를 검증하기 위한 테스트 자산이며 MILES의 본 프로젝트 콘텐츠와는 구분합니다.

**FOUNDATION-001은 완료되었습니다.** 이 단계에서 MILES의 manifesto, public redaction policy, bridge continuity가 확립되었습니다. 현재는 **FOUNDATION-002 planning pending** 상태이며, 세부 구현 범위는 아직 확정되지 않았습니다.

주요 Foundation 문서:

- [`MANIFESTO.md`](MANIFESTO.md) — MILES가 왜 존재하는지와 핵심 실행 철학
- [`security/REDACTION_POLICY.md`](security/REDACTION_POLICY.md) — public repository의 공개·일반화·제외 기준
- [`bridge/CURRENT.md`](bridge/CURRENT.md) — 현재 bootstrap/Foundation 상태와 다음 세션 continuity

README는 MILES의 진입점과 저장소 지도 역할을 하며, 세부 원칙과 현재 작업 상태는 위 문서를 기준으로 확인합니다.

---

MILES는 정보를 쌓는 저장소가 아니라, **현장의 현실을 실행 가능한 시스템으로 바꾸는 과정과 그 방법을 축적하는 저장소**입니다.
