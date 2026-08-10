# Git as Action — Working Research Note

**Status:** Working Research Note  
**Working Name:** Git as Action  
**Artifact Class:** BRIDGE / research note, not yet a formal `METHODS` artifact  
**Validation State:** Text Git action path operational; exact-byte PNG publication repeatedly validated; WMS-001 now has 8 public visual assets (6 Sanitized Evidence, 2 Public Visual Derivatives); 5-asset sequential batch publication completed with ALL-PASS; broader methodology / cost / context-efficiency claims remain under validation

이 문서는 MILES에서 실제 운영을 통해 검증 중인 작업 가설을 기록한다. 정식 방법론으로 확정된 문서가 아니며, 관찰과 측정을 통해 수정·반박·정제될 수 있다.

## Working Definition

> **Conversation is the control plane.**  
> **Git is the memory.**  
> **Policy is the boundary.**  
> **Execution uses the best tool for the task.**

한국어로 표현하면 다음과 같다.

> **대화는 통제면이고, Git은 기억이며, 정책은 경계다.**  
> **실행은 목적에 가장 적합한 도구가 담당한다.**

이 working model의 목적은 모든 실행을 하나의 도구에 집중시키는 것이 아니다. 사고와 결정의 연속성은 Conversation layer에서 유지하고, durable state는 Git에 남기며, 정책으로 권한과 공개 범위를 제한하고, 실제 작업의 성격에 따라 가장 적합한 execution tool을 선택하는 것이다.

---

## 1. Conventional Coding-Agent Model

Codex / Claude Code 중심의 일반적인 coding-agent 방식은 repository 또는 working directory를 중심으로 동작하는 **agentic coding model**로 볼 수 있다.

이 방식에서 agent는 보통 다음과 같은 작업 환경을 가진다.

- repository 탐색
- 여러 파일 읽기
- 코드 수정
- shell command 실행
- test / build 실행
- 오류 분석
- 반복 수정
- commit 생성
- branch / pull request 작업

주요 unit of work는 다음과 같다.

- feature implementation
- bug fix
- refactoring
- testing
- build
- code review
- commit / PR

이 모델은 특히 코드베이스 자체가 작업의 중심이고, 실행 환경과 dependency graph를 실제로 탐색해야 하는 문제에서 강하다.

그러나 이 모델의 강점이 모든 유형의 지식 작업에 동일하게 필요한 것은 아니다. 문서, 정책, decision record, registry, case study처럼 실행 환경 전체보다 **명시적으로 좁은 맥락과 제한된 Git action**이 더 중요한 작업도 존재한다.

---

## 2. MILES Conversational Git Model

MILES에서 검토 중인 Git as Action 모델은 repository를 떠나서 작업한다는 의미가 아니다. 오히려 Git을 durable Source of Truth로 유지하면서, **Conversation을 reasoning과 control의 primary workspace**로 사용하는 방식이다.

기본 흐름은 다음과 같다.

```text
Conversation
→ Problem Framing
→ Evidence / Constraints
→ Architecture / Business Rules / Decision
→ Read Current Git
→ Policy-Gated Action
→ Commit
→ Read Back
→ Verify
→ Continue Conversation
```

여기서 unit of work는 code diff에 한정되지 않는다.

- field problem
- evidence
- architecture decision
- business rule
- case study
- reusable method
- registry
- publication/redaction policy
- session bridge
- system evolution

MILES의 관심사는 “파일을 수정했는가”보다 **현실의 문제와 판단이 durable memory로 남고, 다음 실행으로 이어지는가**에 더 가깝다.

---

## 3. Core Differentiators

Git as Action에서 검토하는 핵심 차별점은 직접 AI가 Git을 수정하는 기술 자체가 아니다.

Coding Agents, GitHub APIs, MCP와 같은 기술은 이미 존재하며, AI가 repository를 읽고 변경하거나 commit을 만드는 행위 자체를 새로운 발명으로 주장하지 않는다.

차별화 가설은 다음 요소의 **조합과 운영 모델**에 있다.

### Conversation as Primary Workspace

사고, 문제 정의, trade-off, 사용자 의도, 정책 판단을 Conversation layer에서 유지한다. Git action은 대화에서 결정된 내용을 durable state로 전환하는 실행 단계가 된다.

### Git as Durable Operating Memory

Git은 결과 파일만 보관하는 저장소가 아니라 현재 상태, 판단의 결과, 정책, continuity artifact를 유지하는 외부 기억 장치다.

### BRIDGE-Based Session Continuity

새 세션이나 다른 모델이 기존 conversation 전체를 보유하지 않아도 `README`, `BRIDGE`, `REGISTRY`, relevant artifacts를 읽어 현재 상태를 복원하도록 설계한다.

### Explicit Policy Boundary Between AI and GitHub

