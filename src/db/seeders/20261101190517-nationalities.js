'use strict';

import {nationalities} from '../../constants/index.js';

/** @type {import('sequelize-cli').Migration} */
export default  {
  async up(queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction();
  
      try {
        await queryInterface.bulkInsert('nationalities', nationalities, { transaction });
        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        console.error(error);
      }
    },
  
    async down(queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction();
      try {
        await queryInterface.bulkDelete('nationalities', null, { transaction });
        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        console.error(error);
      }
    },
};
