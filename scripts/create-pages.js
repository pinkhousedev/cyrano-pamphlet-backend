'use strict';

async function createPages() {
  try {
    console.log('Creating pages...');
    
    const basePages = [
      { 
        title: 'Home Page', 
        slug: 'home-page', 
        pageType: 'home', 
        description: 'Home page with dynamic sections',
        publishedAt: Date.now(),
        sections: []
      },
      { 
        title: 'Career', 
        slug: 'career', 
        pageType: 'career', 
        description: 'Career opportunities page',
        publishedAt: Date.now(),
        sections: []
      },
      { 
        title: 'User Type 1', 
        slug: 'user-type1', 
        pageType: 'userType1', 
        description: 'User Type 1 page',
        publishedAt: Date.now(),
        sections: []
      },
      { 
        title: 'User Type 2', 
        slug: 'user-type2', 
        pageType: 'userType2', 
        description: 'User Type 2 page',
        publishedAt: Date.now(),
        sections: []
      },
      { 
        title: 'Android App', 
        slug: 'android-app', 
        pageType: 'androidApp', 
        description: 'Android App Download Page',
        publishedAt: Date.now(),
        sections: []
      }
    ];

    for (const page of basePages) {
      try {
        // Check if page already exists
        const existing = await strapi.documents('api::page.page').findFirst({
          filters: { slug: { $eq: page.slug } },
        });
        
        if (!existing) {
          await strapi.documents('api::page.page').create({
            data: page,
          });
          console.log(`Created page: ${page.slug}`);
        } else {
          console.log(`Page already exists: ${page.slug}`);
        }
      } catch (error) {
        console.error(`Error creating page ${page.slug}:`, error.message);
      }
    }

    console.log('Pages creation completed!');
  } catch (error) {
    console.error('Error creating pages:', error);
  }
}

async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  await createPages();
  await app.destroy();

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
