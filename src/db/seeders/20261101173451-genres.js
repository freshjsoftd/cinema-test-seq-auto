'use strict';

import { genres } from '../../constants/index.js';
// import {nationalities} from '../../constants/index.js';
// import {locations} from '../../constants/index.js';
// import {studios} from '../../constants/index.js';
// import {movies} from '../../constants/index.js';
// import {actors} from '../../constants/index.js';
// import {directors} from '../../constants/index.js';
// import {movies_actors} from '../../constants/index.js';
// import {movies_directors} from '../../constants/index.js';
// import {models} from '../../constants/index.js';

// const seedData = {
//   genres,
//   nationalities,
//   locations,
//   studios,
//   movies,
//   actors,
//   directors,
//   movies_actors,
//   movies_directors,
// };

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction();

		try {
			await queryInterface.bulkInsert('genres', genres, { transaction });
			await transaction.commit();
		} catch (error) {
			await transaction.rollback();
			console.error(error);
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction();
		try {
			await queryInterface.bulkDelete('genres', null, { transaction });
			await transaction.commit();
		} catch (error) {
			await transaction.rollback();
			console.error(error);
		}
	},
};
