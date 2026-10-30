import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class MoviesActor extends Model {
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
    actor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'actors',
        key: 'actor_id'
      }
    }
  }, {
    sequelize,
    tableName: 'movies_actors',
    schema: 'public',
    timestamps: false
  });
  }
}