AI가 repository에 원하는 모든 행동을 수행할 수 있다고 가정하지 않는다. 허용된 repository, branch, path, action, redaction rule과 같은 정책 경계 안에서만 Git action을 수행한다.

### Model-Independent Source of Truth

특정 AI 세션이나 특정 모델의 기억을 진실의 기준으로 사용하지 않는다. GitHub `main`의 실제 상태를 Source of Truth로 사용하고, 다른 모델이나 도구도 동일한 Git state를 다시 읽어 작업을 이어갈 수 있어야 한다.

### Write → Commit → Read-Back Verification

write 성공 응답만으로 작업 완료를 선언하지 않는다.

```text
WRITE
→ COMMIT
→ READ BACK
→ VERIFY CONTENT / BLOB / STATE
```

실제 repository state를 다시 읽어 의도한 결과와 일치하는지 확인한다.

### Knowledge and Execution Sharing One Git History

코드, architecture decision, business rule, policy, case, method, bridge가 동일한 Git history 안에서 연결될 수 있다. 지식과 실행이 서로 다른 기억 체계에 고립되지 않도록 하는 것이 목표다.

### Working Differentiation Hypothesis

따라서 현재 working differentiation은 다음 조합으로 정의한다.

- Conversation-first reasoning
- Git as durable operating memory
- BRIDGE continuity
- domain taxonomy
- publication/redaction policy
- narrow policy-gated execution
- write/read-back verification
- model-independent Source of Truth

---

## 4. Cost & Token Efficiency Hypothesis

이 항목은 현재 Git as Action 연구에서 중요한 가설 중 하나다.

### Observed Working Hypothesis

실제 사용 경험에서 나온 가설은 Codex나 Claude Code 같은 coding agent가 특정 작업에서 **실제 변경 범위보다 훨씬 넓은 agentic context**를 필요로 할 수 있다는 것이다.

예를 들면 다음과 같은 context lifecycle이 발생할 수 있다.

```text
repository exploration
→ multiple file reads
→ dependency/context discovery
→ planning
→ editing
→ shell output
→ test/build
→ error analysis
→ iteration
→ context maintenance/compaction
```

이 과정은 deep software engineering에서는 필요한 비용일 수 있다. 문제는 documentation, policy, registry, case, method와 같이 그 전체 execution environment가 필요하지 않은 작업에서도 같은 폭의 context가 동원될 수 있다는 점이다.

반면 MILES Git as Action은 일부 workload에서 다음처럼 훨씬 좁은 흐름으로 충분할 수 있다는 가설을 가진다.

```text
existing conversation
→ targeted Git reads
→ decision
→ complete artifact
→ narrow write
→ read-back verification
```

### Context-Minimized Execution

이 차이를 현재 다음 개념으로 기록한다.

**Context-Minimized Execution**

> Do not give an agent an entire execution environment when the task only requires a small, explicit context and a constrained repository action.

한국어로는 다음과 같이 해석할 수 있다.

> 작업이 작고 명시적인 맥락과 제한된 repository action만 필요하다면, 에이전트에게 전체 실행 환경을 제공하지 않는다.

제안하는 기본 원칙은 다음과 같다.

```text
Task
→ Minimum Required Context
→ Decision
→ Smallest Sufficient Action
```

비용 효율의 원인을 단순히 “더 싼 모델을 사용한다”로 설명하지 않는다. 핵심 가설은 **AI가 탐색하고 재구성하고 유지해야 하는 context 자체를 줄이는 operating model**에 있다.

따라서 모델 단가가 동일하더라도 필요한 repository exploration, context reconstruction, shell/test loop, handoff가 감소한다면 총 execution cost가 낮아질 가능성이 있다.

이 주장은 아직 정량적으로 검증되지 않았다.

---

## 5. Potential Cost Advantages

현재 검증할 가치가 있는 비용 효율 가설은 다음과 같다.

- fewer repository-wide reads
- less repeated context discovery
- reduced shell/test/build loops for non-code work
- less agentic tool-call overhead
- Git / BRIDGE를 external memory로 사용하여 session context를 압축
- task-specific selective retrieval
- 작은 controlled write surface
- 필요 없는 coding agent 실행을 회피

이 효과는 특히 다음 workload에서 클 가능성이 있다.

- documentation
- architecture records
- policy
- sanitized case studies
- registry maintenance
- methods
- business rules
- decision records
- knowledge organization

다만 현재 이 항목은 **high-potential cost-efficiency hypothesis**로 분류한다.

실제 token, credit, elapsed time, rework 데이터를 측정하기 전에는 “dramatically cheaper”, “항상 더 싸다”, “몇 퍼센트 절감된다”와 같은 표현을 확정 사실로 사용하지 않는다.

---

## 6. Human Context-Switching Cost

Git as Action의 잠재적 장점은 machine cost뿐 아니라 **human context-switching cost**에도 있다.

