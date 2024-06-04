'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('products', 'offer', { 
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  });
    
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('products', 'offer')
      }
};
