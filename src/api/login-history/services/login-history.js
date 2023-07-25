'use strict';

/**
 * login-history service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::login-history.login-history');
