[![Follow on Twitter](https://img.shields.io/twitter/follow/pownjs.svg?logo=twitter)](https://twitter.com/pownjs)
[![NPM](https://img.shields.io/npm/v/@pown/duct.svg)](https://www.npmjs.com/package/@pown/duct)
[![Fury](https://img.shields.io/badge/version-2x%20Fury-red.svg)](https://github.com/pownjs/lobby)

# Pown Duct

Esential tool for finding blind injection attacks.

## Credits

This tool is part of [secapps.com](https://secapps.com) open-source initiative.

```
  ___ ___ ___   _   ___ ___  ___
 / __| __/ __| /_\ | _ \ _ \/ __|
 \__ \ _| (__ / _ \|  _/  _/\__ \
 |___/___\___/_/ \_\_| |_|  |___/
  https://secapps.com
```

## Quickstart

This tool is meant to be used as part of [Pown.js](https://github.com/pownjs/pown) but it can be invoked separately as an independent tool.

Install Pown first as usual:

```sh
$ npm install -g pown@latest
```

Invoke directly from Pown:

```sh
$ pown duct
```

Otherwise, install this module locally from the root of your project:

```sh
$ npm install @pown/duct --save
```

Once done, invoke pown cli:

```sh
$ ./node_modules/.bin/pown-cli duct
```

You can also use the global pown to invoke the tool locally:

```sh
$ POWN_ROOT=. pown duct
```

## Usage

```
pown duct <command>

Side-channel attack enabler

Commands:
  pown duct dns  DNS ducting

Options:
  --version  Show version number  [boolean]
  --help     Show help  [boolean]
```

### `pown duct dns`

```
pown duct dns

DNS ducting

Options:
  --version  Show version number  [boolean]
  --help     Show help  [boolean]
  --channel  Restore channel  [string]
  --output   Output format  [string] [default: "string"]
```
