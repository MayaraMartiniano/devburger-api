'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface) {
  
     await queryInterface.removeColumn('products', 'category');
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.addColumn('products', 'category',{
            type: Sequelize.STRING,
            allowNull: true,
    });
     }
};
