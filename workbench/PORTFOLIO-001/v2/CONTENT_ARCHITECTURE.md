# PORTFOLIO-001 v2 — Personal Identity & Career Content Architecture

**Status:** Implementation Content Contract v0.3.0

This document defines the implementation-ready content contract for PORTFOLIO-001 v2.

It does **not** change the frozen page architecture, visual architecture, depth model, routing, evidence model, or frontend implementation. Its purpose is to move the portfolio subject from an abstract manufacturing-DX presentation toward a personal portfolio centered on **OH SEUNGHOON**: actual career, capability, work ownership, operating method, and bounded public claims.

## 1. Portfolio Subject & Identity Boundary

The portfolio subject is:

```text
OH SEUNGHOON
```

Primary relationship:

```text
OH SEUNGHOON
= owner / practitioner / subject of the portfolio

MILES
= work operating system
+ truth / evidence layer
```

MILES is **not** presented as:

- an employer
- a consulting firm
- a software vendor
- a separate corporate brand

Working principle:

> THE WORK IS MINE.  
> MILES KEEPS THE RECORD HONEST.

The portfolio communicates the person, work, judgment, execution, and career. MILES defines how work is recorded, bounded, verified, and reused.

## 2. Frozen L0 Homepage Contract

The top-level homepage architecture remains unchanged:

```text
POSITION
→ CAPABILITY
→ SELECTED WORK
→ WORK SPECTRUM
→ EVOLUTION
→ METHOD
```

No additional top-level homepage section is introduced by this content contract.

All new identity, career, technology, media, work-log, and MILES content must be placed **inside** these six frozen sections.

## 3. POSITION — Identity / Hero / About

### 3.1 Primary Identity

```text
OH SEUNGHOON
MANUFACTURING DX LEADER
```

Supporting domain line:

```text
MANUFACTURING
· PROCESS & FACILITY
· DIGITAL SYSTEMS
· DATA & AI
```

The portfolio must remain visibly rooted in manufacturing. Digital systems are presented as an expansion of manufacturing capability, not a departure from manufacturing.

### 3.2 Hero Thesis

Retain the existing English thesis:

```text
I NEVER LEFT
MANUFACTURING.

I EXPANDED
WHAT I COULD CHANGE.
```

Do **not** lock a literal Korean translation of `I NEVER LEFT MANUFACTURING.`

English and Korean have different content roles.

Preferred short Korean identity phrase:

```text
현장에서 시스템까지.
```

Working variants:

```text
현장에서 시작해, 시스템까지.
```

```text
현장을 읽고, 시스템으로 바꿉니다.
```

```text
현장에서 시작해, 변화의 범위를 넓혀왔습니다.
```

The implementation pass may select among these after visual review, but should not introduce translated marketing copy.

### 3.3 Primary Profile Statement

Working public positioning statement:

```text
현장의 병목을 진단하고,
데이터·시스템·자동화를 연결해
운영 정착까지 완수하는 제조 DX 리더.
```

Short English support:

```text
DOMAIN-LED TRANSFORMATION.
END-TO-END EXECUTION.
OPERATIONAL ADOPTION.
```

### 3.4 About Copy

Use the following professional narrative direction rather than a generic biography:

```text
16년간 제조 현장에서 생산·품질·공정·설비·시스템을 경험했습니다.

현장에서 반복되는 수기 업무와 개인의 경험에 의존하는 운영을
단순한 업무 불편이 아니라 구조의 문제로 봅니다.

As-Is를 직접 확인하고,
필요한 데이터를 구조화하고,
업무 흐름과 통제 기준을 설계한 뒤,
실제 현장에서 사용할 수 있는 시스템까지 구현해 왔습니다.

MES·WMS·ERP 같은 제조 시스템부터
데이터 파이프라인, 분석·예측, 자동화, AI까지
사용하는 기술은 달라져도 접근 방식은 같습니다.

구축 자체보다
실제로 계속 쓰이고,
검증되고,
개선되는 운영 시스템을 만드는 데 집중합니다.
```

Closing statement:

