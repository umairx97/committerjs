# Airtable Record UUID Generator
Generate airtable record uuid from cli or by requiring it in node.
Inspired by [Cuid](https://github.com/ericelliott/cuid)
## Usage:

if NPM >= 5.0
```javascript
npx airtable-uuid
```
OR
```javascript
npm i -g airtable-uuid 
airtable-uuid // recl2mht2j000VGSD - Output
```

## Example 
```javascript
const { generate, isRecordId } = require('airtable-uuid');

const uuid = generate() 

console.log(uuid) // recl2mht2j000VGSD
console.log(isRecordId(uuid)) // true
```

## Author:
[umairx97](https://github.com/umairx97)
