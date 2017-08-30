# dev-code-loader
### Write the development code in a commented manner  

## Usage
---
### Step 1:Install
```javascript
npm install dev-code-loader --save
```

### Step 2: config webpack.config.js
```javascript
var devCodeLoader = require('dev-code-loader');
...
resolveLoader: {
    alias: {
        'devMock': path.resolve('xxx')
    }
}
...
loaders: [
    {
        test: /\.js$/,
        loader: 'other-loader!devMock'
    }
]
```
Then joy your life.


## Examples
```javascript
[source code]  
// devCode const a = 1;
const a = 2;

[Compile code]
const a = 1;
```

```javascript
[source code]
// devCode
const a = 2;
const b = 1;

[Compile code]
const b = 1;
```

# License
[MIT License](https://raw.githubusercontent.com/milan-hwj/webpack-dev-code-loader/master/LICENSE)

