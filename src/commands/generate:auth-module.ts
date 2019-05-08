import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'generate:auth-module',
  description: 'create a component or module based on a template',
  run: async (toolbox: GluegunToolbox) => {
    const { template, print: { success, info } } = toolbox;
    info('Generating auth module');
    toolbox.createDefaultComponents();
    // create screens
    await template.generate({
      template: 'auth/screens/LoginScreen/index.tsx.ejs',
      target: `./src/modules/Auth/screens/LoginScreen/index.tsx`,
    })
    await template.generate({
      template: 'auth/screens/LoginScreen/styles.ts.ejs',
      target: `./src/modules/Auth/screens/LoginScreen/styles.ts`,
    })
    await template.generate({
      template: 'auth/screens/SignUpScreen/index.tsx.ejs',
      target: `./src/modules/Auth/screens/SignUpScreen/index.tsx`,
    })
    await template.generate({
      template: 'auth/screens/SignUpScreen/styles.ts.ejs',
      target: `./src/modules/Auth/screens/SignUpScreen/styles.ts`,
    })
    await template.generate({
      template: 'auth/screens/index.ts.ejs',
      target: `./src/modules/Auth/screens/index.ts`,
    })

    // create navigation and interfaces
    await template.generate({
      template: 'auth/interfaces.ts.ejs',
      target: `./src/modules/Auth/interfaces.ts`,
    })
    await template.generate({
      template: 'auth/navigation.ts.ejs',
      target: `./src/modules/Auth/navigation.ts`,
    })

    // create redux
    await template.generate({
      template: 'auth/redux/actions.ts.ejs',
      target: `./src/modules/Auth/redux/actions.ts`,
    })
    await template.generate({
      template: 'auth/redux/reducer.ts.ejs',
      target: `./src/modules/Auth/redux/reducer.ts`,
    })
    await template.generate({
      template: 'auth/redux/sagas.ts.ejs',
      target: `./src/modules/Auth/redux/sagas.ts`,
    })
    await template.generate({
      template: 'auth/redux/types.ts.ejs',
      target: `./src/modules/Auth/redux/types.ts`,
    })

    // general changes
    await template.generate({
      template: 'auth/generalChanges/core/interfaces/reduxState.ts.ejs',
      target: `./src/core/interfaces/reduxState.ts`,
    })

    await template.generate({
      template: 'auth/generalChanges/navigation/rootNavigator.ts.ejs',
      target: `./src/navigation/rootNavigator.ts`,
    })

    await template.generate({
      template: 'auth/generalChanges/redux/reducers.ts.ejs',
      target: `./src/redux/reducers.ts`,
    })

    await template.generate({
      template: 'auth/generalChanges/redux/sagas.ts.ejs',
      target: `./src/redux/sagas.ts`,
    })

    success('Auth module created successfully!');
  }
}
