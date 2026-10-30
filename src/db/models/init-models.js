import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Actor from  "./actor.js";
import _Director from  "./director.js";
import _Genre from  "./genre.js";
import _Location from  "./location.js";
import _Movie from  "./movie.js";
import _MoviesActor from  "./movies_actor.js";
import _MoviesDirector from  "./movies_director.js";
import _Nationality from  "./nationality.js";
import _Studio from  "./studio.js";

export default function initModels(sequelize) {
  const Actor = _Actor.init(sequelize, DataTypes);
  const Director = _Director.init(sequelize, DataTypes);
  const Genre = _Genre.init(sequelize, DataTypes);
  const Location = _Location.init(sequelize, DataTypes);
  const Movie = _Movie.init(sequelize, DataTypes);
  const MoviesActor = _MoviesActor.init(sequelize, DataTypes);
  const MoviesDirector = _MoviesDirector.init(sequelize, DataTypes);
  const Nationality = _Nationality.init(sequelize, DataTypes);
  const Studio = _Studio.init(sequelize, DataTypes);

  MoviesActor.belongsTo(Actor, { as: "actor", foreignKey: "actor_id"});
  Actor.hasMany(MoviesActor, { as: "movies_actors", foreignKey: "actor_id"});
  MoviesDirector.belongsTo(Director, { as: "director", foreignKey: "director_id"});
  Director.hasMany(MoviesDirector, { as: "movies_directors", foreignKey: "director_id"});
  Movie.belongsTo(Genre, { as: "genre", foreignKey: "genre_id"});
  Genre.hasMany(Movie, { as: "movies", foreignKey: "genre_id"});
  Studio.belongsTo(Location, { as: "location", foreignKey: "location_id"});
  Location.hasMany(Studio, { as: "studios", foreignKey: "location_id"});
  MoviesActor.belongsTo(Movie, { as: "movie", foreignKey: "movie_id"});
  Movie.hasMany(MoviesActor, { as: "movies_actors", foreignKey: "movie_id"});
  MoviesDirector.belongsTo(Movie, { as: "movie", foreignKey: "movie_id"});
  Movie.hasMany(MoviesDirector, { as: "movies_directors", foreignKey: "movie_id"});
  Actor.belongsTo(Nationality, { as: "nationality", foreignKey: "nationality_id"});
  Nationality.hasMany(Actor, { as: "actors", foreignKey: "nationality_id"});
  Director.belongsTo(Nationality, { as: "nationality", foreignKey: "nationality_id"});
  Nationality.hasMany(Director, { as: "directors", foreignKey: "nationality_id"});
  Location.belongsTo(Nationality, { as: "nationality", foreignKey: "nationality_id"});
  Nationality.hasMany(Location, { as: "locations", foreignKey: "nationality_id"});
  Movie.belongsTo(Studio, { as: "studio", foreignKey: "studio_id"});
  Studio.hasMany(Movie, { as: "movies", foreignKey: "studio_id"});

  return {
    Actor,
    Director,
    Genre,
    Location,
    Movie,
    MoviesActor,
    MoviesDirector,
    Nationality,
    Studio,
  };
}