> Technology is a means.  
> Operational change is the outcome.

Avoid:

- motivational language
- generic DX buzzwords
- literal English-to-Korean translation style
- `혁신을 선도합니다`-style language
- unsupported ROI / impact language

## 4. Korean / English Copy Contract

English and Korean do **not** need to be direct translations.

### English role

- declaration
- rhythm
- atmosphere
- short conceptual framing

### Korean role

- actual explanation
- professional context
- operational meaning
- natural native phrasing

Preferred Korean style:

- short
- specific
- professional
- field-oriented
- native
- non-promotional

Avoid translated-marketing constructions such as:

```text
데이터는 이미 있었다.
전략적 언어로 번역되지 않았을 뿐.
```

Prefer:

```text
데이터는 있었지만,
의사결정에 바로 사용할 수 있는 구조는 아니었습니다.
```

Avoid:

```text
문제의 표면을 꾸미는 대신,
실제 운영 현실을 읽고 구조를 만들고
실행 가능한 형태로 바꾼다.
```

Prefer:

```text
현장에서 문제가 생기는 지점을 찾고,
원인을 구조화한 뒤,
실제로 작동하는 방식까지 구현합니다.
```

Korean copy should explain what happened and what was done. English copy may carry rhythm and atmosphere without becoming a substitute for evidence.

## 5. CAPABILITY — Four Core Strengths

The homepage CAPABILITY section should shift from abstract capability-first language toward four primary strengths.

### 01 — DOMAIN-LED DX STRATEGY

**현장 기반 DX 전략 설계**

Core statement:

```text
생산, 재고, 자재, 품질, 설비의 실제 흐름을 기준으로
병목과 운영 리스크를 정의하고,
시스템 도입 범위·우선순위·운영 정착까지 포함한
실행 가능한 전환 구조를 설계합니다.
```

Capability examples:

- As-Is / To-Be
- manufacturing workflow
- bottleneck diagnosis
- MES / WMS / ERP planning
- Process & Facility integration
- risk and adoption planning

### 02 — E2E SYSTEMS & CLOSED-LOOP ARCHITECTURE

**E2E 시스템 및 Closed-loop 아키텍처**

Core model:

```text
DATA
→ ANALYSIS / PREDICTION
→ DECISION
→ ACTION
→ RECORD
→ FEEDBACK
```

Core statement:

```text
데이터 수집에서 끝나지 않고,
분석과 판단이 행동으로 이어지고,
행동의 결과가 다시 시스템에 남는 닫힌 흐름을 설계하고 구현합니다.
```

System stability includes:

- data integrity
- exception handling
- schema drift defense
- audit / logs
- permissions
- validation
- fail-safe
- feedback loop

Key idea:

```text
데이터가 행동으로 이어지고,
행동의 결과가 다시 시스템에 남는 구조.
```

### 03 — OPERATIONAL ADOPTION & CHANGE MANAGEMENT

**사용자 정착 중심의 변화관리**

Core statement:

```text
시스템 구축 자체보다
현장에서 계속 사용되는 상태를 성공 기준으로 봅니다.
```

Design around:

- operator behavior
- usability
- readable UI
- minimal input burden
- role-based workflow
- operational rules
- exception cases
- training / handoff
- adoption feedback

Key phrase:

```text
BUILDING IS NOT THE FINISH LINE.
ADOPTION IS.
```

### 04 — DIGITAL ENGINEERING & IT EXECUTION

**Digital & IT Execution**

Core statement:

```text
기획과 요구사항 정의에 그치지 않고,
문제 해결에 필요한 데이터·웹·클라우드·자동화·AI 기술을
직접 연결하고 구현합니다.
```

Technology is subordinate to delivery. This strength must not become a technology-logo wall.

## 6. Digital & IT Competencies

Use the heading:

```text
SELECTED TECHNOLOGIES USED IN DELIVERY
```

Group technologies by implementation purpose rather than by prestige or equal-mastery presentation.

### DATA / CLOUD

- SQL
- BigQuery
- GCP
- Cloud Storage
- Cloud Run / Cloud Functions
- ETL / data pipeline

