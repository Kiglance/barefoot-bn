const { getArray, setArray } = require('../../utils/database.utils');

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      price: {
        type: DataTypes.STRING
      },
      images: {
        type: DataTypes.TEXT,
        // get: getArray('images'),
        // set: setArray('images')
        get() {
          const rawValue = this.getDataValue('images');
          return rawValue ? JSON.parse(rawValue) : JSON.parse('[]');
        },
        set(value) {
          this.setDataValue('images', JSON.parse(value));
        }
      },
      imagesId: {
        type: DataTypes.TEXT,
        // get: getArray('imagesId'),
        // set: setArray('imagesId')
        get() {
          const rawValue = this.getDataValue('imagesId');
          return rawValue ? JSON.parse(rawValue) : JSON.parse('[]');
        },
        set(value) {
          this.setDataValue('imagesId', JSON.parse(value));
        }
      },
      details: {
        type: DataTypes.STRING
      },
      isBooked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      accommodation_id: {
        type: DataTypes.INTEGER
      },
      user_id: DataTypes.INTEGER,
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
    await queryInterface.dropTable('Rooms');
  }
};
