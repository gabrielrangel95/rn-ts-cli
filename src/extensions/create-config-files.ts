import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  const { template } = toolbox;
  async function createConfigFiles() {
    // editor config
    await template.generate({
      template: 'config/editorconfig.ejs',
      target: './.editorconfig',
    })
    // general modules file declaration
    await template.generate({
      template: 'config/modules.d.ts.ejs',
      target: './.modules.d.ts',
    })
    // tsconfig
    await template.generate({
      template: 'config/tsconfig.json.ejs',
      target: './tsconfig.json',
    })
    // tslint
    await template.generate({
      template: 'config/tslint.json.ejs',
      target: './tslint.json',
    })

    // TODO: config prettier
  }

  toolbox.createConfigFiles = createConfigFiles;
}