### AUTOMATION / INTEGRATION

- Google Apps Script
- REST API
- Google Sheets
- Gmail automation
- scheduled processing
- system integration

### ANALYTICS / AI

- Python
- pandas
- Colab
- machine learning
- forecasting
- LLM-assisted reporting
- Gemini
- Looker Studio
- Streamlit

### WEB / APPLICATION

- Next.js
- Tailwind CSS
- PostgreSQL
- Supabase
- Vercel
- Git / GitHub

Boundary:

- the list means selected technologies used in delivery
- it does not imply equal mastery across all technologies
- it does not imply certification
- `expert` / `advanced` labels require separate support before publication

## 7. SELECTED WORK — Ownership Contract

Every featured case should answer:

```text
WHAT WAS THE PROBLEM?
WHAT DID I DO?
WHAT WAS BUILT?
WHAT STATE DID IT REACH?
WHAT CAN BE PROVEN?
```

Each featured case should carry a visible field labeled either:

```text
MY ROLE
```

or:

```text
DIRECT CONTRIBUTION
```

Portfolio copy may clarify ownership. It must not override canonical FORGE state.

### 7.1 WMS — WAREHOUSE MANAGEMENT SYSTEM

Safe public problem:

```text
1,800여 개 위치를 포함한 수기 중심 창고 운영에서
위치와 실물 상태를 안정적으로 연결할 필요가 있었습니다.
```

Direct contribution:

```text
Problem Definition
· Data Architecture
· Full-stack Development
· UX
· Deployment
· Operational Design
```

Safe implementation summary:

```text
Next.js + PostgreSQL 기반으로
위치·품목·재고·수불 흐름을 연결하고,
모바일 현장 처리와 physical-digital mapping을 구현.
```

Canonical public state remains subordinate to `forge/WMS-001/`.

Do not automatically publish:

- labor saving amount
- vendor replacement cost
- inventory accuracy gain
- search-time reduction
- ROI

unless promoted by canonical evidence.

### 7.2 COLD — COLD CHAIN INTELLIGENCE

Direct contribution:

```text
Operational Problem Definition
· Analysis Model
· Data Pipeline
· Application
· Reporting Automation
· Operational Workflow
```

Safe system description:

```text
온도 데이터를
분석 → 운영 판단 → 보고 → 이력
으로 연결하는 관리 구조.
```

Canonical operating architecture:

```text
Deterministic analysis
→ maintenance-history context
→ LLM contextualization
→ human action
```

Boundaries:

- do not promote autonomous AI
- do not imply autonomous diagnosis / control / maintenance
- do not automatically publish ROI
- do not automatically publish external-solution savings
- do not automatically publish lead-time improvements
- canonical COLD evidence in `forge/COLD-001/` controls public claim strength

### 7.3 INVENTORY — INVENTORY DECISION SYSTEM

Direct contribution:

```text
Data Integration
· KPI Definition
· Analytics Structure
· Dashboard
· Forecast Integration
```

Preferred Korean problem copy:

```text
데이터는 있었지만,
의사결정에 바로 사용할 수 있는 구조는 아니었습니다.
```

Do not use the following as the primary Korean public copy:

```text
전략적 언어로 번역되지 않았을 뿐
```

Recognition / interview may appear as context inside the case Showcase. It is not measured business impact.

## 8. WORK SPECTRUM — Breadth, Not Resume Density

Maintain the six-domain taxonomy:

- Manufacturing & Operations
- Process & Facility Engineering
- Digital Execution Systems
- Data & Decision
- Enterprise Systems & Business Process
- Work Systems & Methods

Purpose:

```text
range of work
```

not:

```text
resume bullet density
```

Digital competencies may appear as a secondary layer within this section, but the section should remain a map of work breadth rather than a tool inventory.

## 9. Professional Experience / Career Spine

Company names are intentionally omitted from the homepage content model.

Use career stages rather than employer-first résumé blocks.

The following ranges are **working career-stage allocations** and require verification of exact dates / titles before public implementation.

