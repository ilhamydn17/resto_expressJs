const express = require('express')
const reser_route = express()
const bodyParser = require('body-parser'); 
const Reservation = require('../model/reservations')

require('../utils/db')


reser_route.use(bodyParser.json());
reser_route.use(bodyParser.urlencoded({ extended: false }));


reser_route.post('/reservation/store', async (req, res) => {
    try {
        const { name_order, date_order, table_type, person_count, addition_message } = req.body
        const reservation = new Reservation({name_order, date_order, table_type, person_count, addition_message})

        await reservation.save()
        res.redirect('/')
    } catch (error) {
        res.status(400).json({ error: 'Failed to create a reservation' });
    }
})

// Delete a reservation by ID
reser_route.delete('/reservations/:id/delete', async (req, res) => {
    try {
       await Reservation.findByIdAndRemove(req.params.id);
        res.render('index')
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete reservation' });
    }
  });  

module.exports = reser_route