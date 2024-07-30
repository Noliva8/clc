const Member = require('./member');
const Pastor = require('./pastor');

// Define associations
Pastor.hasMany(Member, {
  foreignKey: 'pastor_id',
  onDelete: 'CASCADE'
});

Member.belongsTo(Pastor, {
  foreignKey: 'pastor_id'
});

module.exports = { Member, Pastor };
