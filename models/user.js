'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');
const { getPagination, getPagingData } = require('../utils/pagination');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async encrypt(password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      return hashedPassword;
    }

    
    static async tambah({
      email, nama, password, divisi, jabatan, tahun_masuk
    }) {
      const encryptedPassword = await this.encrypt(password);
      /*
        encrypt dari static method
        encryptedPassword akan sama dengan string hasil enkripsi password dari method encrypt
      */

      return this.create({
        email, nama, password: encryptedPassword, divisi, jabatan, tahun_masuk
      });
    }

    static retriveById(id) {
      return this.findOne({ where: { id } });
    }

    static async edit({
      email, nama, password, divisi, jabatan, tahun_masuk
    }, id) {
      if (password !== '') {
        const encryptedPassword = await this.encrypt(password);
        return this.update({
          email, nama,  password: encryptedPassword, divisi, jabatan, tahun_masuk,
        }, { where: { id } });
      }

      return this.update({ email, nama, divisi, jabatan, tahun_masuk }, { where: { id } });
    }

    static async ubahPass({
      password
    }, id) {
      const encryptedPassword = await this.encrypt(password);
      return this.update({ password: encryptedPassword }, { where: { id } });
    }


  }
  User.init({
    email: DataTypes.STRING,
    nama: DataTypes.STRING,
    password: DataTypes.STRING,
    divisi: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    tahun_masuk: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};