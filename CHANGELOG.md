# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - Planned

React 19 update.

## [1.2.0] - Unreleased

Quality of life updates.

### Added

- Basic undo/redo stack.

### Fixed

- Read only mode on firefox.
- Change handler not updating.

### Changed

- Switched to css modules to avoid style conflicts.

## [1.1.1] - 2024-08-03

Clean up and Stability patch.

### Added

- Increased unit test coverage.
- Improved examples on homepage: live preview, theme, performance.

### Changed

- Theme styling to use color and background color for scrollbars.

## [1.1.0] - 2024-07-29

Full release with full feature set.

### Changed

- Default themes to use monospace font.
- Updated examples to use default import.

## [1.1.0-rc.1] - 2024-07-29

Release cadididate that has feature parity with other libraries.

### Added

- Simplified dev page.
- Default library export.
- Wrap selected code with: `[]` `()` `<>` `{}` `""` `''` `""` ` `` ` (wrapParens prop).
- Automatic indent on new lines (autoIndent prop).
- JSX highlight support.
- Unit testing.

### Changed

- Optimised dynamic highlight rendering with virtualization.
- Simplified types.
- Moved react to a peer dependency

### Fixed

- Component correctly risizes with parent elemet.

## [1.0.0] - 2024-07-20

First full release of library.

### Added

- Examples folder.
- Example project on stackblitz.
- Homepage/component demo.

### Fixed

- Transitioning from undefined code prop and back.
- On scroll down highlighting incorrect range.
- Highlighting on page resize.

## [1.0.0-rc.1] - 2024-07-18

First release candidate with most primary functionality.

### Added

- Core code editor component.
- 2 Default themes, light and dark.
