'use strict';
module.exports = function(sequelize, DataTypes) {
  var Venue = sequelize.define('Venue', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    contact: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Venue.hasMany(models.Sport,{foreignKey: 'venue_id'});
      }
    }
  });
  return Venue;
};