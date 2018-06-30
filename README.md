# `import` Browser Equivalence Edge Case

This repo is a demonstration of an edge case in how JavaScript `import` behaves in Node `--experimental-modules` versus browsers.

## Test #1: Node

In a version of Node with `--experimental-modules`, such as 10.5.0, go to this repo and run:

```bash
node --experimental-modules index.mjs
```

You should see `In sloppy mode` printed.

## Test #2: Chrome

Download `http-server` if you don’t have it already:

```bash
npm install --global http-server
```

Then run `http-server` from this repo:

```
http-server
```

You should see a message saying that the folder is now being served at an address. Go to that address in Chrome (tested in version 69).

You should see `In strict mode` printed.