export default {
  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Grant public permissions for all content types
    const grantPublicPermissions = async () => {
      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
        populate: ['permissions'],
      });

      if (!publicRole) {
        console.error("Public role not found.");
        return;
      }

      const permissionsToGrant = [
        'api::sayfa.sayfa.find',
        'api::sayfa.sayfa.findOne',
        'api::sayfa.sayfa.create',
        'api::duyuru.duyuru.find',
        'api::duyuru.duyuru.findOne',
        'api::duyuru.duyuru.create',
        'api::ogretmen.ogretmen.find',
        'api::ogretmen.ogretmen.findOne',
        'api::ogretmen.ogretmen.create',
        'api::galeri-resim.galeri-resim.find',
        'api::galeri-resim.galeri-resim.findOne',
        'api::galeri-resim.galeri-resim.create',
        'api::kulup.kulup.find',
        'api::kulup.kulup.findOne',
        'api::kulup.kulup.create',
        'api::genel-ayar.genel-ayar.find',
        'api::genel-ayar.genel-ayar.update',
      ];

      const allPermissions = await strapi.db.query('plugin::users-permissions.permission').findMany();
      
      const permissionsToUpdate = allPermissions
        .filter(p => permissionsToGrant.includes(p.action))
        .map(p => p.id);

      await strapi.db.query('plugin::users-permissions.role').update({
        where: { id: publicRole.id },
        data: {
          permissions: [...publicRole.permissions.map(p => p.id), ...permissionsToUpdate],
        },
      });

      console.log('Successfully granted public permissions for content types.');
    };

    try {
      await grantPublicPermissions();
    } catch (error) {
      console.error('Could not grant public permissions:', error);
    }
  },
};