### Conventional Flow Example

```text
Conversation
→ requirement transfer
→ IDE / terminal / coding agent
→ reconstruct context
→ execute
→ inspect
→ return to original conversation
```

사용자는 reasoning이 이루어진 곳에서 실행 도구로 이동하고, 요구사항을 다시 전달하거나 context를 재구성한 뒤, 결과를 확인하고 다시 원래 사고 흐름으로 돌아와야 할 수 있다.

### MILES Flow

```text
Conversation
→ Decide
→ Git Action
→ Verify
→ Continue Conversation
```

이 working advantage를 다음과 같이 정의한다.

> **Near-zero human context switching, with explicit machine context rehydration from Git.**

즉, 사용자는 가능한 한 사고 흐름을 떠나지 않는다. AI 세션이나 모델이 바뀌는 경우의 machine context는 conversation memory에 의존하기보다 다음과 같은 Git artifact를 읽어 명시적으로 복원한다.

- `README.md`
- `bridge/CURRENT.md`
- future `REGISTRY`
- relevant case / method / system artifacts

다만 현재 이 switching/friction이 실제로 zero인 것은 아니다.

현재 Custom GPT Action에서는 approval prompt가 발생할 수 있고, 세션마다 tool availability가 달라질 수 있으며, 특정 execution capability가 없는 환경에서는 다른 도구로 전환해야 한다. 따라서 이 장점은 **near-zero를 목표로 하는 operating hypothesis**이지, 현재 모든 환경에서 완전히 frictionless하다는 의미가 아니다.

---

## 7. Advantages

현재 예상되는 주요 장점은 다음과 같다.

### Low Interface Friction for Reasoning-Heavy Work

문제 정의와 판단이 이미 대화 안에서 진행되고 있다면, 별도 coding workspace로 요구사항을 재전달하지 않고 바로 좁은 Git action으로 이어질 수 있다.

### Potential Token / Credit / Cost Efficiency

전체 coding environment가 필요하지 않은 작업에서 context discovery와 tool loop를 줄일 가능성이 있다.

### Reduced Cognitive Context Switching

사용자가 Conversation → execution tool → Conversation 사이에서 반복적으로 맥락을 재구성하는 비용을 줄일 수 있다.

### Durable Cross-Session Context

Git / BRIDGE / Registry를 통해 세션 종료 후에도 durable state를 유지한다.

### Narrow Authority and Governance

repository, branch, path, action, publication rule을 좁게 정의할 수 있어 AI execution 권한을 제한할 수 있다.

### Auditability

artifact, commit, blob, read-back 결과를 통해 어떤 변경이 실제로 반영되었는지 추적할 수 있다.

### Cross-Model Portability

특정 모델의 hidden memory가 아니라 Git을 Source of Truth로 사용하면 ChatGPT, Claude, Codex 또는 future tooling이 같은 durable state를 읽고 이어갈 수 있다.

### Strong Fit for Mixed Knowledge Artifacts

코드뿐 아니라 architecture, policy, case, method, business rule, registry, session bridge를 하나의 history에서 다룰 수 있다.

### Public-by-Design Safety

MILES의 redaction policy와 결합하면 publishable knowledge를 작성 단계부터 검토하는 운영 습관을 만들 수 있다.

---

## 8. Disadvantages / Limits

Git as Action은 범용적으로 더 좋은 방법이 아니다. 현재 모델에는 명확한 한계가 있다.

### Weaker for Deep Software Engineering

repository 전체의 dependency와 runtime behavior를 이해해야 하는 deep software engineering에서는 coding agent가 훨씬 적합할 수 있다.

### Large Multi-File Refactors

많은 파일을 연속적으로 수정하고 중간 상태를 검증해야 하는 작업에서는 narrow file-level action이 비효율적일 수 있다.

### No Shell / Test / Build / Runtime / Debugger

현재 MILES Git Write Gateway 방식 자체는 shell, build system, test runner, runtime inspection, debugger를 제공하지 않는다.

### Current Approval UX Friction

Custom GPT Action 환경의 approval prompt는 반복적인 Git action에서 사용자 friction을 만들 수 있다.

### Context Rehydration Is Not Free

새 세션에서 `README`, `BRIDGE`, registry, relevant artifacts를 읽는 과정에도 비용이 발생한다. 목표는 이를 제거하는 것이 아니라 **필요한 것만 선택적으로 재수화(rehydrate)**하는 것이다.

### v0.1 Multi-File Writes Are Not Atomic

현재 여러 파일 write는 하나의 원자적 transaction으로 보장되지 않는다. 중간 write가 성공하고 다음 write가 실패할 수 있으므로 중요한 multi-file change에서는 이 한계를 고려해야 한다.

### Text / Size Limitations

