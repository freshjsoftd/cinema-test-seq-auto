import db from './src/db/models/index.js';
import Actors from './src/db/models/actor.js';
// import Serializer from 'sequelize-to-json'

// const sequelize = new Sequelize('cinema', 'postgres', 'root', {
// 	host: 'localhost',
// 	dialect: 'postgres',
// });

async function getAllActors() {
	try {

		const actors = await Actors.findAll();
		// const jsonActors = Serializer.serializeMany(actors, Actors)
		console.log('Show actors', actors);

	} catch (error) {
    console.log(error)
  }
}

getAllActors();