const mongoose = require('mongoose');
const PropertySchema = mongoose.Schema({
    ppdId: {
        type: String,
        
    },
    imageUrl: {
        type: String 
        },
    propertyType: {
      type: String,
      
    },
    views: {
        type: Number,
        
    },
    status : {
        type : String,
        default: "unsold",
        
    },
    daysLeft: {
        type: Number,
        
    },
    length : {
        type: Number, 
    },
    breadth : {
        type : Number, 
    },
    totalArea :{
        type : Number,
        
    },
    contact : {
        type : Number,
        
    },
    negotiable: {type: String},
    price: {type:Number}, 
    ownership: {type: String},
    propertyAge: {type: String},
    propertyApproved: {type: String},
    propertyDescription:{type: String},
    bankLoan: {type: String},
    
   
    
    areaUnit : {type : String},
    noOfBhk : {type : Number},
    noOfFloor : {type : Number},
    attached : {type : String},
    westernToilet : {type : String},
    furnished : {type : String},
    carParking : {type : String},
    lift : {type : String},
    electricity : {type : String},
    facing : {type : String},
    name : {type : String},
    
    postedBy : {type : String},
    featuredPackage: {type : Number},
    ppdPackage:{type : Number},
    email: {type: String},
    city: {type: String},
    pincode: {type: Number},
    address: {type: String},
    landmark: {type: String},
    latitude: {type: String},
    longitude: {type: String},
    

})
const Property = mongoose.model("property", PropertySchema);
module.exports = Property;
