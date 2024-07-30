const sequelize = require('../config/connection');
const { Member, Pastor } = require('../models');

const memberData = require('./memberData.json');
const pastorData = require('./pastorData.json');


const seedDatabase = async () => {
   try{
     await sequelize.sync({ force: true });

    const members = await Member.bulkCreate(memberData, 
    {
    individualHooks: true,
    returning: true,
  });

  console.log('Members seeded!');

  for (const pastor of pastorData) {
    await Pastor.create({
      ...pastor,
      member_id: members[Math.floor(Math.random() * members.length)].id,
    });
  }
   console.log('Pastors seeded!');


  console.log('Database seeded successfully!');

   }catch(error){
    console.error('Error seeding database:', error);
   } finally {
     process.exit(0);
   }
     
};

seedDatabase();