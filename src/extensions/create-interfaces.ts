import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  const { template } = toolbox;

  async function createInterfaces() {
    await template.generate({
      template: 'interfaces/action.ts.ejs',
      target: `./src/core/interfaces/action.ts`,
    })
    await template.generate({
      template: 'interfaces/reduxState.ts.ejs',
      target: `./src/core/interfaces/reduxState.ts`,
    })

  }

  toolbox.createInterfaces = createInterfaces;

}