### 2009–2023 — MANUFACTURING FOUNDATION

Working domains:

- Production Management
- Quality
- Process & Facility Engineering
- Food Safety
- SAP PP participation

Narrative focus:

- physical manufacturing
- production operation
- quality systems
- process / facility improvement
- enterprise-system exposure

### 2023–2024 — MES & PROCESS TRANSFORMATION

Working domains:

- Production Management
- MES
- Manufacturing Data
- Process Optimization

Narrative focus:

- manufacturing operations
- MES implementation
- data standardization
- physical process improvement

### 2025–2026 — BUILDING OPERATING SYSTEMS

Working domains:

- Data
- Automation
- WMS
- Cold Chain
- Dashboards
- AI-assisted Operations

Narrative focus:

```text
moving from system user / manager
→ direct builder of operating tools
```

### 2026– — ENTERPRISE TRANSFORMATION

Working domains:

- ERP / SAP PI
- PMO
- Enterprise Process
- Data Architecture
- Operating Model

Narrative focus:

```text
connecting field execution
→ enterprise systems
→ operating governance
```

Boundary:

Exact dates, titles, role descriptions, and quantitative outcomes require verification before public implementation.

## 10. Physical Process & Facility Engineering Thread

Physical manufacturing engineering must remain visible throughout the portfolio.

The career must not be framed as a pure IT / developer transition.

Keep a visible thread covering, where source support exists:

- production-line optimization
- bottleneck analysis
- equipment layout
- process capacity
- P&ID
- production-equipment expansion
- utilities
- food safety / quality systems

Core interpretation:

> Digital systems are an expansion of manufacturing capability, not a departure from manufacturing.

Do not collapse physical Process & Facility Engineering into ERP Business Process. They are separate capability domains.

## 11. Career Metric Gating

The career history contains strong quantitative candidate claims. They are **not automatically public verified claims**.

Candidate claim families include:

### MES

- cost error `30% → within 5%`
- data aggregation time `-80%`
- processing `100%`
- material match `99%`

### WMS

- labor saving estimate
- external-build-cost defense estimate

### COLD

- inspection labor reduction
- detection lead-time reduction
- external monitoring solution cost estimate

### Inventory

- monthly aggregation time reduction
- production / shipment forecasting accuracy

### Process Optimization

- CAPA improvement
- productivity improvement
- fixed / labor cost reduction

### Historical Process Engineering

- utility / material savings
- CAPEX-related benefits

Every numeric claim must be assigned one of the following statuses before publication:

```text
VERIFIED
CORROBORATED
INTERNAL ESTIMATE
SELF-REPORTED
PENDING VERIFICATION
NOT PUBLIC
```

Rules:

1. FORGE canonical state overrides portfolio copy.
2. `Measured Business Impact — Not Yet Established` cannot become ROI in the portfolio.
3. Internal estimates must be visibly classified.
4. Work-log statements are documentary evidence, not automatic measured-impact evidence.
5. Unsupported numbers stay out of L0.
6. A strong number in a historical résumé / presentation is not automatically a verified performance metric.
7. Portfolio copy must preserve the difference between observed state, implemented system, operational use, estimate, and measured impact.

## 12. EVOLUTION — Career + Longitudinal Work Log

Retain the conceptual evolution model:

```text
MANAGE
→ ENGINEER
→ BUILD
→ CONNECT
→ COMPOUND
```

But connect it to actual career stages and longitudinal working history.

### 12.1 Career layer

Use the four working career stages from this document to explain how the work expanded from manufacturing operations and engineering into system building, data, automation, AI-assisted operations, and enterprise transformation.

### 12.2 Contemporaneous work-log layer

Label:

```text
CONTEMPORANEOUS WORK LOG
```

Source families for a future verified implementation include:

- `AI생산관리_일지`
- `SOURCE-LOG-001_AI_Production_Management_Log.docx`

Working narrative:

```text
DATA ANALYSIS
→ DASHBOARD / AUTOMATION
→ OPERATIONAL APPLICATION
→ AI-ASSISTED REPORTING
→ WMS / MRP / CLOUD SYSTEMS
→ MILES
```

