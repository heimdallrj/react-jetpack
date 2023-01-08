(async function () {
  try {
    const { exec } = require('./bash');

    await exec('rm -rf ./dist');
    await exec('mkdir ./dist');

    await exec('cp -r ./build/esm ./dist/');
    await exec('cp -r ./build/cjs/ ./dist/');

    await exec('cp ./LICENSE ./dist/');
    // await exec('cp ./README.md ./dist/');

    // Generate package.json
    const pkg = require('../package.json');
    const pkgFinal = {
      ...pkg,
      main: './index.js',
      module: './esm/index.js',
      types: './index.d.ts',
      scripts: {
        publish: 'npm publish',
      },
    };
    const path = require('path');
    require('./fs').write(
      path.join(__dirname, '../dist/package.json'),
      pkgFinal
    );
  } catch (err) {
    console.error(err);
    process.exit((err && err.code) || 1);
  }
})();
