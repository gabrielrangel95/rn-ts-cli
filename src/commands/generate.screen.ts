import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'generate:screen',
  description: 'create a new screen inside the module inserted',
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, template, print: { success, error }, filesystem } = toolbox;
    const name = parameters.first;
    const module = parameters.options.module;

    if(!name) {
      error('ERROR: Screen name must be specified!');
      return;
    }

    if(!module) {
      error('ERROR: Module name must be specified!');
      return;
    }

    // check if user is in rn project
    const packageJson = await filesystem.read('package.json', 'json');
    const isReactNative =  Boolean(packageJson.dependencies['react-native']);

    await template.generate({
      template: 'screen.tsx.ejs',
      target: `./src/modules/${module}/${name}Screen/index.tsx`,
      props: { name }
    })

    // get the style base on the rn project
    const styleSource = isReactNative ? 'react-native/styles.ts.ejs' : 'react-web/styles.ts.ejs';

    await template.generate({
      template: styleSource,
      target: `./src/modules/${module}/${name}Screen/styles.ts`,
    })

    success(`${name} screen generated!`)
  },
};
