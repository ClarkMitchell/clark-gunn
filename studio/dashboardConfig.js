export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6032b7f696063b1477b7d74a',
                  title: 'Sanity Studio',
                  name: 'clark-gunn-studio',
                  apiId: '8aef2243-9baf-4f3c-b8b3-451ecb756409'
                },
                {
                  buildHookId: '6032b7f6ee96490c2f90a7f1',
                  title: 'Landing pages Website',
                  name: 'clark-gunn-web',
                  apiId: 'e15f37e0-da1e-4cd3-b820-400654855121'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ClarkMitchell/clark-gunn',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://clark-gunn-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
