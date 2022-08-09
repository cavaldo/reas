const express = require('express');
const router = express.Router();
const Estate = require('../models/Estate');

router.post('/', (request, response) => {

    const estate = new Estate({
        type: request.body.type,
        region: request.body.region,
        district: request.body.district,
        personal_data: {
            name: request.body.personal_data.name,
            phone: request.body.personal_data.phone,
            email: request.body.personal_data.email
        }
    });

    console.log('estate', estate);

    estate.save()
    .then(data => {
        response.json(data);
        //response.sendStatus(201);
    })
    .catch(err => {
        console.log('error', err);
        response.json({message: err});
    })

    
})

module.exports = router;