Gateway나 conversational interface는 매우 큰 binary, generated artifact, massive source tree를 다루는 데 적합하지 않을 수 있다.

### Policy Infrastructure Maintenance

narrow execution은 allowlist, redaction rule, repository policy 같은 infrastructure를 지속적으로 유지해야 한다.

### Semantic Mistakes Remain Possible

기술적 allowlist는 잘못된 경로 접근이나 허용되지 않은 action을 줄일 수 있지만, **의미적으로 잘못된 내용**까지 자동으로 방지하지는 못한다. AI가 허용된 파일에 틀린 판단이나 부정확한 설명을 쓰는 문제는 별도의 review와 evidence discipline이 필요하다.

---

## 9. When Codex / Claude Code Is Better

다음 상황에서는 Git as Action보다 coding agent를 적극적으로 사용하는 것이 더 효율적일 가능성이 높다.

- large codebase exploration
- multi-file refactor
- dependency changes
- build/test/debug loops
- runtime inspection
- migrations
- branch/PR workflows
- complex code implementation

이러한 작업에서는 repository 전체를 탐색하고 shell과 runtime feedback loop를 사용하는 능력이 핵심이다.

따라서 **Git as Action은 Codex나 Claude Code를 대체하는 방법론이 아니다.**

목표는 coding agent가 필요하지 않은 작업까지 coding-agent execution model로 처리하지 않고, workload에 맞는 execution plane을 선택하는 것이다.

---

## 10. Hybrid Architecture

현재의 최종 working hypothesis는 경쟁이 아니라 **역할 분리**다.

```text
Conversation / AI
= reasoning and control plane

Git / BRIDGE / Registry
= memory plane

MILES Gateway or future MCP
= policy and constrained execution plane

Codex / Claude Code
= code-heavy execution plane

GitHub
= durable Source of Truth
```

### Proposed Delegation Flow

코드 작업이 heavy한 경우 Conversation layer는 coding agent에 실행을 위임할 수 있다.

```text
Conversation
→ Frame Problem / Constraints / Acceptance Criteria
→ Delegate Code-Heavy Work to Coding Agent
→ Agent Explores / Builds / Tests / Commits
→ Read Result from Git
→ Verify Outcome
→ Connect Result to MILES FORGE / METHODS / Evidence
→ Continue Conversation
```

이 구조에서는 coding agent가 독립적인 최종 기억 장치가 되지 않는다. 작업 결과를 다시 Git에서 읽고, 필요한 경우 MILES의 `FORGE`, `METHODS`, evidence artifacts와 연결한다.

즉, execution tool은 바뀔 수 있지만 durable state와 operating memory는 Git을 중심으로 유지한다.

---

## Operational Validation — Binary Evidence Closed Loop

2026-08-10 MILES는 text Git action path에 이어 첫 exact-byte binary evidence closed loop를 실제 repository operation으로 검증했다.

| Field | Verified result |
| --- | --- |
| Test | `MILES Binary Asset Write Test — WMS-001` |
| Date | `2026-08-10` |
| Gateway | `MILES Git Write Gateway v0.2.3` |
| Attachment transport | `openaiFileIdRefs` |
| Write operation | `writeRepositoryAssetFromAttachment` |
| Repository read-back | `readRepositoryAsset` |
| Path | `forge/WMS-001/assets/03-transaction-history.png` |
| Source size | `128360` bytes |
| Read-back size | `128360` bytes |
| Source SHA-256 | `1eafaeea9f7c57873060e93529786a4da8072e1518b26978869e8af8943026cf` |
| Read-back SHA-256 | `1eafaeea9f7c57873060e93529786a4da8072e1518b26978869e8af8943026cf` |
| Expected Git blob SHA | `72d42e479ea5af9c82a3c6578c7a45f569dca549` |
| Resulting Git blob SHA | `72d42e479ea5af9c82a3c6578c7a45f569dca549` |
| Commit SHA | `a6ce0bd1bafbdd26a2d478feab94b7473446553a` |
| Integrity verified | `true` |

해당 binary commit에는 target PNG 외 다른 repository file change가 없었다.

검증된 closed loop는 다음과 같다.

```text
Conversation Attachment
→ openaiFileIdRefs
→ policy-gated Gateway
→ source integrity verification
→ GitHub write
→ resulting Git blob
→ repository read-back
→ size / SHA-256 verification
→ PASS
```

### Observed Findings

이번 검증에서 관찰된 결과는 다음 범위로 제한한다.

1. Git as Action은 text artifact뿐 아니라 binary evidence까지 controlled Git action으로 처리할 수 있음을 **1개 PNG 사례에서 실제 검증**했다.
2. Backend capability와 agent-visible tool surface는 동일하지 않다. Gateway에 기능이 있어도 Action schema/tool contract에 노출되지 않으면 agent는 capability를 사용할 수 없다.
3. Attachment transport 역시 execution boundary의 일부다.
4. Gateway의 역할은 `transport + policy + verification`이며 image editor/sanitizer가 아니다.
5. Evidence sanitization과 repository transport를 분리한다.
6. 실패 단계에서 우회하지 않고 `BLOCKED` 처리한 fail-closed behavior가 evidence integrity 유지에 중요한 역할을 했다.

