# Abstraction Lift — Working Research Note

**Status:** Working Research Note  
**Working Name:** Abstraction Lift  
**Artifact Class:** BRIDGE / research note, not yet a formal `METHODS` artifact  
**Validation State:** Hypothesis pending evidence from real implementation work

이 문서는 AI를 활용한 시스템 설계·구현에서 나타나는 하나의 working hypothesis를 기록한다. 아직 반복 검증된 방법론이 아니며, 향후 실제 Case와 구현 결과를 통해 수정·반박·정제되어야 한다.

## Core Hypothesis

AI를 활용하면 사용자가 직접 구현할 수 있는 기술적 능력의 상한을 넘어서는 시스템을 설계하고 구현할 수 있다. 그러나 그 과정에서 **무엇을 만들 것인지, 어떤 제약을 지켜야 하는지, 결과가 맞는지를 판단하는 통제권까지 AI에 넘기는 것은 아니다.**

이 가설을 다음 문장으로 요약한다.

> **Build beyond your implementation ceiling.**

직접 코딩·구현 능력이 시스템의 최대 복잡도를 결정하지 않도록 한다. AI나 coding agent가 구현 세부를 담당할 수 있다면, 인간은 더 높은 abstraction level에서 문제, 구조, 비즈니스 규칙, acceptance criteria와 검증에 집중할 수 있다.

동시에 다음 원칙을 유지한다.

> **Implementation is delegated, intent is retained.**

구현은 위임할 수 있지만 의도는 위임하지 않는다.

---

## 1. What Is Being Lifted?

Abstraction Lift에서 “lift”되는 것은 단순히 코드를 덜 작성한다는 의미가 아니다.

사용자의 작업 중심이 다음과 같이 이동할 수 있다는 가설이다.

```text
Direct Implementation
→ Feature / Rule Definition
→ Architecture / Constraint Definition
→ Delegated Implementation
→ Evidence / Verification
```

사람이 모든 세부 구현을 직접 수행하지 않아도 다음에 대한 책임은 유지한다.

- problem framing
- intended outcome
- business rules
- system boundaries
- operational constraints
- unacceptable failure modes
- acceptance criteria
- evidence requirements
- final verification

AI는 이 의도를 실제 코드, 설정, 문서, integration, automation 등으로 변환하는 implementation capacity를 제공할 수 있다.

---

## 2. Build Beyond Your Implementation Ceiling

전통적으로 개인이나 소규모 팀이 만들 수 있는 시스템의 범위는 직접 보유한 구현 능력과 강하게 연결된다.

예를 들어 다음 요소가 실제 구현의 상한이 될 수 있다.

- 익숙하지 않은 programming language
- frontend / backend / database 경계
- infrastructure knowledge
- API integration
- testing patterns
- deployment details
- unfamiliar libraries or frameworks

AI-assisted implementation은 이러한 장벽 일부를 낮출 수 있다.

따라서 working hypothesis는 다음과 같다.

> 사용자가 모든 세부 구현 기술을 직접 보유하지 않아도, 문제와 의도, 제약, 검증 기준을 충분히 통제할 수 있다면 더 높은 수준의 시스템을 설계·구현할 수 있다.

그러나 이것은 “모르는 기술도 AI가 알아서 완벽하게 만든다”는 주장이 아니다. 구현 능력의 상한이 올라갈 수 있다는 것과 결과를 이해·검증할 역량이 충분하다는 것은 서로 다른 문제다.

---

## 3. Implementation Is Delegated, Intent Is Retained

Abstraction Lift의 핵심 경계는 **implementation delegation**과 **intent ownership**을 분리하는 데 있다.

AI에 위임할 수 있는 영역의 예:

- code generation
- boilerplate
- framework-specific implementation
- repetitive transformations
- test scaffolding
- integration code
- documentation drafts
- mechanical repository changes

인간이 유지해야 하는 영역의 예:

