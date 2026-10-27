import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Country extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: "countries_title_key"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'countries',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "countries_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "countries_title_key",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
  }
}