### Binary Capability Evolution

```text
v0.1
→ binary operation 없음
→ BLOCKED

v0.2
→ binary backend 구현
→ agent tool surface 미노출
→ BLOCKED

v0.2.1
→ binary operation 노출
→ attachment transport 미충족
→ BLOCKED

v0.2.2
→ openaiFileIdRefs 방향 도입
→ active tool contract ambiguity
→ BLOCKED

v0.2.3
→ explicit writeRepositoryAssetFromAttachment
→ attachment contract 확인
→ exact-byte write/read-back
→ PASS
```

이 결과는 모든 binary type이 검증되었다는 뜻이 아니다. 모든 GPT Action 환경이 frictionless하다는 뜻도 아니며, 비용 효율이 정량 검증되었다는 의미도 아니다. 또한 Git as Action은 이 검증으로 `METHODS`에 승격되지 않는다.

---

## Operational Validation — Semantic Scope Discipline

2026-08-10 `forge/WMS-001/README.md`에서 실제 발생한 scope overrun → fail-closed `BLOCKED` → exact baseline recovery → controlled reconstruction 과정을 Git as Action의 operational validation evidence로 기록한다.

이 사례의 문제는 Git write 실패가 아니었다. Git write 자체와 read-back은 기술적으로 성공했지만, 허용된 evidence-integration 범위를 넘어 기존 canonical WMS narrative 전체가 재작성되었다.

따라서 이 사례는 다음을 보여주는 **first observed scope-control case**로 기록한다.

> **Technical write success ≠ Semantic scope compliance**

| Field | Evidence |
| --- | --- |
| Date | `2026-08-10` |
| Artifact | `forge/WMS-001/README.md` |
| Validation class | `Operational observation / control refinement` |

### Evidence Sequence

#### 1. Verified canonical baseline

기존 WMS-001 canonical v0.2의 verified baseline은 다음 Git blob이었다.

```text
6dd00a555861ca8d2cace422fa3ac8d63050a62b
```

#### 2. Scope overrun

```text
Commit:
e566086f56c162261093ab9b174ee3adb80288c9

Resulting blob:
d86c2f1b6e5c44e0b9482ec90083e928e9dd179d
```

Observed issue:

- requested task는 binary evidence publication 결과를 README에 반영하는 것이었다.
- 그러나 title, section structure, language, narrative framing, architecture explanation 등이 광범위하게 재작성되었다.
- Git write와 read-back은 기술적으로 성공했지만 semantic change scope는 요청 범위를 초과했다.

이 상태는 technical success였지만 scope-compliance `PASS`로는 인정하지 않는다.

#### 3. Scope Discipline added

overrun 확인 후 operating control에 다음 원칙을 추가했다.

> **Full-file write is a transport mechanism, not permission to rewrite the whole artifact.**

> **Prefer minimum semantic diff over opportunistic improvement.**

> **Technical write success does not guarantee semantic scope compliance.**

policy boundary도 다음과 같이 확장했다.

```text
Policy Boundary
├─ Repository scope
├─ Branch scope
├─ Path scope
├─ Action scope
└─ Semantic change scope
```

`Semantic Diff Budget`은 요청을 충족하기 위해 실제로 변경되어야 하는 의미 범위의 상한이라는 working control concept으로 기록한다. 아직 formal `METHODS` concept으로 승격하지 않는다.

#### 4. First recovery attempt — BLOCKED

Exact baseline restoration을 시도했으나 active MILES Git Write Gateway v0.2.3의 `readRepositoryFile` path에서는 immutable historical blob content를 직접 확보할 수 없었다.

historical commit/blob을 요구했지만 active read operation은 current `main` content를 반환했다.

따라서 exact baseline bytes를 확보하지 못한 상태에서 reconstruction, approximation, merge를 하지 않고 `BLOCKED`로 종료했다. 이 단계에서는 repository write가 발생하지 않았다.

이것은 fail-closed behavior의 추가 operational evidence다.

#### 5. Exact baseline recovery

Historical blob content를 별도 verified recovery source로 확보했다.

```text
Recovery source size:
12660 bytes

Recovery source SHA-256:
16631fee90d347105b529175aa88af015f5446a656c37537c158568277789abf

Git blob SHA:
6dd00a555861ca8d2cace422fa3ac8d63050a62b

Recovery commit:
c38994604ea71df26839e2d461a638593b3dfba2

Resulting README blob:
6dd00a555861ca8d2cace422fa3ac8d63050a62b
```

