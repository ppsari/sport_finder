'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('SportDetails', [{
      sport_id: 1,
      room: "Lapangan 1",
      price: 100000,
      price_user: "100.000",
      capacity: 16,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 1,
      room: "Lapangan 2",
      price: 100000,
      price_user: "100.000",
      capacity: 16,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 2,
      room: "Lapangan 1",
      price: 100000,
      price_user: "100.000",
      capacity: 16,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 3,
      room: "Lapangan Kecil",
      price: 85000,
      price_user: "85.000",
      capacity: 16,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 3,
      room: "Lapangan Besar",
      price: 140000,
      price_user: "140.000",
      capacity: 24,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 4,
      room: "Lapangan Indoor",
      price: 385000,
      price_user: "385.000",
      capacity: 16,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 4,
      room: "Lapangan Outdoor 1",
      price: 350000,
      price_user: "350.000",
      capacity: 16,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 4,
      room: "Lapangan Outdoor 2",
      price: 350000,
      price_user: "350.000",
      capacity: 16,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 5,
      room: "Lapangan 1",
      price: 150000,
      price_user: "150.000",
      capacity: 16,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 5,
      room: "Lapangan 2",
      price: 150000,
      price_user: "150.000",
      capacity: 16,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 6,
      room: "Lapangan 1",
      price: 1100000,
      price_user: "1.100.000",
      capacity: 32,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 7,
      room: "Lapangan Panahan",
      price: 125000,
      price_user: "125.000",
      capacity: 20,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 8,
      room: "Lapangan 1",
      price: 28000,
      price_user: "28.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 8,
      room: "Lapangan 2",
      price: 28000,
      price_user: "28.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 9,
      room: "Lapangan Panahan",
      price: 140000,
      capacity: 30,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 11,
      room: "Lapangan 1",
      price: 50000,
      price_user: "50.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 11,
      room: "Lapangan 2",
      price: 50000,
      price_user: "50.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 12,
      room: "Lapangan 1",
      price: 40000,
      price_user: "40.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 12,
      room: "Lapangan 2",
      price: 40000,
      price_user: "40.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 13,
      room: "Lapangan 1",
      price: 30000,
      price_user: "30.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 13,
      room: "Lapangan 2",
      price: 30000,
      price_user: "30.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 14,
      room: "Lapangan 1",
      price: 35000,
      price_user: "35.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 14,
      room: "Lapangan 2",
      price: 35000,
      price_user: "35.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 15,
      room: "Lapangan 1",
      price: 30000,
      price_user: "30.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 15,
      room: "Lapangan 2",
      price: 30000,
      price_user: "30.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 15,
      room: "Lapangan 2",
      price: 30000,
      price_user: "30.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 16,
      room: "Lapangan Kecil",
      price: 95000,
      price_user: "95.000",
      capacity: 16,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 16,
      room: "Lapangan Besar",
      price: 140000,
      price_user: "140.000",
      capacity: 20,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 17,
      room: "Lapangan Indoor",
      price: 300000,
      price_user: "300.000",
      capacity: 20,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 18,
      room: "Lapangan 1",
      price: 120000,
      price_user: "120.000",
      capacity: 16,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 18,
      room: "Lapangan 2",
      price: 120000,
      price_user: "120.000",
      capacity: 16,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 19,
      room: "Lapangan Indoor",
      price: 200000,
      price_user: "200.000",
      capacity: 20,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 20,
      room: "Lapangan 1",
      price: 50000,
      price_user: "50.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sport_id: 20,
      room: "Lapangan 2",
      price: 50000,
      price_user: "50.000",
      capacity: 4,
      avail: "13,14,15,16,17,18,19,20",
      booked: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};