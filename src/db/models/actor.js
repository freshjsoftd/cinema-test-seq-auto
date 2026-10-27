import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Actor extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "actors_full_name_key"
    },
    birth_year: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    death_year: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    countryid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'countries',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'actors',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "actors_full_name_key",
        unique: true,
        fields: [
          { name: "full_name" },
        ]
      },
      {
        name: "actors_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
