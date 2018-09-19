# bit-loader-text

[![Greenkeeper badge](https://badges.greenkeeper.io/MiguelCastillo/bit-loader-text.svg)](https://greenkeeper.io/)
> bit-loader plugin for processing Plain Text files


## Example

### install

```
$ npm install @bit/loader-text --save
```

### Simple plugin configuration

``` javascript
var Bitbundler = require("@bit/bundler");
var textPlugin = require("@bit/loader-text");

var bitbundler = new Bitbundler({
  loader: {
    plugins: [
      textPlugin({
        extensions: ["txt", "html"]
      })
    ]
  }
});
```

## License

Licensed under MIT
