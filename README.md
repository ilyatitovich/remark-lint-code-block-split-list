# remark-lint-code-block-split-list

[remark-lint](https://github.com/remarkjs/remark-lint) plugin to ensure that code block inside list doesn't split the list.

The plugin checks if the code block split the list (сode block is incorrectly indented).

## Install

```sh
npm install remark-lint-code-block-split-list
```

## Usage

Use like any other [remark-lint](https://github.com/remarkjs/remark-lint) plugin.
Check out the [remark-lint](https://github.com/remarkjs/remark-lint) documentation for details.

## Examples

When this rule is turned on, the following `valid.md` is ok:

````md
1. Item 1

   ```sh
   pnpm run dev
   ```

2. Item 2
````

When this rule is turned on, the following `invalid.md` is **not** ok:

````md
1. Item 1

```sh
pnpm run dev
```

2. Item 2
````

```text
6:1-8:4 warning Add 3 spaces to the beginning of the code block to align with the list. code-block-split-list remark-lint
```

## Support the Project

If you find this tool helpful, consider supporting us:

- [**Support Our Work**](https://ilyatitov.vercel.app/payments)
