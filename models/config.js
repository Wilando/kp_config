'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Config extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async tambah({
      jenis_perangkat, nama_customer, nama_perangkat, layanan, vlan_layanan, vlan_nms, ip_address,
      subnet, ip_route, port_perangkat, deskripsi_perangkat, port_trunk, deskripsi_trunk, id_opearator
    }) {

      return this.create({
        jenis_perangkat, nama_customer, nama_perangkat, layanan, vlan_layanan, vlan_nms, ip_address,
        subnet, ip_route, port_perangkat, deskripsi_perangkat, port_trunk, deskripsi_trunk, id_opearator
      });

    }

    static edit({
      jenis_perangkat, nama_customer, nama_perangkat, layanan, vlan_layanan, vlan_nms, ip_address,
      subnet, ip_route, port_perangkat, deskripsi_perangkat, port_trunk, deskripsi_trunk}, id)
    {

      return this.update({
        jenis_perangkat, nama_customer, nama_perangkat, layanan, vlan_layanan, vlan_nms, ip_address,
        subnet, ip_route, port_perangkat, deskripsi_perangkat, port_trunk, deskripsi_trunk
      }, { where: { id } });
    }

  }
  Config.init({
    jenis_perangkat: DataTypes.STRING,
    nama_customer: DataTypes.STRING,
    nama_perangkat: DataTypes.STRING,
    layanan: DataTypes.STRING,
    vlan_layanan: DataTypes.STRING,
    vlan_nms: DataTypes.STRING,
    ip_address: DataTypes.STRING,
    subnet: DataTypes.STRING,
    ip_route: DataTypes.STRING,
    port_perangkat: DataTypes.STRING,
    deskripsi_perangkat: DataTypes.TEXT,
    port_trunk: DataTypes.STRING,
    deskripsi_trunk: DataTypes.STRING,
    id_opearator: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Config',
  });
  return Config;
};