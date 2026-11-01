'use strict';

import {locations} from '../../constants/index.js';

/** @type {import('sequelize-cli').Migration} */
export default  {
  async up(queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction();
  
      try {
        await queryInterface.bulkInsert('locations', locations, { transaction });
        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        console.error(error);
      }
    },
  
    async down(queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction();
      try {
        await queryInterface.bulkDelete('locations', null, { transaction });
        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        console.error(error);
      }
    },
};
