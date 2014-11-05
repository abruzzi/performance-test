performance-test
================

This is a very basic setup for performance test by using the awesome tool [phantomas](https://github.com/macbre/phantomas). To get
started, just clone this repo and do the following steps:

```sh
$ npm install
```

modify the `Gruntfile.js` to point to the web site you want to test, and then run

```sh
$ grunt
```

it has two plugins for generate report: `phantomas` and `devperf`.
