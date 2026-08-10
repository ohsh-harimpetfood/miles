# Theme System — Narrative Lens & Visual Token Contract

**Status:** Working Design Contract  
**Purpose:** 같은 Source of Truth를 다양한 audience와 presentation context에 맞게 표현하되 사실과 evidence는 변경하지 않는 theme architecture를 정의한다.

## 1. Theme Is Not a Skin

Theme은 단순 color palette가 아니다.

Theme은 두 layer로 구성한다.

```text
Theme
├─ Narrative Lens
└─ Visual Profile
```

Narrative Lens:

- 어떤 정보를 먼저 보여주는가
- 무엇을 강조하는가
- 어떤 project evidence를 전면에 배치하는가

Visual Profile:

- color
- typography
- surface
- border
- radius
- density
- image treatment
- motion

## 2. Stable Content Layer

Non-themeable:

```text
WHO → WHAT → HOW → PROOF → EVOLUTION

Career Facts
Project Facts
Chronology
Evidence Classification
Architecture
Measurements
Claim Boundary
```

Themeable:

```text
Narrative Emphasis
Information Hierarchy
Color
Typography
Surface
Border
Radius
Density
Image Framing
Motion
Navigation Treatment
```

## 3. v0.1 Theme Profiles

v0.1에서는 3개만 구현한다.

### MILES Core

Intent:
default identity

Character:
precise / restrained / evidence-first / laboratory

Use:
general portfolio

### Enterprise

Intent:
executive / corporate / transformation context

Character:
structured / calm / high legibility / low decoration

Emphasis:

- business problem
- governance
- architecture
- transformation
- measurable result

### Industrial

Intent:
manufacturing / execution / physical operation context

Character:
functional / grounded / dense / physical

Emphasis:

- field evidence
- operator workflow
- physical ↔ digital
- process
- WMS / MES / logistics

Later candidates:

- Editorial
- Dark Lab

하지만 v0.1에서는 구현하지 않아도 된다.

## 4. Theme Token Model

Use semantic design tokens.

Example:

```text
:root {
  --color-bg:
  --color-surface:
  --color-text:
  --color-muted:
  --color-accent:
  --color-border:

  --font-display:
  --font-body:
  --font-mono:

  --radius-sm:
  --radius-md:

  --space-section:
  --content-max:

  --shadow-surface:
  --motion-fast:
  --motion-normal:
}
```

Components는 raw color / pixel value보다 semantic token을 우선 사용한다.

## 5. Runtime Theme Selection

Recommended HTML contract:

```text
<html data-theme="miles-core" data-lens="default">
```

Example:

```text
data-theme="enterprise"
data-lens="executive"
```

Theme selector는 사용자가 직접 변경 가능해야 한다.

Selection persistence:

- localStorage

Optional URL future:

```text
?theme=enterprise
?lens=executive
```

## 6. Truth Boundary

Theme / Lens가 절대 바꾸면 안 되는 것:

- evidence classification
- project state
- measurement
- chronology
- source
- commit
- business impact status

Example:

WMS:

`Measured Business Impact = Not Yet Established`

는 어떤 theme에서도 동일해야 한다.

## 7. Narrative Lens Example — WMS

Same WMS truth.

Executive:

```text
Operational Problem
→ Governance
→ Architecture
→ Deployment
→ Impact Status
```

Engineer:

```text
Architecture
→ Constraints
→ Implementation
→ Evidence
→ Verification
```

Manufacturer:

```text
Rack / Location Problem
→ Operator Workflow
→ QR
→ Physical ↔ Digital
→ Stocktake
```

Underlying facts remain identical.

## 8. Theme Selection UX

Portfolio header:

```text
MILES                     View as ▾    Theme ▾
```

View as:

- Default
- Executive
- Engineer
- Manufacturer
- AI Builder

Theme:

- MILES Core
- Enterprise
- Industrial

## 9. Design Constraint

Theme switching should not:

- change semantic meaning
- hide inconvenient evidence
- promote hypothesis to fact
- convert derivative into evidence
- create misleading business-impact impression

## 10. v0.1 Success Criteria

PASS when:

- one HTML/content structure supports 3 themes
- theme change does not duplicate content
- selected theme persists
- responsive layout remains intact
- evidence labels remain visible
- same project truth survives all themes/lenses
