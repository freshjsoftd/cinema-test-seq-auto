import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Studio extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "studios_title_key"
    },
    logo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    locationid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'studios',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "studios_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "studios_title_key",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
  }
}
