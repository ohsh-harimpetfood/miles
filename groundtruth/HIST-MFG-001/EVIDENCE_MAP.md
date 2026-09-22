# HIST-MFG-001 Evidence Map

이 문서는 HIST-MFG-001의 원본 증거, 공개 형태, 주장 가능 범위와 향후 승격 조건을 관리합니다.

## Source Boundary

- Source class: **Private Original Evidence**
- Source form: 과거 내부 제조 엔지니어링 문서를 스캔한 48-page PDF
- Public repository inclusion: **EXCLUDED**
- Public derivative: 민감정보를 제거한 서술형 case reconstruction only
- Source preservation: public MILES repository 외부에서 별도 보관

원본에는 내부 수치, 설비 사양, 견적, 업체 정보, 승인 정보와 레이아웃이 포함되어 있으므로 원본 또는 페이지 이미지를 public repository에 커밋하지 않습니다.

## Evidence Classification

| Public artifact | Private source type | What it supports | What it does not yet support |
| --- | --- | --- | --- |
| `evidence/2016-filling-line-renewal.md` | 갱신 검토 및 설비 비교 문서 | 문제 정의, 비교 변수, 판단 구조 | 최종 설치, 운영 성과 |
| `evidence/2017-filler-replacement.md` | 교체 검토, 사양·적용성 비교 문서 | 기술 대안과 품질·공사 조건 검토 | 최종 업체 선정, 성과 실현 |
| `evidence/2018-pet-capacity-expansion.md` | 증설 요약, 세부 검토, 레이아웃·견적 문서 | 통합 투자 판단 구조 | 승인, 설치, 예상효과 실현 |
| `evidence/2018-pe-line-relocation.md` | 재배치 검토 및 레이아웃 문서 | 공간·동선·공사·운영 영향 검토 | 이전 완료, 안정화 결과 |
| `evidence/2021-inhouse-production-study.md` | 자체생산 타당성 및 공정 검토 문서 | Make-or-Buy 판단 변수와 운영조건 | 자체생산 전환, 실현 원가 |
| `evidence/packaging-format-optimization.md` | 포장 규격 변경 검토 문서 | 규격 변경의 시스템 영향 분석 | 양산 전환, 품질·생산성 성과 |

## Status Vocabulary

### Evidence Status

- `DOCUMENTED`: private original document에서 해당 문제·변수·판단 구조가 확인됨
- `CORROBORATED`: 서로 독립적인 추가 자료 또는 기록으로 핵심 사실이 교차 확인됨
- `VERIFIED`: 실행 결과와 운영 상태까지 검증 가능한 증거로 확인됨

### Execution Status

- `TO BE VERIFIED`: 현재 자료만으로 실행 여부를 확정하지 않음
- `PARTIALLY VERIFIED`: 일부 실행은 확인되나 범위 또는 결과가 불완전함
- `VERIFIED`: 설치·전환·운영 또는 결과가 별도 증거로 확인됨

## Claim Boundary

현재 공개적으로 주장 가능한 범위:

- 설비·공정 문제를 단일 기술 사양이 아닌 운영시스템 문제로 구조화했다.
- Capa, 인력, 물류, 부자재, 품질, 공사, 레이아웃과 경제성을 함께 검토했다.
- Make-or-Buy 및 포장 형식 변경을 공정·원가·운영조건으로 연결해 판단했다.

현재 주장하지 않는 범위:

- 모든 안건이 승인·실행되었다.
- 검토된 절감액 또는 ROI가 실제로 달성되었다.
- 특정 성과가 한 개인의 단독 기여로 발생했다.
- 역사 사례에서 추출한 패턴이 보편적 METHODS로 이미 검증되었다.

## Promotion Gates

### GROUNDTRUTH → FORGE

사례별로 다음 중 충분한 실행 증거가 확인되어야 합니다.

- 승인 또는 발주 기록
- 설치·공사·시운전 기록
- 양산 또는 운영 전환 기록
- 전후 운영지표
- 결과보고 또는 회고

승격 시에도 원본은 private으로 유지하고 public-safe narrative와 승인된 evidence만 사용합니다.

### Repeated Pattern → METHODS

`Manufacturing Investment Decision Framework` 후보는 다음이 충족될 때 별도 METHODS artifact로 검토합니다.

- 복수 사례에서 동일한 핵심 판단 구조가 확인됨
- 각 변수의 적용 조건과 제외 조건이 정리됨
- 최소 한 개 이상의 실행 사례에서 의사결정과 결과의 연결이 검증됨
- framework의 한계와 실패 가능성이 기록됨
- 특정 회사·설비에 종속되지 않는 표현으로 재현 가능함

## Future Intake Rule

추가 과거 자료를 찾으면 먼저 이 Evidence Map에 다음을 기록합니다.

1. 문서 시점과 주제
2. source type
3. decision evidence / execution evidence 구분
4. 공개 시 Generalize / Exclude 항목
5. 연결되는 기존 case 또는 신규 case 필요성
6. 상태 변경을 정당화하는 추가 증거

새 자료의 존재만으로 기존 사례를 FORGE 또는 METHODS로 자동 승격하지 않습니다.
