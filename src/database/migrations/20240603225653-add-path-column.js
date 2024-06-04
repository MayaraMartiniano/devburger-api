'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('categories', 'path', { 
      type: Sequelize.STRING
     });
    
  },

  async down (queryInterface) {
     await queryInterface.dropTable('categories', 'path')
   
  }
};
