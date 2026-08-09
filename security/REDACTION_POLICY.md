# MILES Redaction Policy

MILES 저장소 `ohsh-harimpetfood/miles`는 **public repository**를 전제로 운영합니다. 따라서 저장소에 커밋되는 모든 콘텐츠는 외부에 공개되어도 되는 정보만 포함해야 합니다.

이 정책의 목적은 실제 제조·운영 경험에서 얻은 엔지니어링 지식과 의사결정 구조는 보존하면서, 회사·고객·협력사·개인 및 운영에 관한 민감정보가 공개되지 않도록 일관된 기준을 제공하는 것입니다.

## Core Principle

MILES는 **방법과 학습은 보존하고, 민감한 식별자와 내부 세부사항은 제거하거나 일반화**합니다.

공개 여부가 불분명한 정보는 공개 가능한 것으로 추정하지 않습니다. 민감성이나 공개 권한이 명확하지 않다면 저장소에서 제외하는 것이 기본 원칙입니다.

## Information That Must Not Be Published

다음 정보는 명시적인 공개 승인 없이 MILES에 저장하지 않습니다.

### Company Confidential Information

- 비공개 전략, 사업 계획, 가격 정책, 원가 구조
- 내부 계약 조건, 미공개 프로젝트 또는 제품 정보
- 비공개 설비 구성, 제조 레시피, 공정 노하우 등 경쟁상 민감한 세부사항
- 내부 문서 원문 또는 사내 시스템에서만 접근 가능한 자료

### Customer and Partner Information

- 고객사, 공급사, 협력사 등 제3자를 식별할 수 있는 비공개 명칭
- 계약, 거래 조건, 발주·납품·품질 이슈 등 관계사의 비공개 정보
- 제3자의 내부 시스템, 데이터 구조, 운영 방식에 관한 민감한 세부사항

### Personal Information

- 이름, 개인 이메일, 전화번호, 주소 등 개인을 직접 식별할 수 있는 정보
- 직원번호, 계정명, 개인별 업무 기록 등 개인과 연결될 수 있는 내부 식별자
- 개인의 평가, 행동, 건강, 급여 또는 기타 민감정보

### Credentials and Secrets

다음 항목은 어떤 경우에도 저장하지 않습니다.

- 비밀번호
- API key
- access token / refresh token
- GitHub Personal Access Token
- private key
- 인증서의 비밀 키
- `.env` 파일 또는 그에 준하는 비밀 설정
- database connection string에 포함된 인증정보
- 세션 쿠키 및 기타 인증 가능한 값

비밀정보가 실수로 노출된 경우 단순 삭제 커밋만으로 충분하다고 간주하지 않습니다. 해당 비밀은 별도의 안전한 절차에 따라 즉시 폐기·회전해야 합니다.

### Internal Operating Metrics

외부 공개 승인이 없는 구체적인 내부 운영 수치는 저장하지 않습니다. 예:

- 생산량, 수율, 불량률, 폐기율
- 설비 가동률, OEE, downtime
- 원가, 매출, 마진, 재고 규모
- 고객별 물량이나 거래 규모
- 내부 KPI 목표 및 실적
- 공정 capability 또는 성능을 구체적으로 추정할 수 있는 수치

### Technical & Infrastructure Identifiers

public repository에 기술 문서, 코드 예시, 로그, 스크린샷, 아키텍처 설명을 공개할 때 실제 운영 환경을 직접 또는 간접적으로 식별할 수 있는 값은 별도의 검토 대상으로 취급합니다.

다음과 같은 정보는 공개 전 Generalize 또는 Exclude 필요성을 검토합니다.

- internal hostname
- private IP address
- production 또는 private URL
- database project 또는 instance identifier
- storage bucket name
- internal API endpoint
- VPN 또는 private network topology
- exact facility 또는 location identifier
- detailed rack/location coding scheme
- internal identifier를 포함하는 QR payload
- internal repository/path name
- non-public database schema detail
- 기타 단독으로는 무해해 보여도 다른 정보와 결합될 경우 내부 시스템, 운영 환경 또는 공격 표면을 식별할 수 있는 정보

기술·인프라 정보는 다음 원칙으로 처리합니다.

- **아키텍처와 엔지니어링 원리는 가능한 한 보존합니다.** 시스템 경계, 데이터 흐름, 설계 선택, trade-off, 재사용 가능한 패턴은 민감한 실제 값을 제거한 형태로 설명할 수 있습니다.
- **실제 운영 환경을 직접 식별하는 값은 Generalize 또는 Exclude합니다.** hostname, IP, private URL, instance ID, bucket name, 내부 endpoint 등은 일반 명칭이나 비식별 placeholder로 대체하거나 필요하지 않다면 제거합니다.
- **보안상 민감하지 않은 기술 스택이나 일반적인 설계 패턴은 Publish할 수 있습니다.** 공개된 제품명, 일반적인 프로토콜, 보편적인 아키텍처 패턴 등은 그것만으로 내부 환경을 식별하거나 공격 가능성을 높이지 않는 경우 공개할 수 있습니다.
- **조합 위험을 검토합니다.** 개별 값이 각각 무해해 보여도 hostname + facility code + schema name + endpoint와 같이 조합했을 때 재식별이나 공격 표면 식별이 가능해질 수 있으므로 전체 맥락을 함께 검토합니다.

