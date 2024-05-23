
/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = 
  {async  up(queryInterface, Sequelize) {
  await queryInterface.createTable('users', {
    id: {
      primaryKey: true, // chave primaria
      allowNull: false, //campo obrigatório
      type: Sequelize.UUID, //valor unico,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true, //email unico
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  });

},

async down(queryInterface) {
  await queryInterface.dropTable('users')
},

}