Purpose:

- show how implementation scope expanded over time
- document working pattern and continuity
- show movement from analysis toward operational systems and reusable methods

Boundary:

- this timeline supports evolution / working-pattern narrative
- it does not prove business ROI by itself
- source dates and content must be verified before public implementation
- do not expose private infrastructure values
- do not expose API endpoints
- do not expose bucket names
- do not expose internal file IDs
- do not expose credentials or sensitive system details

## 13. Media & Recognition Placement

Do not create a separate top-level homepage section for media.

Media belongs inside the relevant case, especially Inventory.

User-supplied external media reference:

```text
https://www.youtube.com/watch?v=WmTZzY881Bo
```

Working module:

```text
MEDIA / RECOGNITION

SELECTED DIGITAL TRANSFORMATION CASE

WATCH INTERVIEW ↗
```

Rules:

- video is recognition / diffusion context
- recognition is not independent ROI validation
- do not invent awards
- do not infer audience / view count
- do not infer organization-wide impact
- do not quote video content unless independently reviewed
- no embed is created by this content-contract pass

## 14. METHOD — MILES Work Operating System

MILES belongs primarily in the frozen `METHOD` section.

Working heading:

```text
MILES
WORK OPERATING SYSTEM
```

Definition:

```text
실제 업무를 실행하고,
기록하고,
검증하고,
다음 작업에 다시 사용할 수 있는 형태로 축적하는
업무 운영체계.
```

Working loop:

```text
INTENT
→ EXECUTION
→ VERIFICATION
→ MEMORY
→ REUSE
```

MILES principles:

- truth before presentation
- evidence before claim amplification
- bounded changes
- read-back verification
- durable repository memory
- reusable work patterns

Relationship to portfolio:

```text
Portfolio controls the experience.
MILES controls the truth.
```

## 15. Docs as Code

Working definition:

```text
문서를 일회성 파일로 만들지 않고,
버전·변경 이력·검증 가능한 상태를 가진
운영 자산으로 관리하는 방식.
```

Core values:

- versionability
- traceability
- reproducibility
- reuse
- publishing
- controlled revision

Boundary:

Docs as Code must not be reduced to `Markdown files in Git`. The concept is about operational document state, revision discipline, traceability, reproducibility, and reuse.

## 16. Feature as Code

Working definition:

```text
분석·대시보드·업무 기능을
일회성 결과물이 아니라
다시 실행하고 확장할 수 있는 기능 단위로 관리하는 방식.
```

Core values:

- reusable feature units
- explicit data contract
- repeatable transformation
- validation
- deployment / operation path
- incremental improvement

Working flow:

```text
SOURCE
→ CONTRACT
→ TRANSFORM
→ FEATURE
→ VALIDATE
→ OPERATE
```

## 17. Git as Action

Working definition:

```text
자연어로 정의한 작업 의도를
제한된 repository change로 변환하고,
commit / read-back / integrity verification까지 연결하여
대화가 실제 실행 이력으로 남도록 하는 방식.
```

Core values:

- bounded intent
- controlled write
- commit history
- read-back
- integrity
- rollbackability
- durable memory

Working flow:

```text
INTENT
→ BOUNDED CHANGE
→ WRITE
→ READ-BACK
→ VERIFY
→ COMMIT MEMORY
```

Boundary:

Git as Action is **not** autonomous software engineering. Human intent, approval, scope, and claim boundaries remain primary.

## 18. Evidence as Memory

Optional fourth MILES method.

Working definition:

```text
스크린샷,
코드,
Git 기록,
운영 로그,
업무일지,
문서 산출물을 연결해

무엇을 했는지

and

무엇까지 입증할 수 있는지

를 함께 관리하는 방식.
```

Evidence chain:

```text
WORK LOG
→ DECISION
→ IMPLEMENTATION
→ OPERATION
→ VERIFIED CLAIM
```

Evidence as Memory does not turn every work artifact into proof of business impact. Classification and claim boundaries still apply.

