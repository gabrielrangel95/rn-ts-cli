import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  const { template } = toolbox;

  async function createNavigation() {
    await template.generate({
      template: 'navigation/index.ts.ejs',
      target: './src/navigation/index.ts',
    })
    await template.generate({
      template: 'navigation/navigationService.ts.ejs',
      target: './src/navigation/navigationService.ts',
    })
    await template.generate({
      template: 'navigation/rootNavigator.ts.ejs',
      target: './src/navigation/rootNavigator.ts',
    })
  }

  toolbox.createNavigation = createNavigation;

}
