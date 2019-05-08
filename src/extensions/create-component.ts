import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  const { filesystem, template, print: { success, error } } = toolbox;

  async function isReactNative() {
    // check if user is in rn project
    const packageJson = await filesystem.read('package.json', 'json');
    return Boolean(packageJson.dependencies['react-native']);
  }

  async function createComponent(name: string, stateless?: boolean) {
    if(!name) {
      error('ERROR: Component name must be specified!');
      return;
    }

    // check the stateless parameter
    const componentSource = stateless ? 'stateless.tsx.ejs' : 'component.tsx.ejs';

    await template.generate({
      template: componentSource,
      target: `./src/core/components/${name}/index.tsx`,
      props: { name }
    })

    // get the style base on the rn project
    const styleSource = (await isReactNative()) ? 'react-native/styles.ts.ejs' : 'react-web/styles.ts.ejs';

    await template.generate({
      template: styleSource,
      target: `./src/core/components/${name}/styles.ts`,
    })

    success(`${name} component generated!`);
  }

  toolbox.createComponent = createComponent;
}
