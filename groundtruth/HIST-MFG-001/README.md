# HIST-MFG-001 — Historical Manufacturing Engineering Evidence

HIST-MFG-001은 과거 제조 현장에서 작성된 설비·공정·투자 검토자료를 public-safe 형태로 재구성한 역사 사례군입니다.

이 사례군의 목적은 과거 문서를 성과 주장으로 바꾸는 것이 아니라, 당시 어떤 현실을 관찰했고 어떤 변수와 대안을 통해 의사결정을 구성했는지를 추적 가능한 형태로 남기는 것입니다.

## Why This Belongs in GROUNDTRUTH

현재 확인된 원본은 검토안, 기안자료, 사양 비교, 레이아웃, 비용 검토와 결과성 문서가 혼재된 **Private Original Evidence**입니다. 문서는 당시의 문제 정의와 의사결정 구조를 입증하지만, 모든 안건의 최종 승인·설치·운영·효과까지 일관되게 입증하지는 않습니다.

따라서 현 단계의 분류는 다음과 같습니다.

```text
Private Original Evidence
→ public-safe historical case reconstruction
→ GROUNDTRUTH
→ execution evidence verification
→ FORGE candidate
→ repeated validated pattern
→ METHODS candidate
```

FORGE 및 METHODS 승격은 자동으로 이루어지지 않습니다.

## Collection Scope

| Case | Public-safe focus | Current evidence status | Execution status |
| --- | --- | --- | --- |
| [2016 filling-line renewal](evidence/2016-filling-line-renewal.md) | 노후 충진 공정의 갱신 판단 | DOCUMENTED | TO BE VERIFIED |
| [2017 filler replacement](evidence/2017-filler-replacement.md) | 설비 사양·적용성·품질·공사 범위 비교 | DOCUMENTED | TO BE VERIFIED |
| [2018 PET capacity expansion](evidence/2018-pet-capacity-expansion.md) | Capa·인력·물류·포장·레이아웃을 결합한 증설 판단 | DOCUMENTED | TO BE VERIFIED |
| [2018 PE line relocation](evidence/2018-pe-line-relocation.md) | 라인 재배치와 운영 영향 검토 | DOCUMENTED | TO BE VERIFIED |
| [2021 in-house production study](evidence/2021-inhouse-production-study.md) | Make-or-Buy와 자체생산 조건 검토 | DOCUMENTED | TO BE VERIFIED |
| [Packaging format optimization](evidence/packaging-format-optimization.md) | 용기 규격 변경에 따른 설비·생산성·부자재 영향 | DOCUMENTED | TO BE VERIFIED |

세부 출처·공개 형태·승격 조건은 [EVIDENCE_MAP.md](EVIDENCE_MAP.md)에 기록합니다.

## Repeated Decision Pattern — Observation Only

여러 문서에서 다음 흐름이 반복적으로 관찰됩니다.

```text
Observed field reality
→ demand / capacity
→ physical and process constraints
→ alternatives
→ CAPEX + OPEX + labor + logistics + materials
→ quality and operational risk
→ layout / process flow
→ economic effect
→ decision proposal
```

이 흐름은 향후 `Manufacturing Investment Decision Framework`로 발전할 수 있는 후보 패턴입니다. 다만 현재는 역사 문서에서 관찰된 공통 구조이며, 별도의 METHODS artifact로 승격할 만큼 적용 조건·한계·반복 검증이 정리된 상태는 아닙니다.

## Public / Private Boundary

Public repository에는 다음만 남깁니다.

- 문제의 구조
- 판단 변수와 대안
- 의사결정 논리
- 검증 상태와 증거 경계
- 재사용 가능한 학습

다음은 저장소에서 제외합니다.

- 원본 PDF와 내부 문서 원문
- 회사·협력사·설비 공급사 식별정보
- 구체적인 생산량, Capa, 원가, 투자금액과 절감액
- 상세 설비 사양, 레이아웃과 공정 노하우
- 개인 이름, 승인선과 내부 문서 식별자

모든 공개 문서는 `security/REDACTION_POLICY.md`의 **Redact before commit** 원칙을 따릅니다.

## Evidence Boundary

`DOCUMENTED`는 해당 검토 주제와 의사결정 변수가 역사 문서에 존재함을 뜻합니다. 다음을 뜻하지 않습니다.

- 최종 투자 승인
- 실제 설치 또는 전환 완료
- 안정적 운영
- 예상 절감효과의 실현
- 장기 KPI 개선

이 항목들은 별도의 실행·운영 증거가 확인될 때만 상태를 변경합니다.
