/* eslint-disable func-names */

/* eslint-disable object-shorthand */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Accommodations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      images: {
        type: DataTypes.STRING,
        get() {
          const rawValue = this.getDataValue('images');
          return rawValue ? JSON.parse(rawValue) : JSON.parse('[]');
        },
        set(value) {
          this.setDataValue('images', JSON.stringify(value));
        }
      },
      imagesId: {
        type: DataTypes.TEXT,

        get() {
          const rawValue = this.getDataValue('imagesId');
          return rawValue ? JSON.parse(rawValue) : JSON.parse('[]');
        },
        set(value) {
          this.setDataValue('imagesId', JSON.stringify(value));
        }
      },
      location_id: {
        type: DataTypes.INTEGER
      },
      services: {
        type: DataTypes.TEXT,

        get() {
          const rawValue = this.getDataValue('services');
          return rawValue ? JSON.parse(rawValue) : JSON.parse('[]');
        },
        set(value) {
          this.setDataValue('services', JSON.stringify(value));
        }
      },
      amenities: {
        type: DataTypes.TEXT,

        get() {
          const rawValue = this.getDataValue('amenities');
          return rawValue ? JSON.parse(rawValue) : JSON.parse('[]');
        },
        set(value) {
          this.setDataValue('amenities', JSON.stringify(value));
        }
      },
      user_id: {
        type: DataTypes.INTEGER
      },
      rates: {
        type: DataTypes.TEXT,

        get() {
          const rawValue = this.getDataValue('rates');
          return rawValue ? JSON.parse(rawValue) : JSON.parse('[]');
        },
        set(value) {
          this.setDataValue('rates', JSON.stringify(value));
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Accommodations');
  }
};
