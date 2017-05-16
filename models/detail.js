'use strict';
module.exports = function(sequelize, DataTypes) {
  var Detail = sequelize.define('Detail', {
    sport_id: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    avail: DataTypes.STRING,
    booked: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Detail.belongsTo(models.Sport,{foreignKey: 'sport_id'});
      }
    }
  });
  return Detail;
};