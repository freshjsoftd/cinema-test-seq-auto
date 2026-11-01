'use strict';

import db from '../models/index.js';

import {models} from '../../constants/index.js'

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface, Sequelize) {
		for (let modelName of models) {
			console.log(modelName);
			const model = db[modelName];
			console.log(model);
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

			await queryInterface.createTable(model.tableName, attributes);
		}
	},

	async down(queryInterface, Sequelize) {
		for (let modelName of models.toReversed()) {
			const model = db[modelName];
			await queryInterface.dropTable(model.tableName);
		}
	},
};
