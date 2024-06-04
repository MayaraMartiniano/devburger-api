'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('products', 'category_id', {
    type: Sequelize.INTEGER,
    references: {
      model: 'categories',  //Referenciando a tabela de catedorias com a do produto
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete:'SET NULL',
    allowNull: true,
   });
    
  },

  async down (queryInterface) {
       await queryInterface.removeColumn('products', 'category_id');
    
  },
};
