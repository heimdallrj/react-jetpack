(async function () {
  try {
    const { exec } = require('./bash');

    await exec('rm -rf ./dist');
    await exec('mkdir ./dist && mkdir ./dist/react-jetpack');

    await exec('cp -r ./packages/react-jetpack/build/esm ./dist/react-jetpack');
    await exec(
      'cp -r ./packages/react-jetpack/build/cjs/ ./dist/react-jetpack'
    );

    await exec('cp ./packages/react-jetpack/LICENSE ./dist/react-jetpack/');
    // await exec('cp ./packages/react-jetpack/README.md ./dist/react-jetpack/');

    // Generate package.json
    const pkg = require('../packages/react-jetpack/package.json');
    const pkgFinal = {
      ...pkg,
      main: './index.js',
      module: './esm/index.js',
      types: './index.d.ts',
      scripts: {},
    };
    const path = require('path');
    require('./fs').write(
      path.join(__dirname, '../dist/react-jetpack/package.json'),
      pkgFinal
    );
  } catch (err) {
    console.error(err);
    process.exit((err && err.code) || 1);
  }
})();
