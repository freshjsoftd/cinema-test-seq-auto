import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Location extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    location_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "locations_title_key"
    },
    nationality_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nationalities',
        key: 'nationality_id'
      }
    }
  }, {
    sequelize,
    tableName: 'locations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "locations_pkey",
        unique: true,
        fields: [
          { name: "location_id" },
        ]
      },
      {
        name: "locations_title_key",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
  }
}
