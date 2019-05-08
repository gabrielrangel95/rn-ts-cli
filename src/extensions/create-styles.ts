import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  const { template } = toolbox;

  async function createStyles() {
    await template.generate({
      template: 'styles/colors.ts.ejs',
      target: './src/styles/colors.ts',
    })
    await template.generate({
      template: 'styles/metrics.ts.ejs',
      target: './src/styles/metrics.ts',
    })
    await template.generate({
      template: 'styles/index.ts.ejs',
      target: './src/styles/index.ts',
    })
  }

  toolbox.createStyles = createStyles;

}
