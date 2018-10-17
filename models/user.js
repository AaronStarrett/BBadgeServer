module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        // firstname: DataTypes.STRING,
        // lastname: DataTypes.STRING,
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false
        }
        //        id: DataTypes.INTEGER
    })
};