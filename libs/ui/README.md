# UI Library

A shared UI library containing Bootstrap customizations and global styles for the workspace.

## Structure

```
libs/ui/src/styles/
├── _variables.scss  # Bootstrap variable overrides
├── _custom.scss     # Custom styles extending Bootstrap
└── styles.scss      # Main entry point that imports everything
```

## Usage

### In Apps (e.g., apps/web)

First, configure the SCSS include paths in your app's `project.json` under build options:

```json
"stylePreprocessorOptions": {
  "includePaths": ["libs/ui/src"]
}
```

Then add to your app's global styles file (`apps/web/src/styles.scss`):

```scss
@import 'styles/styles.scss';
```

### In Other Libraries

If you create another library that needs Bootstrap styles, add the same `stylePreprocessorOptions` to that library's `project.json`, then import:

```scss
@import 'styles/styles.scss';
```

### In Component Styles

For component-specific styles that need only Bootstrap variables (without importing all of Bootstrap):

```scss
@import 'styles/variables';

.my-component {
  color: $primary;
  padding: $spacer;
}
```

Note: You'll need to configure `stylePreprocessorOptions` in the project that contains the component.

## Customization

1. **Override Bootstrap variables**: Edit `src/styles/_variables.scss`
2. **Add custom styles**: Edit `src/styles/_custom.scss`
3. Changes will automatically apply to all apps/libs that import these styles
