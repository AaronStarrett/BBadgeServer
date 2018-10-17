module.exports = (sequelize, DataTypes) => {

  const Division = sequelize.define("division", {
    Division: {
      type: DataTypes.STRING
    },
    TeamName: {
      type: DataTypes.STRING
    },
    SuperBowls: {
      type: DataTypes.STRING
    }
  });
  return Division;
};
