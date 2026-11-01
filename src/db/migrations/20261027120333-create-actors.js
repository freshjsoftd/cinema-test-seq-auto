'use strict';

import db from '../models/index.js';

// console.log(db)
const models = Object.keys(db.sequelize.models);
// console.log(models)
/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface, Sequelize) {
		for (let mName of models) {
      console.log(mName)
			const model = db[mName];
      console.log(model)
			const attributes = { ...model.getAttributes() };
			const associations = model.associations;
			Object.values(associations).forEach((association) => {
				if (model === association.target) {
					const fk = association.foreignKey;
					attributes[fk] = {
						...attributes[fk],
						onDelete: association.options.onDelete,
					};
				}
			});

			await queryInterface.createTable(model.tableName, {});
		}
	},

	async down(queryInterface, Sequelize) {
		for (let mName of models.toReversed()) {
			const model = db[mName];
			await queryInterface.dropTable(model.tableName);
		}
	},
};