즉 scope-overrun 이전 verified baseline과 정확히 동일한 Git blob으로 복원되었다. Recovery commit에서는 `forge/WMS-001/README.md` 한 파일만 변경되었다.

#### 6. Controlled v0.3 reconstruction

복구 후 새 controlled update에서는 허용된 semantic changes를 명시적으로 제한했다.

Allowed:

1. status update
2. Case-at-a-Glance row 1개
3. Section 8 binary evidence integration
4. Section 9 publication-state update

```text
Controlled reconstruction commit:
854616bb0d5a00c57c19b1e0b5dc01cbc4553f33

Resulting blob:
7d23e40c1a4a5d7526c72225d01b3f1e1934e932
```

Verified compare from recovery commit to controlled v0.3:

- files changed: `1`
- file: `forge/WMS-001/README.md`
- additions: `36`
- deletions: `2`
- total changes: `38`

Protected title, Sections 1–7 narrative, chronology, architecture, Physical ↔ Digital Warehouse, Side 2 mirroring, Operator Role, AI-assisted implementation characterization, claim boundaries는 유지되었다.

결과:

`PASS — Minimum Semantic Diff satisfied`

### Observed Findings

1. Path-level authorization만으로는 semantic control이 충분하지 않다.
2. 허용된 파일에 대한 technically valid write도 semantic scope를 초과하면 policy failure가 될 수 있다.
3. Full-file replacement API는 transport mechanism일 뿐 full-document rewrite authorization이 아니다.
4. Write → read-back verification은 content existence / blob state를 검증하지만, semantic scope compliance는 별도 검증이 필요하다.
5. Exact recovery에서는 baseline을 추정하거나 unauthorized rewrite의 일부를 임의 보존해서는 안 된다.
6. Required baseline을 신뢰성 있게 확보할 수 없으면 `BLOCKED`가 올바른 결과가 될 수 있다.
7. Git history는 scope overrun → exact recovery → controlled reconstruction 전체 audit trail을 보존한다.

### Control Loop

```text
Requested Change
→ Define Semantic Scope
→ Identify Protected Content
→ Define Semantic Diff Budget
→ WRITE
→ READ BACK
→ Verify Technical State
→ Verify Semantic Scope
→ PASS / FAIL / BLOCKED
```

### Current Limitation

현재 사용한 Gateway v0.2.3의 active `readRepositoryFile` capability에서는 exact recovery에 필요한 immutable historical blob read가 직접 가능하지 않았다.

따라서 future constrained read capability 후보로 다음을 검토할 가치가 있다.

- historical file read by commit/ref
- immutable blob read by SHA

단, 이 operational validation은 Gateway upgrade를 제안하거나 실행하는 작업이 아니다.

### Claim Discipline

다음은 주장하지 않는다.

- `Semantic Diff Budget`이 formal `METHODS`다.
- 한 번의 사례로 모든 semantic overrun을 예방할 수 있다.
- 모든 full-file write가 위험하다.
- Gateway가 semantic correctness를 자동 보장한다.
- Scope Discipline이 정량적으로 검증된 완성 방법론이다.

현재 상태는 `Operational observation / control refinement`이다.

---

## Operational Validation — Batch Binary Publication Control

2026-08-10 WMS-001 visual publication에서 기존 3개의 visual asset을 개별 exact-byte closed loop로 검증한 뒤, 남은 5개를 하나의 controlled batch operation으로 publication했다.

### Background

사용한 control structure는 다음과 같다.

```text
multiple attachments
→ source preflight
→ sequential binary writes
→ per-asset read-back verification
→ ALL-PASS gate
→ one controlled README integration
```

### First Batch Attempt — Fail-Closed BLOCKED

첫 batch에서는 04 / 06 / 08 source는 manifest와 일치했지만 05 / 07 source는 declared manifest와 일치하지 않았다.

결과:

- binary write = `NONE`
- README write = `NONE`
- repository state unchanged

write 이전 source preflight에서 fail-closed `BLOCKED`로 종료했다.

### Second Hash-Locked Retry — Fail-Closed BLOCKED

두 번째 retry에서도 05 / 07이 기존 hash baseline과 달랐다. 이후 확인된 원인은 사용자가 05 / 07을 더 나은 품질의 source로 의도적으로 교체한 것이었다.

이 단계에서도:

- binary write = `NONE`
- README write = `NONE`

이었다.

### Final Filename-Bound Source Selection

최종 execution에서는 사용자가 명시적으로 선택한 attachment filename으로 source를 확정한 뒤, 그 실제 bytes에서 새 publication baseline을 생성했다.

```text
Explicit User Source Selection
→ Select Attachment
→ Calculate Source Size
→ Calculate SHA-256
→ Calculate Expected Git Blob
→ Freeze Publication Baseline
→ WRITE
→ READ BACK
→ VERIFY
```

