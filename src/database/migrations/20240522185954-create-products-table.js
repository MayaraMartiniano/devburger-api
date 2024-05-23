'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
         await queryInterface.createTable('products', {
           id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
           },
           name: {
            type: Sequelize.STRING,
            allowNull: false,
           },
           price: {
            type: Sequelize.INTEGER,
            allowNull: false,
           },
           category: {
            type: Sequelize.STRING,
            allowNull: false,
           },
           path: {
            type: Sequelize.STRING,
            allowNull: false
           },

          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: 
            {
              type: Sequelize.DATE,
              allowNull: false,
            },
            
              });
     
  },

  async down (queryInterface) {
    await queryInterface.dropTable('products');
     
  }
};
