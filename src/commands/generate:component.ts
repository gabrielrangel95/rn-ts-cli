import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'generate:component',
  description: 'create a new component inside the core module',
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, createComponent } = toolbox;
    const name = parameters.first;
    const stateless = parameters.options.stateless;
    await createComponent(name, stateless);
  },
};
