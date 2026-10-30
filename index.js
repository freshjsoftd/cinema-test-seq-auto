import db from './src/db/models/index.js';
import Actors from './src/db/models/actor.js';
import Serializer from 'sequelize-to-json'



const models = Object.keys(db.sequelize.models)
console.log(models)

async function getAllActors() {
	try {

		const actors = await Actors.findAll();
		const jsonActors = Serializer.serializeMany(actors, Actors)
		console.log('Show actors', jsonActors);

	} catch (error) {
    console.log(error)
  }
}

// getAllActors();