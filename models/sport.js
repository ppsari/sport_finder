'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sport = sequelize.define('Sport', {
    venue_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Sport.belongsTo(models.Venue,{foreignKey: 'venue_id'});
        Sport.hasMany(models.SportDetail,{foreignKey:'sport_id'});
      }
    }
  });
  return Sport;
};