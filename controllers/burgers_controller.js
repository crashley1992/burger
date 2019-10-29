const express = require('express');

const router = express.Router();

const burger = require('../models/burger');


router.get('/', (req, res) => {
    burger.all((data) => {
        let hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj);
    });
});

router.post('/burgers/update', (req, res) => {
    burger.create([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, 0
    ], (result) => {
        res.json({id: result.insertId});
        //res.redirect('/'); 
    });
});

router.put('/burgers/update/:id', (req, res) => {
    let condition = `id = ${req.params.id};`
    console.log(`condition`, condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete('/burgers/update/:id', (req,res) => {
        let condition = `id = ${req.params.id}`;
        console.log(condition);
        burger.delete(condition, (result) => {
            if (result.affectedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
               // res.redirect('/');
            }
        });
    });


module.exports = router;
