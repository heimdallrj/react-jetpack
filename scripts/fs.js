const fs = require('fs');

async function write(fp, data, encoding = 'utf-8') {
  fs.writeFileSync(fp, JSON.stringify(data, null, 2), encoding);
}

module.exports = { write };
