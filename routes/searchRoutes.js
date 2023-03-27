const router = require("express").Router();
const properties = require("../models/propertySchema");
const { validateToken } = require("../middleware/token");


//listing all properties 
router.get("/properties/all", validateToken, async (req, res) => {
    try {
        const data = await properties.find();
        //console.log(data.length);
        if (!data) {
            res.status(404).json({
                message: "No properties found"
            })
        } else {
            res.status(200).json({
                data
            })
        }
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

//search property by id
router.get("/properties/:id", validateToken, async (req, res) => {
    try {
        const prop_id = req.params.id;
        const data = await properties.findOne({ ppdId: prop_id });
        if (!data) {
            res.status(400).json({
                message: "property not found"
            })
        } else {
            res.status(201).json({
                message: "successful",
                data
            })
        }
    }
    catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        })
    }
})

//updating the property status using ppdId
router.put("/properties/:id", validateToken, async (req, res) => {
    try{
        let data = await properties.updateOne(
            { _id: req.params.id },
            {
                $set: req.body  // setting required objects wherever changes are needed
            }
        )
        res.status(200).send(data);
    }
    catch{
        res.status(400).json({ message: "unable to update" })
    }
})
module.exports = router;