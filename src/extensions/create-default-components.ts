import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  const { template } = toolbox;

  async function createDefaultComponents() {
    await template.generate({
      template: 'components/Button/index.tsx.ejs',
      target: `./src/core/components/Button/index.tsx`,
    })
    await template.generate({
      template: 'components/Button/styles.ts.ejs',
      target: `./src/core/components/Button/styles.ts`,
    })
    await template.generate({
      template: 'components/Input/index.tsx.ejs',
      target: `./src/core/components/Input/index.tsx`,
    })
    await template.generate({
      template: 'components/Input/styles.ts.ejs',
      target: `./src/core/components/Input/styles.ts`,
    })
    await template.generate({
      template: 'components/index.ts.ejs',
      target: `./src/core/components/index.ts`,
    })

  }

  toolbox.createDefaultComponents = createDefaultComponents;

}
