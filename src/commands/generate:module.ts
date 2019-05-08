import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'generate:module',
  description: 'create a new module inside the app',
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, print: { success, error } } = toolbox;
    const name = parameters.first;
    if(!name) {
      error('ERROR: module name must be provided!');
      return;
    }
    success('Created module not implemented yet');
   // create folder with module name
   // create screens folder with an example screen
   // crate navigation folder, with stack navigator configured
   // create redux folder, with examples
   // create interface folder, with interface example

   // alert about export module on index.ts (modules)
   // alert about import reducer on root reducer
   // alert about import sagas on root saga
   // alert about import navigation on root navigation
  }
}