`filename` 자체가 integrity proof라는 의미는 아니다. filename은 최종 source selection을 위한 context-specific identifier로 사용되었고, integrity는 이후 생성한 source size, SHA-256, expected Git blob과 repository read-back 비교로 검증했다.

### Final 5-Asset Batch Result

| Asset | Classification | Git Blob | Commit | Result |
| --- | --- | --- | --- | --- |
| `04-role-permission.png` | Sanitized Evidence | `5e891e1f32d8f343709afedce1581f3f0840652d` | `52d73cbb91c24e2371ad84982a650a651a6ad46c` | PASS |
| `05-side2-mirroring-derivative.png` | Public Visual Derivative | `1777b588a68586ef036fe1bceb342d44b52e6dc3` | `d9494dd43f85db1479bd90d66ad70a533c5c5296` | PASS |
| `06-cold-storage-overview.png` | Sanitized Evidence | `15f69c79f4d103c5e3c920c934623043ac870ad8` | `f2dbc50954391fe07bcca0e87fed7dd3933e0db9` | PASS |
| `07-cold-storage-detail-derivative.png` | Public Visual Derivative | `cd8ae7f8f4bc99ba80d39c4e5450b215422e2c22` | `38eaf5747238249b222accef06f3767d8b6fec15` | PASS |
| `08-stocktake-print.png` | Sanitized Evidence | `9282b15744a60f55e3b2cd9f1f072218dc2510b6` | `47f78a0d7d0a04189a612937f84ad7175386325a` | PASS |

README integration:

```text
Commit:
05bdd87a39bcae3805048485a1b9a3e88fe1afc0

Resulting blob:
859c71c7f9599e79ca9f9bc468e41d0db5e57379
```

Final public state:

- Sanitized Evidence = `6`
- Public Visual Derivatives = `2`
- Total public visual assets = `8`

### Observed Findings

1. 여러 binary source를 하나의 conversational task로 batch화해도 per-asset exact-byte verification을 유지할 수 있었다.
2. batch preflight가 source mismatch를 write 이전에 차단해 두 번의 invalid batch에서 repository mutation을 방지했다.
3. batch processing은 binary writes를 atomic transaction으로 만들지 않는다. 실제 writes는 sequential commits다.
4. 따라서 mid-batch failure가 발생하면 partial repository state가 남을 수 있으며, README publication은 별도 ALL-PASS gate로 보호해야 한다.
5. explicit user source selection과 integrity baseline은 구분해야 한다.
6. 사용자가 source를 의도적으로 변경했다면 stale predeclared hash가 새 source 선택보다 우선할 수 없다. 대신 선택된 source bytes에서 새 baseline을 생성하고 write/read-back으로 검증할 수 있다.
7. filename alone은 integrity evidence가 아니다.
8. binary integrity와 evidence classification도 구분해야 한다. exact-byte PASS라고 해서 Public Visual Derivative가 Sanitized Evidence가 되는 것은 아니다.
9. batch publication은 human approval / README update 횟수를 줄일 가능성을 보여줬지만, 실제 시간 / token / context-switching 절감은 아직 정량 측정되지 않았다.

### Batch Control Loop

```text
User Selects Final Sources
→ Identify Attachments
→ Establish Per-Asset Integrity Baseline
→ Batch Preflight
→ Sequential Binary WRITE
→ Per-Asset READ BACK
→ Per-Asset Integrity Verification
→ ALL-PASS Gate
→ Minimum Semantic Diff README Integration
→ README READ BACK
→ Semantic Scope Verification
```

### Claim Discipline

다음은 주장하지 않는다.

- filename-bound selection이 universal best practice다.
- filename 자체가 integrity를 보장한다.
- batch writes가 atomic하다.
- 이번 사례가 모든 multi-file publication을 검증한다.
- batch processing이 항상 더 빠르거나 싸다.
- Git as Action이 `METHODS`로 승격되었다.
- 8개 visual asset publication이 business impact를 증명한다.

Classification: `Operational observation / control refinement`

---

## 11. Measurement Plan

비용 효율을 주장하기 전에 실제 workload에서 비교 가능한 evidence를 수집해야 한다.

향후 동일하거나 유사한 task에서 다음 측정값을 기록할 수 있다.

| Metric | Description |
| --- | --- |
| task type | documentation, policy, code, registry, refactor 등 작업 유형 |
| elapsed human time | 사용자가 시작부터 verified result까지 투입한 시간 |
| AI execution/tool-call count | AI가 수행한 execution/tool call 수 |
| files read | 작업 과정에서 읽은 파일 수 |
| files written | 생성 또는 수정한 파일 수 |
| approval count | 사용자 승인 prompt 수 |
| coding-agent usage / credits | 측정 가능한 경우 coding-agent 사용량 또는 credit |
| number of context handoffs | Conversation ↔ IDE/agent 등 context 이동 횟수 |
| test/build iterations | test/build/debug 반복 횟수 |
| final commits | 최종 결과까지 발생한 commit 수 |
| rework required | 검증 후 재작업 필요 여부와 횟수 |
| verification result | read-back/test/build 등 최종 검증 결과 |

