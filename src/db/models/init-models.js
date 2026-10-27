import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Actor from  "./actor.js";
import _Country from  "./country.js";
import _Director from  "./director.js";
import _Genre from  "./genre.js";
import _Location from  "./location.js";
import _Movie from  "./movie.js";
import _MoviesActor from  "./movies_actor.js";
import _MoviesDirector from  "./movies_director.js";
import _Studio from  "./studio.js";

export default function initModels(sequelize) {
  const Actor = _Actor.init(sequelize, DataTypes);
  const Country = _Country.init(sequelize, DataTypes);
  const Director = _Director.init(sequelize, DataTypes);
  const Genre = _Genre.init(sequelize, DataTypes);
  const Location = _Location.init(sequelize, DataTypes);
  const Movie = _Movie.init(sequelize, DataTypes);
  const MoviesActor = _MoviesActor.init(sequelize, DataTypes);
  const MoviesDirector = _MoviesDirector.init(sequelize, DataTypes);
  const Studio = _Studio.init(sequelize, DataTypes);

  MoviesActor.belongsTo(Actor, { as: "actor", foreignKey: "actorid"});
  Actor.hasMany(MoviesActor, { as: "movies_actors", foreignKey: "actorid"});
  Actor.belongsTo(Country, { as: "country", foreignKey: "countryid"});
  Country.hasMany(Actor, { as: "actors", foreignKey: "countryid"});
  Director.belongsTo(Country, { as: "country", foreignKey: "countryid"});
  Country.hasMany(Director, { as: "directors", foreignKey: "countryid"});
  Location.belongsTo(Country, { as: "country", foreignKey: "countryid"});
  Country.hasMany(Location, { as: "locations", foreignKey: "countryid"});
  MoviesDirector.belongsTo(Director, { as: "director", foreignKey: "directorid"});
  Director.hasMany(MoviesDirector, { as: "movies_directors", foreignKey: "directorid"});
  Movie.belongsTo(Genre, { as: "genre", foreignKey: "genreid"});
  Genre.hasMany(Movie, { as: "movies", foreignKey: "genreid"});
  Studio.belongsTo(Location, { as: "location", foreignKey: "locationid"});
  Location.hasMany(Studio, { as: "studios", foreignKey: "locationid"});
  MoviesActor.belongsTo(Movie, { as: "movie", foreignKey: "movieid"});
  Movie.hasMany(MoviesActor, { as: "movies_actors", foreignKey: "movieid"});
  MoviesDirector.belongsTo(Movie, { as: "movie", foreignKey: "movieid"});
  Movie.hasMany(MoviesDirector, { as: "movies_directors", foreignKey: "movieid"});
  Movie.belongsTo(Studio, { as: "studio", foreignKey: "studioid"});
  Studio.hasMany(Movie, { as: "movies", foreignKey: "studioid"});

  return {
    Actor,
    Country,
    Director,
    Genre,
    Location,
    Movie,
    MoviesActor,
    MoviesDirector,
    Studio,
  };
}
