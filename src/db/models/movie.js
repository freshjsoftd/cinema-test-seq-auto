import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Movie extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "movies_title_key"
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    poster: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    genreid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'genres',
        key: 'id'
      }
    },
    studioid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'studios',
        key: 'id'
      }
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
          { name: "id" },
        ]
      },
      {
        name: "movies_title_key",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
  }
}
