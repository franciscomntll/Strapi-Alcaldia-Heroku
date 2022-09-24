'use strict';

/**
 *  department controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::department.department', ({ strapi }) => ({
  async findAll(ctx) {
    const entries = await strapi.db.query("api::department.department").findMany({
      select: ['name', 'id', 'slug'],
      orderBy: { name: 'ASC' },
      where: { isACategory: true },
    });

    ctx.body = entries;
  },
}));
