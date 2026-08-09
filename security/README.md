# SECURITY

SECURITY는 MILES public repository의 publication safety, redaction, privacy, credential protection과 보안 경계를 설명하는 진입점입니다. 세부 redaction 기준의 authoritative policy는 [`REDACTION_POLICY.md`](REDACTION_POLICY.md)입니다.

## Purpose

공개 저장소에 어떤 정보를 남길 수 있는지, 어떤 정보는 일반화하거나 제외해야 하는지 판단할 수 있는 안전 경계를 제공합니다.

## Belongs Here

- publication safety guidance
- redaction and privacy rules
- credential / secret protection principles
- repository security boundaries
- authoritative policy links

## Does Not Belong Here

- 정책 전문의 중복 복사
- 실제 credential, secret, private key
- 내부 운영 환경을 직접 식별하는 민감정보

## Evidence / Entry Expectations

MILES는 **public by design, safe by default**를 지향합니다. 민감정보는 commit 이후가 아니라 **redact before commit** 원칙으로 처리합니다.

아키텍처와 엔지니어링 원리는 가능한 한 보존하되 실제 운영 환경을 직접 식별하는 값은 일반화하거나 제외합니다. secrets / credentials는 저장소에 포함하지 않습니다.

## Relationship to Other Areas

SECURITY는 모든 taxonomy에 적용되는 publication boundary입니다. 각 영역의 콘텐츠는 공개 전 [`REDACTION_POLICY.md`](REDACTION_POLICY.md)를 따라 검토해야 합니다.