- 왜 이 시스템이 필요한가
- 무엇이 성공인가
- 어떤 business rule이 절대 깨지면 안 되는가
- 어떤 trade-off를 허용할 것인가
- 어떤 데이터가 신뢰 가능한가
- 어떤 failure mode가 위험한가
- 어떤 evidence가 완료를 증명하는가

이 관점에서 인간의 역할은 “모든 코드를 직접 작성하는 사람”에서 “의도와 경계를 정의하고 실행 결과를 검증하는 사람”으로 일부 이동할 수 있다.

---

## 4. Capability ≠ Competence

AI가 더 많은 것을 구현할 수 있게 해준다고 해서 사용자가 그 모든 영역에서 competent해졌다는 의미는 아니다.

> **Capability ≠ Competence**

- **Capability**: AI와 도구를 포함한 전체 시스템이 무엇을 만들어낼 수 있는가
- **Competence**: 인간 또는 팀이 그 결과의 타당성, 위험, 한계를 얼마나 이해하고 판단할 수 있는가

AI는 capability를 빠르게 확장할 수 있다. 그러나 competence가 같은 속도로 증가한다고 가정해서는 안 된다.

따라서 capability가 competence를 앞지를수록 다음이 더 중요해진다.

- explicit constraints
- independent verification
- evidence
- testing
- observability
- rollback / reversibility where applicable
- source-of-truth discipline
- human review at consequential boundaries

Abstraction Lift의 목적은 competence의 부족을 숨기는 것이 아니라, **더 큰 capability를 더 강한 verification discipline과 결합하는 것**이다.

---

## 5. Verification Must Rise With Capability

구현 범위가 커질수록 “AI가 만들었으니 아마 맞을 것”이라는 신뢰 방식은 더 위험해진다.

working principle:

```text
Capability ↑
→ Verification Requirement ↑
→ Evidence Requirement ↑
→ Testing Requirement ↑
```

AI가 사용자의 직접 구현 능력을 넘어서는 영역을 다룰수록 결과를 검증하는 방식은 더 명시적이어야 한다.

예:

- requirement → acceptance criteria
- business rule → executable or inspectable checks
- repository write → commit + read-back verification
- data transformation → before/after evidence
- workflow automation → failure-path testing
- unfamiliar code → tests, runtime evidence, review, documentation

즉, abstraction이 올라갈수록 검증을 줄이는 것이 아니라 **검증 구조를 더 강화해야 한다.**

---

## 6. Difference From Generic Vibe Coding

Abstraction Lift는 일반적으로 말하는 vibe coding과 일부 표면적 유사성이 있다.

공통점은 사용자가 모든 구현 세부를 직접 작성하지 않고 자연어와 AI를 통해 결과를 만든다는 점이다.

그러나 MILES에서 검토하는 working model은 다음 요소를 더 강하게 요구한다.

### Intent Is Explicit

원하는 느낌만 전달하는 것이 아니라 problem, constraint, business rule, desired outcome을 가능한 한 명시한다.

### Source of Truth Is Externalized

세션의 기억보다 Git의 실제 상태를 기준으로 한다.

### Policy Defines Boundaries

AI의 action과 publication 범위에 명시적인 policy boundary를 둔다.

### Verification Is Part of the Work

생성 자체를 완료로 보지 않고, 가능한 경우 test, evidence, commit/read-back, operational observation을 통해 결과를 검증한다.

### Evolution Is Recorded

완성된 결과만 보여주는 것이 아니라 어떤 판단과 수정 과정을 거쳤는지 durable history에 남긴다.

따라서 Abstraction Lift를 “vibe coding보다 우월한 방법”이라고 주장하지 않는다. Vibe coding이라는 용어 자체도 넓게 사용되며, 실제 workflow는 사용자마다 다르다.

현재 차별화 가설은 단순한 자연어 기반 생성보다 **intent retention + policy boundary + durable memory + verification discipline**의 결합에 있다.

