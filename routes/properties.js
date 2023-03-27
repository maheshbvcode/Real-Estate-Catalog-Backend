const router = require("express").Router();
const property = require('../models/propertySchema');
const user = require('../models/userSchema');
const { generateToken, validateToken } = require("../middleware/token");


router.post('/properties/add',validateToken, async (req, res) => {
    // console.log(req.body)
    try {
        const lastProp = await property.find().sort({ _id: -1 }).limit(1);
           //console.log(value);
            let ppd_id = "PPD";
            //console.log(value.length);
            if (lastProp.length !== 0) {
                ppd_id = parseInt(lastProp[0].ppdId.split("D")[1]) + 1;
                // console.log(ppd_id)
            } else {
                ppd_id =1100;
                // console.log(ppd_id)
            }
            const views = parseInt(Math.random() * 100);
            const dayLeft = parseInt(Math.random() * 30);
            
            const {propertyType,length,breadth,contact} = req.body;
            const area = parseInt(req.body.length) * parseInt(req.body.breadth) ; 
            const newProperty = await property.create({
                ppdId: "PPD"+ppd_id,
                views: views,
                status: "Unsold",
                daysLeft: dayLeft,
                propertyType,
                length,
                breadth,
                totalArea: area,
                contact,
                ...req.body

            });

            res.status(200).json({
                newProperty
            })
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            message : err.message
        })

    }
})





module.exports = router;