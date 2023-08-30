"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Airplanes", [
      {
        modelNumber: "airbus220",
        capacity: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "airbus310",
        capacity: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Airplanes", {
      [Op.or]: [{ modelNumber: "airbus220" }, { modelNumber: "airbus310" }],
    });
  },
};
