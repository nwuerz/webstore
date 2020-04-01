var Sequelize = require('sequelize');

// Create mySQL connection
var sequelize = new Sequelize('zombie_db', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;