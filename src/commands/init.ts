import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'init',
  description: 'create the initial setup of the project',
  run: async (toolbox: GluegunToolbox) => {
    const { system, template, print: { info, success }, filesystem } = toolbox;
    info('INFO: Installing dependencies...');
    // install dependencies
    await system.exec('yarn add react-navigation react-native-gesture-handler react-redux redux redux-persist redux-saga styled-components axios react-native-fast-image react-native-vector-icons')
    // install dev dependencies
    await system.exec('yarn add @types/react-navigation @types/styled-components tslint tslint-config-prettier -D');
    // link react native dependencies
    await system.exec('react-native link react-native-gesture-handler react-native-fast-image react-native-vector-icons')
    success('SUCCESS: Dependencies installed successfully');

    // create the configuration files
    toolbox.createConfigFiles();
    info('INFO: Creating config files...');

    // create initial files
    await template.generate({
      template: 'rootIndex.js.ejs',
      target: './index.js',
    })

    await template.generate({
      template: 'app.tsx.ejs',
      target: './src/App.tsx',
    })

    await filesystem.removeAsync('./App.tsx');

    info('INFO: Creating folders...');
    // folders pattern
    toolbox.createFolder('config', 'src');
    toolbox.createFolder('core', 'src');
    toolbox.createFolder('modules', 'src');
    toolbox.createFolder('navigation', 'src');
    toolbox.createFolder('redux', 'src');
    toolbox.createFolder('styles', 'src');

    toolbox.createFolder('components', 'src/core');
    toolbox.createFolder('lib', 'src/core');


    // create root navigation
    toolbox.createNavigation();
    // create redux
    toolbox.createRedux();
    // create interfaces
    toolbox.createInterfaces();
    // setup styles folder
    toolbox.createStyles();

    // setup config folder (api)
    await template.generate({
      template: 'configApi.ts.ejs',
      target: './src/config/index.ts',
    })

    success('Initialization done!');
  }
}
