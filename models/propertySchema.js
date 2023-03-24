const mongoose = require('mongoose');
const PropertySchema = mongoose.Schema({
    PPDID: {
        type: String,
        required: true
    },
    imageUrl: {
        imageUrl: { type: String },
        public_id: { type: String, required: true },
    },
    propertyType: {
      type: String,
      required: true
    },
    views: {
        type: Number
    },
    status : {
        type : String,
        default: "unsold"
    },
    days: {
        type: Number
    },
    negotiable: {
        type: String
    },
    price: {
        type:Number
    }, 
    ownership: {
        type: String
    },
    propertyAge: {
          type: String
    },
    propertyApproved: {
         type: String
    },
    propertyDescription:{
        type: String
    },
    bankLoan: {
        type: String
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
        type : String
    },
    noOfBhk : {
        type : Number
    },
    noOfFloor : {
        type : Number
    },
    attached : {
        type : String
    },
    westernToilet : {
        type : String
    },
    furnished : {
        type : String
    },
    carParking : {
        type : String
    },
    lift : {
        type : String
    },
    electricity : {
        type : String
    },
    facing : {
        type : String
    },
    name : {
        type : String
    },
    mobile : {
        type : Number,
        required: true
    },
    postedBy : {
        type : String
    },
    saleType : {
        type : String,
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
    },
    userId: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users"
    }

})
const Property = mongoose.model("property", PropertySchema);
module.exports = Property;
