# createrandomkey
<p>Create random key for your app.<br/>
Are you don't want to repeating the same thing anymore ? Like ... creating random key to get random data from an array ? Try this package :)</p>

### ℹ️ Installation
```bash
npm i createrandomkey 
```

### ✅ Usage
```javascript
const createRandomKey = require('createrandomkey');

// With max value
const key = createRandomKey({ max: 100 });
// return -> 96 / 37 / 80

// Without max value (default value 10)
const key = createRandomKey();
// return -> 10 / 3 / 7

// (key is 2)
const winner = ['justin', 'kendrick', 'webster', 'travis', 'don'];
return winner[key]

// result => 'webster' 
```


Author [@gnwncpta](http://github.com/gnwncpta/)
