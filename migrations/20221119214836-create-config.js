'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Configs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jenis_perangkat: {
        type: Sequelize.STRING
      },
      nama_customer: {
        type: Sequelize.STRING
      },
      nama_perangkat: {
        type: Sequelize.STRING
      },
      layanan: {
        type: Sequelize.STRING
      },
      vlan_layanan: {
        type: Sequelize.STRING
      },
      vlan_nms: {
        type: Sequelize.STRING
      },
      ip_address: {
        type: Sequelize.STRING
      },
      subnet: {
        type: Sequelize.STRING
      },
      ip_route: {
        type: Sequelize.STRING
      },
      port_perangkat: {
        type: Sequelize.STRING
      },
      deskripsi_perangkat: {
        type: Sequelize.TEXT
      },
      port_trunk: {
        type: Sequelize.STRING
      },
      deskripsi_trunk: {
        type: Sequelize.STRING
      },
      id_opearator: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Configs');
  }
};