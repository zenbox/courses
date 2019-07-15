# CSS 3 Architektur- und Aufbaukurs

## Contents

- **Architekturkonzepte von Cascading Stylesheets**
  - Cascading und Gewichtung
  - Klassen, ID - Selektoren im Vergleich
  - Skalierbares, modulares CSS für grosse Projekte und Teams
  - CSS Nomenklaturen, z.B. BEM - Block-Element-Modifier
- **CSS Precompiler**
  - Installation und Einführung von SASS
  - Im Vergleich: Post CSS, Less
- **CSS Aufbau-Workshop**
  - Schritt für Schritt - Weblayouts mit responsiven Layout-Komponenten und Inhalten.
  - Mobile-first: vom kleinsten zum größten Gerät
  - Fallback für alte Browser
  - Aufbau von Basis-Stylesheets, Typographie und Layout über interaktive Verhaltensweisen
  - Baukasten CSS und Kunden-Themes
- **UX Techniken für bessere Userinterfaces**
  - CSS Transitions und Animations
  - CSS Grids und Flexboxes
  - Responsive Content: Icons, Scalable Vector Graphics, Textverhalten

## Cascading und Gewichtung

- Klassenbasierte Layouts
- !importants nur für Statuswechsel

## SMACSS

### Kategorisieren

- application-level
  - global-default
  - base-level (non-visual)
    - reset
    - normalize
    - accessibility
  - base-level (visual)
    - page-layout
    - typography
    - color
    - states
    
  - per-module-level
    - scoped-default
    - layout
    - theme
    - state
  
- theme-level
  - scoped-default
  - base-level
    - layout
    - typography
    - color
    - states
  - per-module-level
    - layout
    - theme
    - state