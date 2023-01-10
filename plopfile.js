module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/Component.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts',
        templateFile: 'plop-templates/component/Component.types.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'plop-templates/component/Component.styles.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.elements.ts',
        templateFile: 'plop-templates/component/Component.elements.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/component/Component.test.tsx.hbs',
        skipIfExists: true,
      },
    ],
  })
}
