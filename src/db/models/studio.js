import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Studio extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    studio_id: {
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
    found_year: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    logo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locations',
        key: 'location_id'
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
          { name: "studio_id" },
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
