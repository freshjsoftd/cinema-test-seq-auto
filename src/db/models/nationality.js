import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Nationality extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    nationality_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: "nationalities_title_key"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nationalities',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "nationalities_pkey",
        unique: true,
        fields: [
          { name: "nationality_id" },
        ]
      },
      {
        name: "nationalities_title_key",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
  }
}
