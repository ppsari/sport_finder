'use strict';
module.exports = function(sequelize, DataTypes) {
  var SportDetail = sequelize.define('SportDetail', {
    sport_id: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    room: DataTypes.STRING,
    price: DataTypes.INTEGER,
    avail: DataTypes.STRING,
    booked: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        SportDetail.belongsTo(models.Sport,{foreignKey: 'sport_id'});
      }
    }
  });
  return SportDetail;
};