예를 들어 실제 `prod-db-01`, 사설 IP, 특정 공장 코드, 내부 API 경로를 그대로 공개하는 대신 `production database`, `private network`, `manufacturing site`, `internal API`처럼 엔지니어링 의미를 유지하는 일반 표현을 사용합니다.

## Publish, Generalize, or Exclude

MILES 콘텐츠를 작성할 때 정보는 다음 세 가지 방식 중 하나로 처리합니다.

### 1. Publish

다음 조건을 만족하는 정보는 원형에 가깝게 공개할 수 있습니다.

- 이미 공식적으로 공개된 정보
- 공개 권한이 명확하게 확인된 정보
- 개인·회사·고객·협력사를 식별하지 않는 일반적 기술 정보
- 보안상 민감하지 않은 기술 스택과 일반적인 설계 패턴
- 공개되어도 보안, 계약, 경쟁상 위험이 없는 내용

### 2. Generalize

엔지니어링 맥락은 중요하지만 구체적인 식별자나 수치가 민감한 경우 일반화합니다.

예:

```text
실제 회사명 → "식품 제조사", "협력사 A"
실제 라인명 → "포장 라인", "생산 라인 A"
정확한 생산량 → "고물량 생산 환경"
정확한 불량률 → "유의미한 불량 증가"
직원 이름 → "현장 운영자", "품질 담당자"
내부 시스템명 → 기능 중심의 일반 명칭
내부 hostname / endpoint → "production service", "internal API"
정확한 시설·rack 코드 → 기능 또는 영역 중심의 일반 명칭
정확한 날짜·시간 → 사건 이해에 필요한 범위로 축소
```

일반화 후에도 여러 정보를 조합해 실제 조직, 고객, 개인, 시설 또는 내부 시스템을 쉽게 재식별할 수 있다면 추가로 제거하거나 콘텐츠 자체를 제외합니다.

### 3. Exclude

다음 경우에는 일반화하지 않고 저장소에서 완전히 제외합니다.

- 인증정보나 비밀값
- 법적·계약상 공개가 금지된 정보
- 일반화하더라도 재식별 가능성이 높은 개인정보
- 공개 시 회사 또는 제3자의 보안·영업·운영상 피해를 유발할 수 있는 세부사항
- 공격 표면을 구체적으로 식별하거나 실제 운영 환경 접근에 도움을 줄 수 있는 기술·인프라 세부사항
- MILES의 엔지니어링 학습을 전달하는 데 필요하지 않은 민감정보

## Preserving Engineering Value

Redaction의 목적은 사례를 무의미하게 만드는 것이 아닙니다. 가능한 한 다음 내용은 민감정보를 제거한 형태로 보존합니다.

- 어떤 현장 문제가 존재했는가
- 어떤 제약조건이 설계를 지배했는가
- 어떤 데이터와 신호가 의사결정에 사용되었는가
- 어떤 아키텍처와 비즈니스 규칙을 선택했는가
- 어떤 대안을 검토했고 왜 선택하거나 버렸는가
- 시스템을 어떻게 구현·관찰·개선했는가
- 무엇이 실패했고 무엇을 배웠는가
- 다른 문제에 재사용할 수 있는 방법은 무엇인가

즉, **조직 고유의 비밀과 실제 운영 환경 식별자는 제거하되 엔지니어링 방법은 보존**합니다.

## Review Before Commit

public MILES 저장소에 변경을 기록하기 전에 최소한 다음을 확인합니다.

- 실명, 이메일, 전화번호 등 개인정보가 포함되어 있지 않은가
- 회사·고객·협력사의 비공개 이름이나 식별자가 포함되어 있지 않은가
- 토큰, 비밀번호, key, connection string 등 인증정보가 포함되어 있지 않은가
- 내부 운영 수치가 불필요하게 구체적으로 노출되어 있지 않은가
- internal hostname, private IP, private URL, database/storage identifier, internal endpoint가 포함되어 있지 않은가
- 정확한 시설·location·rack code 또는 내부 identifier가 포함된 QR payload가 노출되어 있지 않은가
- 내부 repository/path name이나 non-public database schema detail이 불필요하게 노출되어 있지 않은가
- 스크린샷, 로그, 코드 예시에 민감한 정보가 숨어 있지 않은가
- 여러 일반화된 단서 또는 기술 식별자의 조합으로 대상이나 내부 시스템이 쉽게 재식별되지는 않는가
- 공개 정보의 조합이 새로운 공격 표면을 드러내지는 않는가
- 해당 정보가 MILES의 공개 목적을 위해 실제로 필요한가

## Git and Redaction

Git은 이력을 보존하므로 민감정보를 먼저 커밋한 뒤 나중에 삭제하는 방식은 허용 가능한 redaction 절차가 아닙니다.

**Redact before commit.**

민감정보가 Git history에 들어가지 않도록 write 이전에 검토하고 제거합니다. MILES Git Write Gateway를 통한 작업에서도 동일한 원칙을 적용합니다.

## Default Decision Rule

공개 여부를 결정하기 어려운 경우 다음 순서로 판단합니다.

```text
Can it be safely published as-is?
        │
       Yes → Publish
        │
       No
        ↓
Can engineering value survive generalization?
        │
       Yes → Generalize
        │
       No
        ↓
      Exclude
```

MILES는 public repository입니다. **공개 가능성이 확인되지 않은 정보는 공개하지 않는 것**이 기본값입니다.
