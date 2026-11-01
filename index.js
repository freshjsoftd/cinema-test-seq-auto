import Serializer from 'sequelize-to-json';
import db from './src/db/models/index.js';
import { models } from './src/constants/index.js';

// const models = Object.keys(db.sequelize.models);
// console.log(models);
 

function sync(arr) {
	arr.forEach(async (model) => {
		try {
			await db[model].sync();
			console.log(`${model} was synchronized successfully.`);
		} catch (error) {
			console.log(error);
		}
	});
}


sync(models)

async function getAllActors() {
	try {
		const actors = await Actors.findAll();
		const jsonActors = Serializer.serializeMany(actors, Actors);
		console.log('Show actors', jsonActors);
	} catch (error) {
		console.log(error);
	}
}

// getAllActors();