---

## 7. Relationship to Git as Action

`bridge/GIT_AS_ACTION_RESEARCH_NOTE.md`의 핵심 working position은 다음과 같다.

```text
Conversation = control plane
Git = memory
Policy = boundary
Execution = best tool for the task
```

Abstraction Lift는 이 구조에서 **왜 implementation execution을 다른 도구에 위임할 수 있는가**를 설명하는 상위 가설로 볼 수 있다.

Git as Action이 repository action의 최소 필요 맥락과 constrained execution에 초점을 둔다면, Abstraction Lift는 인간의 역할을 다음과 같이 정의한다.

```text
Human intent / constraints
→ AI-assisted reasoning
→ delegated execution
→ Git memory
→ evidence / verification
→ human decision
```

즉, execution은 위임되지만 control plane의 핵심인 intent와 verification responsibility는 남는다.

---

## 8. Relationship to Feature as Code

이 research note에서 `Feature as Code`는 아직 별도의 정식 MILES Method로 확정하지 않는다. 여기서는 다음 working concept 수준에서만 다룬다.

**Feature를 단순한 UI 요구나 ticket이 아니라, business intent·rule·state transition·acceptance condition을 구현 가능한 형태로 연결하는 방식.**

Abstraction Lift 관점에서 Feature as Code는 다음 질문을 다룬다.

> 인간이 구현 세부 전체를 직접 작성하지 않더라도, feature의 의도와 비즈니스 규칙을 충분히 명시하면 AI 또는 execution tool이 구현을 담당할 수 있는가?

따라서 Git as Action과 Feature as Code를 관통하는 working hypothesis는 다음과 같다.

```text
Human retains intent
→ intent is made explicit
→ execution is delegated
→ durable result is written to Git
→ evidence verifies the result
→ human retains decision authority
```

Git as Action은 **action delegation과 durable memory** 측면을 강조하고, Feature as Code는 **feature intent와 implementation 사이의 abstraction boundary**를 강조한다.

Abstraction Lift는 두 아이디어를 연결하는 상위 working hypothesis다.

---

## 9. Where This Can Fail

Abstraction Lift에는 명확한 실패 가능성이 있다.

### Ambiguous Intent

사용자가 원하는 결과를 명확히 정의하지 못하면 AI는 구현 속도만 높이고 잘못된 방향으로 더 빨리 갈 수 있다.

### Hidden Constraints

현장 규칙이나 operational constraint가 대화와 artifact에 명시되지 않으면 구현은 기술적으로 맞아도 실제 업무에서는 실패할 수 있다.

### Verification Gap

사용자가 구현 세부를 이해하지 못하는 동시에 test/evidence도 부족하면 capability가 증가한 만큼 risk도 커질 수 있다.

### False Confidence

작동하는 demo를 production-ready system으로 오인하거나, generated code를 이해 가능한 architecture로 착각할 수 있다.

### Dependency on Tool Quality

AI model, coding agent, framework, runtime, integration quality에 따라 실제 구현 능력과 실패 패턴이 크게 달라질 수 있다.

### Maintenance Gap

처음 만드는 것은 가능해도 장기적인 debugging, migration, security update, architecture evolution을 수행할 competence가 부족할 수 있다.

따라서 “AI가 만들어주면 구현 지식이 필요 없다”는 결론은 이 research note의 입장이 아니다.

---

## 10. Control Model

현재 제안하는 control model은 다음과 같다.

```text
Intent
→ Constraints
→ Architecture / Business Rules
→ Delegated Implementation
→ Test / Evidence
→ Verify Against Intent
→ Accept / Refine / Reject
```

인간이 유지해야 하는 통제권은 최소 다음 세 가지다.

### Intent Control

무엇을 왜 만드는지 결정한다.

### Constraint Control

보안, 운영, business rule, scope, failure boundary를 정의한다.

