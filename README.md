# createrandomkey

[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=flat&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=flat&logo=node.js)

<p>Create random key for your app.<br/>
Are you don't want to repeating the same thing anymore ? Like ... creating random key to get random data from an array ? <br/>Try this package :)</p>

## 📌 Installation
```bash
npm i createrandomkey 
```

## 🔰 Usage
```javascript
const createRandomKey = require('createrandomkey');

// With max value
const key = createRandomKey({ max: 100 });
// return -> 96 / 37 / 80 / 0

// Without max value (default value 10)
const key = createRandomKey();
// return -> 10 / 3 / 0 / 7



// Example:

function giveawayWinner(){
    const key = createRandomKey({ max: 4 });
    const winner = ['justin', 'kendrick', 'webster', 'travis', 'don'];
    return winner[key]
}

const theWinner = giveawayWinner();
// E.g result => 'webster' 
```



## Support
[Saweria](https://saweria.com/gnwncpta)


Author [@gnwncpta](http://github.com/gnwncpta/)
