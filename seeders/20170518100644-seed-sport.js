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
    return queryInterface.bulkInsert('Sports', [{
      id: 1,
      venue_id: 1,
      name: "Futsal",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      venue_id: 2,
      name: "Futsal",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      venue_id: 3,
      name: "Futsal",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      venue_id: 4,
      name: "Basketball",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      venue_id: 5,
      name: "Futsal",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      venue_id: 5,
      name: "Mini Soccer",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      venue_id: 6,
      name: "Archery",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      venue_id: 7,
      name: "Tennis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      venue_id: 8,
      name: "Archery",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      venue_id: 9,
      name: "Trampoline",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      venue_id: 10,
      name: "Tennis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      venue_id: 11,
      name: "Tennis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      venue_id: 12,
      name: "Tennis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      venue_id: 13,
      name: "Tennis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      venue_id: 14,
      name: "Tennis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      venue_id: 15,
      name: "Futsal",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      venue_id: 15,
      name: "Basketball",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      venue_id: 16,
      name: "Futsal",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 19,
      venue_id: 17,
      name: "Volleyball",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 20,
      venue_id: 17,
      name: "Badminton",
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
