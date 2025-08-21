'use strict';

async function fixPagePermissions() {
  try {
    console.log('Fixing page permissions...');
    
    // Find the ID of the public role
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: {
        type: 'public',
      },
    });

    if (!publicRole) {
      console.error('Public role not found');
      return;
    }

    console.log('Found public role:', publicRole.id);

    // Set permissions for page content type
    const pagePermissions = ['find', 'findOne'];
    
    for (const action of pagePermissions) {
      try {
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: `api::page.page.${action}`,
            role: publicRole.id,
          },
        });
        console.log(`Created permission: api::page.page.${action}`);
      } catch (error) {
        if (error.message.includes('duplicate')) {
          console.log(`Permission already exists: api::page.page.${action}`);
        } else {
          console.error(`Error creating permission ${action}:`, error.message);
        }
      }
    }

    console.log('Page permissions fixed successfully!');
  } catch (error) {
    console.error('Error fixing permissions:', error);
  }
}

async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  await fixPagePermissions();
  await app.destroy();

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
