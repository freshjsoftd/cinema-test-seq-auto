import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Actor extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    actor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    birth_year: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    death_year: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    foto: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'actors',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "actors_pkey",
        unique: true,
        fields: [
          { name: "actor_id" },
        ]
      },
    ]
  });
  }
}
