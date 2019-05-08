import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  const { template } = toolbox;

  async function createFolder(name: string, path: string) {
    await template.generate({
      template: 'package.json.ejs',
      target: `./${path}/${name}/package.json`,
      props: { name }
    })
    // create an index.ts for the file
    // await filesystem.writeAsync(`./${path}/${name}/index.ts`, '');
  }

  toolbox.createFolder = createFolder;

}
