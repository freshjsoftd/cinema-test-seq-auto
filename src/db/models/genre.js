import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Genre extends Model {
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
      unique: "genres_title_key"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'genres',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "genres_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "genres_title_key",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
  }
}
