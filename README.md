# node-pkg

[![NPM version](https://img.shields.io/npm/v/@anyions/node-pkg?color=a1b858&label=)](https://www.npmjs.com/package/@anyions/node-pkg)

Node pakcages management, based on [@antfu/local-pkg](https://www.npmjs.com/package/@antfu/local-pkg) & [@antfu/install-pkg](https://www.npmjs.com/package/@antfu/install-pkg).

- Get information on local packages. works on both CJS and ESM.
- Install package programmatically. Detect package managers automatically (npm, yarn, bun and pnpm).

## Install 

```bash
npm i @anyions/node-pkg
```

## Usage

Get information on local packages

```ts
import {
  getPackageInfo,
  importModule,
  isPackageExists,
  resolveModule,
} from '@anyions/node-pkg'

isPackageExists('@anyions/node-pkg') // true
isPackageExists('foo') // false

await getPackageInfo('@anyions/node-pkg')
/* {
 *   name: "@anyions/node-pkg",
 *   version: "1.0.0",
 *   rootPath: "/path/to/node_modules/@anyions/node-pkg",
 *   packageJson: {
 *     ...
 *   }
 * }
 */

// similar to `require.resolve` but works also in ESM
resolveModule('local-pkg')
// '/path/to/node_modules/@anyions/node-pkg/dist/index.cjs'

// similar to `await import()` but works also in CJS
const { importModule } = await importModule('@anyions/node-pkg')
```

Install package programmatically

```ts
import { installPackage } from '@anyions/node-pkg'

await installPackage('vite', { silent: true })
```

## License

[MIT](./LICENSE) License © 2020 [AnyIons](https://github.com/anyions)