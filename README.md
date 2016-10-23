# bit-loader-text
> bit-loader plugin for processing Plain Text files


## Example

### install

```
$ npm install bit-loader-text --save
```

### Simple plugin configuration

``` javascript
var Bitbundler = require("bit-bundler");
var textPlugin = require("bit-loader-text");

var bitbundler = new Bitbundler({
  loader: {
    plugins: [
      textPlugin()
    ]
  }
});
```

## License

Licensed under MIT
