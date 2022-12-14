'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
    { 
      id: 1,
      email:'lando45@ymail.com',
      nama: 'lando',
      password: '$2b$10$ES7XZo5aG2ikhXcMNj6xCO.HTT3l9Xt8Q.yQrs5oWm06rVCUjPngu',
      divisi: "divisi 1",
      jabatan: "Admin",
      tahun_masuk: "2022",
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    { 
      id: 2,
      email:'wilando45@ymail.com',
      nama: 'Wilando Putrayuda',
      password: '$2b$10$ES7XZo5aG2ikhXcMNj6xCO.HTT3l9Xt8Q.yQrs5oWm06rVCUjPngu',
      divisi: "divisi 2",
      jabatan: "Staff",
      tahun_masuk: "2022",
      createdAt: new Date(),
      updatedAt: new Date() 
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