가능하다면 workload의 난이도와 output quality도 함께 기록해야 한다. 단순히 tool-call 수가 적다고 더 좋은 workflow라고 결론내리지 않는다.

측정의 목표는 **“우리 방식이 싸다”를 선언하는 것이 아니라, 어떤 workload에서 얼마나 유리하거나 불리한지를 evidence로 확인하는 것**이다.

---

## 12. Open Questions

현재 남아 있는 주요 질문은 다음과 같다.

- 어떤 작업까지 Git as Action으로 처리하는 것이 비용효율적인가?
- 어느 시점부터 coding agent에 위임해야 하는가?
- 실제 token/credit savings는 workload별로 얼마나 되는가?
- BRIDGE / Registry가 context rehydration cost를 얼마나 줄이는가?
- approval friction이 어느 수준이면 MCP/App 전환이 필요한가?
- multi-file atomic commit이 필요한가?
- 동일 policy layer를 ChatGPT, Claude, Codex에서 공유할 수 있는가?
- Context-Minimized Execution이 output quality를 저하시키는 경계는 어디인가?
- selective retrieval에 필요한 최소 registry 구조는 무엇인가?
- additional PNG / PDF evidence에서도 exact-byte write/read-back이 반복 검증되는가?
- binary asset 규모가 커질 때 practical / gateway boundary는 어디인가?
- multi-file binary/text promotion에서 atomicity 부재를 어떻게 관리할 것인가?
- agent-visible tool surface와 backend capability의 lifecycle을 어떻게 일관되게 관리할 것인가?
- actual token / elapsed time / context-switching을 어떤 workload 단위로 측정할 것인가?
- predeclared hash manifest와 explicit user source replacement 사이의 가장 안전한 source-selection contract는 무엇인가?
- sequential batch write에서 partial state를 더 명확하게 관리하기 위한 transaction / checkpoint model이 필요한가?
- 어떤 batch size부터 conversational Git action의 human-friction 감소 효과가 의미 있게 나타나는가?

---

## 13. Claim Discipline

이 연구 노트에는 MILES의 **Evidence Before Claims** 원칙을 적용한다.

현재 다음 항목은 보편적 사실이 아니라 **observed experience / hypothesis**로 구분한다.

### Observed Experience

- Claude Code / Codex 사용 시 체감 사용량 소진이 빠르게 느껴질 수 있었다.
- coding-agent workflow에서는 실제 변경 외에 repository exploration, execution output, 반복 context가 상당한 비중을 차지하는 경험이 있었다.
- 2026-08-10 한 개의 sanitized PNG에 대해 attachment transport → exact-byte Git write → repository read-back → size/SHA-256/blob verification closed loop가 PASS했다.

이 경험은 특정 사용자, 특정 task, 특정 plan, 특정 시점의 조건에 영향을 받을 수 있으므로 일반화하지 않는다. Binary 검증 역시 현재는 한 개 PNG 사례의 operational observation으로 제한한다.

### Hypothesis

- Git as Action 방식은 특정 non-code / mixed-knowledge workload에서 비용과 human context switching을 크게 감소시킬 가능성이 있다.
- BRIDGE와 Git을 external memory로 사용하면 반복적인 context reconstruction을 줄일 가능성이 있다.
- narrow policy-gated execution은 unnecessary agentic execution을 줄일 가능성이 있다.

실제 측정 전에는 이를 보편적 사실, 정확한 절감률 또는 모든 workload에 적용되는 결론으로 표현하지 않는다.

향후 measurement 결과가 현재 가설과 다르다면 문서를 가설에 맞추지 않고 **evidence에 맞춰 수정**한다.

---

## Working Position

현재 Git as Action의 핵심 working position은 다음과 같다.

> **Conversation is the control plane.**  
> **Git is the memory.**  
> **Policy is the boundary.**  
> **Execution uses the best tool for the task.**

한국어 의미:

> **대화는 통제면이고, Git은 기억이며, 정책은 경계다.**  
> **실행은 목적에 가장 적합한 도구가 담당한다.**

그리고 비용·context 관점의 추가 working hypothesis는 다음과 같다.

> **The cheapest context is the context an agent never had to load.**

한국어 의미:

> **가장 저렴한 컨텍스트는 애초에 에이전트가 불러올 필요가 없었던 컨텍스트다.**

이 두 문장은 현재 검증 중인 operating model을 요약하지만, 정식 METHODS 원칙으로 승격되기 전까지는 **research hypothesis**로 취급한다.
