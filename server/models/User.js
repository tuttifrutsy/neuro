const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre: {
    name: String,
    firstname: String,
    lastname: String
  },
  dateB: Date,
  age: Number,
  gender: String,
  profileImage: String,
  phone: Number,
  password: String,
  email: String,
  Dx: String,
  Px: [String],
  alergy: String,
  direction: {
    address1: String, //Calle
    address2: String, // Interior
    neighborhood: String,
    city: String,
    state: String,
    latitude: Number,
    longitude: Number
  },
  tips:[{type: Schema.Types.ObjectId, ref: 'Care'}],
  role:{
    type: String,
    enum:['USER','ADMIN', 'DOCTOR']
  },
},
{
  timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;