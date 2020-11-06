# Migration to Typescript

## Benefits
- Smaller bundle size 
- Better developer experience 
- new ES features 


## Smaller bundle size
Proptypes end up in the final bundle, interfaces on the other hand in typescript are only compile time constructs, and they don't bloat the final bundle

[Typescript Playground exmaple](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMoQDYQWAClAewAcBnZAb2QFgAoZZYsYAkALmRLClAHMBuWgF9atCAA8iBKGGQIWnNJmwyAvMgAURQqXbosOfMRIBKZCoB8FWvSgQwAVyghkAcgASmDARdCgA)

## Developer experience
- Autocomplete
- Pre compile type checking
- VS Code support


## New ES features are supported
- ES specification for new features, e.g. [conditional chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html)
- No need to install plugins like in babel


## Migration strategy
### Gradual migration
- Support old components written JS
- use `allowJs` in tsconfig
- update rollup config to use ts instead babel
- Generate type files from propTypes for old (not yet migrated) components
