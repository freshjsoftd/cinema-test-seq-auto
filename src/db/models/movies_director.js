import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class MoviesDirector extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    directorid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'directors',
        key: 'id'
      }
    },
    movieid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'movies',
        key: 'id'
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