## 19. Future Homepage Content Mapping

The eventual implementation should map content into the existing frozen L0 architecture as follows.

### POSITION

- OH SEUNGHOON
- Manufacturing DX Leader
- existing English Hero thesis
- short Korean identity phrase
- primary positioning statement
- professional About copy

### CAPABILITY

Four Core Strengths:

1. Domain-led DX Strategy
2. E2E Systems & Closed-loop Architecture
3. Operational Adoption & Change Management
4. Digital Engineering & IT Execution

### SELECTED WORK

- WMS
- COLD
- Inventory

Each featured case includes:

- problem
- `MY ROLE` / `DIRECT CONTRIBUTION`
- built state
- operational state where supported
- claim boundary
- what can be proven

Inventory may include the Media / Recognition module after separate implementation review.

### WORK SPECTRUM

- six-domain work taxonomy
- selected technologies as a secondary implementation-purpose layer

### EVOLUTION

- career spine
- conceptual `MANAGE → ENGINEER → BUILD → CONNECT → COMPOUND`
- `CONTEMPORANEOUS WORK LOG` layer

### METHOD

- MILES
- Docs as Code
- Feature as Code
- Git as Action
- Evidence as Memory
- truth / claim rules

## 20. Public Claim Gate

Before any content from this contract is promoted into frontend copy, apply the following gate.

### Identity / Role language

May be implemented when it accurately reflects the intended portfolio subject and does not imply an employer, certification, or externally awarded title that has not been established.

### Career chronology

Working ranges in this document require verification before exact-date public implementation.

### Technology language

Use `selected technologies used in delivery`. Do not present an unverified mastery scale.

### Case state

Use canonical FORGE / MILES state where it exists.

### Metrics

No number enters L0 without a status:

```text
VERIFIED
CORROBORATED
INTERNAL ESTIMATE
SELF-REPORTED
PENDING VERIFICATION
NOT PUBLIC
```

### Recognition

Recognition / interview / sharing demonstrates diffusion context only. It does not become independent validation of financial or operating impact.

### AI

`LLM-assisted` / `AI-assisted` must not become autonomous operation unless separately established.

### Physical engineering

`reviewed`, `planned`, `engineered`, `implemented`, `constructed`, and `operational` remain distinct states.

## 21. Implementation Boundary

This file is a content contract only.

This pass does **not** modify or create:

- `index.html`
- `styles.css`
- `app.js`
- `work/index.html`
- `_template/**`
- any other frontend file
- route correction
- WMS Deep Dive
- COLD Deep Dive
- case promotion
- evidence promotion
- metric promotion
- binary asset
- YouTube embed
- screenshot
- visual derivative

Existing v2 structure, design architecture, module library, visual system, and frontend remain protected.

## 22. Implementation-Readiness Checklist

A future content implementation pass should not begin until it can answer the following:

1. Is `OH SEUNGHOON` visually primary and MILES correctly positioned as the work operating system / truth layer?
2. Does the homepage still use the frozen six-section L0 hierarchy?
3. Does Korean copy read naturally rather than as translated marketing copy?
4. Are the Four Core Strengths clear without turning into a tool wall?
5. Does each Selected Work case show direct contribution / ownership?
6. Does WMS copy defer to canonical WMS state?
7. Does COLD copy defer to canonical COLD state and retain the human-action boundary?
8. Is Inventory recognition clearly separated from measured impact?
9. Is physical Process & Facility Engineering still visible as a major career thread?
10. Are career dates / titles verified before exact public implementation?
11. Are numeric claims status-gated before publication?
12. Does EVOLUTION connect career stages with longitudinal working history without turning work logs into ROI proof?
13. Does METHOD explain MILES as an operating system rather than a company or product brand?
14. Are Docs as Code, Feature as Code, Git as Action, and Evidence as Memory described as work methods with explicit boundaries?
15. Have private infrastructure, IDs, endpoints, credentials, and internal values remained outside public copy?

If any answer is `NO`, content should remain in contract / draft state rather than be promoted into public frontend copy.
