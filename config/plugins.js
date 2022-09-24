module.exports = ({ env }) => ({
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          article: {
            field: 'slug',
            references: 'title',
          },
        },
      },
    },
    'website-builder': {
      enabled: true,
      config: {
        url: 'https://link-to-hit-on-trigger.com',
        trigger: {
          type: 'event',
          events: [
            {
              params: (record) => ({
                id: `${record.id}_${record.title}`
              }),
              model: 'recipe',
              types: ['create', 'delete'],
            },
            {
              params: {
                page: "home"
              },
              model: 'homepage',
              types: ['update'],
            },
          ],
        },
      }
    },
  
  });