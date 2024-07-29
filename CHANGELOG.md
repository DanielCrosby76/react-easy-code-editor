# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0-rc.1] - 2023-07-xx

Release cadididate that has feature parity with other libraries.

### Added

- Simplified dev page.
- Default library export.
- Wrap selected code with: `[]` `()` `<>` `{}` `""` `''` `""` ` `` ` (wrapParens prop).
- Automatic indent on new lines (autoIndent prop).
- JSX highlight support.
- Unit testing.

### Changed

- Optimised dynamic highlight rendering, performance is now tied to the supplied highlight function and the components textarea element.
- Simplified types.

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
