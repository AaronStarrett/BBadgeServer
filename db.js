const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "Football",
    "postgres",
    "Elway007!",
    {
        host: "localhost",
        dialect: "postgres"
    }
);

sequelize.authenticate().then(
    function () {
        console.log('success')
    },
    function (err) {
        console.log(err)
    }
);

module.exports = sequelize;