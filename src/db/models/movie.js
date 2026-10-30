import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Movie extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    movie_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    release_year: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'genres',
        key: 'genre_id'
      }
    },
    studio_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'studios',
        key: 'studio_id'
      }
    },
    poster: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'movies',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "movies_pkey",
        unique: true,
        fields: [
          { name: "movie_id" },
        ]
      },
    ]
  });
  }
}