### Verification Control

어떤 evidence가 “완료”를 의미하는지 정의하고, 실제 결과가 이를 만족하는지 확인한다.

이 세 가지가 유지되지 않으면 implementation delegation은 abstraction lift가 아니라 단순한 responsibility loss가 될 수 있다.

---

## 11. Evidence Needed

이 가설을 METHODS로 승격하려면 실제 Case에서 반복적으로 evidence를 축적해야 한다.

향후 기록할 후보:

- 사용자가 직접 구현하기 어려웠던 기술 영역
- AI / coding agent에 위임한 구현 범위
- 인간이 명시한 intent / business rules / constraints
- acceptance criteria
- generated or delegated implementation scope
- test / build / runtime verification
- defects found during verification
- rework required
- implementation knowledge gap이 실제 운영에 만든 문제
- 유지보수 가능성
- human time / tool-call / context-switching cost
- 최종 operational outcome

특히 “직접 만들 수 없던 것을 만들었다”는 사실만으로 성공을 선언하지 않는다. **실제로 맞게 작동했고, 유지 가능한가**까지 evidence가 필요하다.

---

## 12. Open Questions

- 사용자의 implementation ceiling을 넘는 지점은 어떻게 측정할 수 있는가?
- capability와 competence의 격차가 어느 수준부터 위험해지는가?
- 어떤 종류의 system은 intent/constraint 중심 delegation에 적합한가?
- 어떤 영역에서는 직접 technical competence가 필수적인가?
- verification burden은 capability 증가에 따라 얼마나 커지는가?
- test가 충분하지 않은 non-code / operational artifact는 어떻게 검증해야 하는가?
- Feature as Code를 business rule, acceptance criteria, code와 어떻게 연결해야 하는가?
- Git as Action과 coding agent 사이의 delegation boundary는 어떻게 결정해야 하는가?
- AI가 만든 시스템의 장기 유지보수 competence를 어떻게 확보할 것인가?
- 반복 Case에서 검증되면 어떤 부분이 METHODS로 승격될 수 있는가?

---

## 13. Claim Discipline

MILES의 **Evidence Before Claims** 원칙을 적용한다.

현재 다음은 working hypothesis다.

- AI를 통해 사용자의 직접 구현 능력 상한을 넘어서는 시스템을 만들 수 있는 범위가 확대될 수 있다.
- 인간이 intent, constraints, verification을 유지하면 implementation delegation이 더 높은 abstraction level의 작업을 가능하게 할 수 있다.
- Git as Action과 Feature as Code는 이러한 abstraction lift를 서로 다른 execution boundary에서 표현할 수 있다.
- capability가 커질수록 evidence와 testing의 중요성이 증가한다.

아직 다음을 확정 사실로 주장하지 않는다.

- AI를 사용하면 누구나 복잡한 production system을 안전하게 만들 수 있다.
- 구현 지식이 더 이상 필요하지 않다.
- Abstraction Lift가 전통적인 software engineering보다 항상 빠르거나 싸다.
- AI-generated implementation이 human-written implementation보다 본질적으로 우수하다.
- 모든 workload에서 동일한 delegation model이 작동한다.

향후 실제 Case의 evidence가 현재 가설과 충돌한다면 문서를 가설에 맞추지 않고 evidence에 맞춰 수정한다.

---

## Working Position

현재 Abstraction Lift의 working position은 다음과 같다.

> **Build beyond your implementation ceiling.**  
> **Implementation is delegated, intent is retained.**  
> **Capability ≠ Competence.**

그리고 capability가 증가할수록 다음을 함께 강화한다.

> **More capability requires more verification, evidence, and testing — not less.**

이 원칙은 현재 Git as Action과 Feature as Code를 관통하는 **working hypothesis**이며, 실제 Case를 통해 충분한 evidence가 쌓이기 전까지 `METHODS`로 승격하지 않는다.
