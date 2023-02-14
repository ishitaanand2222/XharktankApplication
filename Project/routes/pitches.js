//ishita
const express = require('express')
const router = express.Router()
const Pitch = require('../models/pitch') 

//1) Post a pitch
router.post('/pitches', async(req,res) => {
    //new schema
    const {entrepreneur,pitchTitle,pitchIdea,askAmount,equity,pitchTime} = req.body;
    try{
        const pitch = new Pitch({
            entrepreneur,pitchTitle,pitchIdea,askAmount,equity,pitchTime 
        })
        if(!pitch)res.status(400);
        await pitch.save()
        res.status(201).send({
            id: pitch.id,
        });
    }catch(err){
        res.status(400);
    }
});

//2) make a counter offer for a pitch
router.post('/pitches/:pitchId/makeOffer', async(req,res) => {
    const {pitchId} = req.params;
    const {investor, amount, equity, comment} = req.body;
    
    
    Pitch.findByIdAndUpdate(
        {_id: pitchId },     
        {
            $push: {
                offers:{
                    investor: investor,
                    amount: amount,
                    equity: equity,
                    comment: comment,
                },
            },
        },
        {new: true},
        (err,data) => {
            if(err)res.status(400).send({message: err.message})

            if(!data)res.status(404).send({message: "Pitch Not Found"});

            else
            res.status(201).send({
                id: pitchId,
            });
        }
    )
})

//3) all the pitches in the reverse chronological order
router.get('/pitches', async(req,res) => {
    try{
        const pitches = await Pitch.find().sort({pitchTime : -1})
        ///check
        if(!pitches)res.status(404);

        res.status(200).send(pitches)
    }catch(err){
        res.status(400).send('Error' + err)
    }
})

//4) fetch a single Pitch
router.get('/pitches/:id', async(req,res) => {
    const pitchId = req.params.id;
    try{
        const pitch = await Pitch.findById(pitchId)

        if(!pitch)res.status(404);

        const {id,entrepreneur,pitchTitle,pitchIdea,askAmount,equity,offers} = pitch;

        return res.status(200).json({

            id,entrepreneur,pitchTitle,pitchIdea,askAmount,equity,offers

        });
    }catch(err){
        res.status(404).send('Error' + err)
    }
})

module.exports = router
