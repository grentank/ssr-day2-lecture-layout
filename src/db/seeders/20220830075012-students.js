const fs = require('fs/promises');
const path = require('path');

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
    const students = (await fs.readFile(path.join(__dirname, './finalFile.txt'), 'utf-8'))
      .split('\n')
      .map((string) => string.split(','))
      .map((arr) => ({
        name: arr[0],
        email: arr[1],
        github: arr[2],
        cat: arr[3],
        cups: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('Students', students, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Students', null, {});
  },
};
