import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  const { template } = toolbox;

  async function createRedux() {
    await template.generate({
      template: 'redux/index.ts.ejs',
      target: './src/redux/index.ts',
    })
    await template.generate({
      template: 'redux/sagas.ts.ejs',
      target: './src/redux/sagas.ts',
    })
    await template.generate({
      template: 'redux/reducers.ts.ejs',
      target: './src/redux/reducers.ts',
    })
  }

  toolbox.createRedux = createRedux;

}
