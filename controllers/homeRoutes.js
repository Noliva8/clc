const router = require('express').Router();
const { Member, Pastor } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try{
        const memberData = await Member.findAll({
            include: [
                {
                    model: Pastor,
                    attributes: ['name'],
                },
            ],

        });

        const members = memberData.map((member) => member.get({ plain: true }));

        res.render('homepage', { 
      members, 
      logged_in: req.session.logged_in  
    });


    } catch(error){
        res.status(500).json(error);
    }
})



module.exports = router;