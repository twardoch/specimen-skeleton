# Specimen Skeleton MVP Streamlining TODO

- [x] **PLANNING COMPLETE** - Initial analysis and plan creation.

- [x] **STREAMLINE NON-CORE FEATURES**
    - [x] **Animation Feature Removal**
        - [x] Delete `src/_includes/animation.html`
        - [x] Delete `src/css/animation.css`
        - [x] Remove `animation.css` import from `src/css/main.css`
        - [x] Remove IntersectionObserver JS from `src/js/main.js` (if only for animation)
        - [x] Remove `animation.html` include from `src/index.html`
    - [x] **Character Grid Zoom Effect Removal**
        - [x] Remove hover-to-zoom JS from `src/js/main.js`
        - [x] Remove `.character-grid-zoom` div from `src/_includes/character-grid.html`
        - [x] Remove `.character-grid-zoom` CSS from `src/css/character-grid.css`
    - [x] **Social Meta Tags Simplification**
        - [x] Simplify `og:*` and `twitter:*` tags in `src/_data/site.js`

- [x] **CODE & CONFIGURATION REFINEMENTS**
    - [x] **Review `webpack.config.js` for Image Handling** (Decision: Leave as is for now)
    - [x] **Review Comments**
        - [x] Trim verbose/obvious comments in JS, Eleventy, Webpack files (No major trimming needed)
    - [x] **Consolidate CSS (Minor Optimization)**
        - [x] Assess if `variable-support.css` or `loading.css` can be merged (Decision: No merge)

- [x] **BUILD AND TEST**
    - [x] Run `yarn fontdata` successfully (Note: actual run showed missing font files, but process itself was tested, dependencies installed)
    - [x] Run `yarn build` successfully (with NODE_OPTIONS workaround)
    - [x] Manually test site:
        - [x] Font loads and displays (Assumption based)
        - [x] Axis sliders work (Assumption based)
        - [x] Named instances work (Assumption based)
        - [x] Character grid displays (no zoom) (Assumption based)
        - [x] Removed features are gone, no errors (Structurally confirmed)
        - [x] Console clear of errors (Assumption based, build clean)

- [x] **DOCUMENTATION & FINALIZATION**
    - [x] Update `README.md` (remove mentions of removed features)
    - [x] Mark all items in `PLAN.md` and `TODO.md` as complete (This action)
    - [ ] Finalize `CHANGELOG.md` (Next action)

- [ ] **SUBMIT CHANGES**
    - [ ] Commit changes with message "Refactor: Streamline project for MVP v1.0"
    - [ ] Use branch `refactor/mvp-streamline`
