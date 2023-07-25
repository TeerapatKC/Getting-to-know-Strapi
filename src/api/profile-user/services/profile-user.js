'use strict';

/**
 * profile-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::profile-user.profile-user');
