import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class MoviesDirector extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'movies',
        key: 'movie_id'
      }
    },
    director_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'directors',
        key: 'director_id'
      }
    }
  }, {
    sequelize,
    tableName: 'movies_directors',
    schema: 'public',
    timestamps: false
  });
  }
}
