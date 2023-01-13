(async function () {
  try {
    const { exec } = require('./bash');

    await exec('rm -rf ./dist');
    await exec('mkdir ./dist && mkdir ./dist/react-jetpack');

    await exec('cp -r ./jetpack/react/build/esm ./dist/react-jetpack');
    await exec('cp -r ./jetpack/react/build/cjs/ ./dist/react-jetpack');

    await exec('cp ./jetpack/react/LICENSE ./dist/react-jetpack/');
    // await exec('cp ./jetpack/react/README.md ./dist/react-jetpack/');

    // Generate package.json
    const pkg = require('../jetpack/react/package.json');
    delete pkg.private;
    const pkgFinal = {
      ...pkg,
      name: 'react-jetpack',
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
