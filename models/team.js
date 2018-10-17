module.exports = (sequelize, DataTypes) => {

    const SuperBowlTable = sequelize.define("SuperBowlTable", {
        SuperBowlTeams: {
            type: DataTypes.STRING
        },
        SuperBowlWins: {
            type: DataTypes.STRING
        }
    });
    return SuperBowlTable;
};