const mongoose = require('mongoose');
const PropertySchema = mongoose.Schema({
    PPDID: {
        type: String,
        required: true
    },
    propertyType: {
      type: String,
      enum: ["Home", "Flat", "Plot"],
      required: true

    },
    views: {
        type: Number,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    negotiable: {
        type: String,
        enum: ["Yes","No"]
    },
    price: {
        type:Number
    }, 
    ownership: {
        type: String,
        enum: ["Individual", "Joint"]
    },
    propertyAge: {
          type: String,
          enum: ["Below 10 years", "Above 10 years"]
    },
    propertyApproved: {
         type: String,
         enum: ["Yes","No"]
    },
    propertyDescription:{
        type: String
    },
    bankLoan: {
        type: String,
        enum: ["Yes", "No"]
    },
    length : {
        type: Number
    },
    breadth : {
        type : Number
    },
    totalArea :{
        type : Number,
        required: true
    },
    areaUnit : {
        type : String,
        enum : ['sq.mt', 'sq.ft']
    },
    noOfBhk : {
        type : Number
    },
    noOfFloor : {
        type : Number,
        enum : ['Ground', '1', '2', '3', 'penthouse', '4', 'more than 4']
    },
    attached : {
        type : String,
        enum : ['Yes', 'No']
    },
    westernToilet : {
        type : String,
         enum : ['Yes', 'No']
    },
    furnished : {
        type : String,
        enum : ['Fully Furnished', 'Semi Furnished', 'None']
    },
    carParking : {
        type : String,
        enum : ['Yes', 'No']
    },
    lift : {
        type : String,
        enum : ['Yes', 'No']
    },
    electricity : {
        type : String
    },
    facing : {
        type : String,
        enum : ['North', 'East', 'West', 'South']
    },
    name : {
        type : String
    },
    mobile : {
        type : Number,
        required: true
    },
    postedBy : {
        type : String,
        enum : ["Owner","Broker"]
    },
    saleType : {
        type : String,
        enum:["unsold", "sold"],
        required: true
        
    },
    featuredPackage: {
        type : Number
    },
    ppdPackage:{
        type : Number
    },
    photo: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    area: {
        type: String
    },
    pincode: {
        type: Number
    },
    address: {
        type: String
    },
    landmark: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    }

})
const Property = mongoose.model("property", PropertySchema);
module.exports = Property;
