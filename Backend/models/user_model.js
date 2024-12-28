const mongoose = require('mongoose');

// Define the schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    dateOfBirth: {
        type: Date
    },
    location: {
        type: String
    },
    profilePic: {
        type: String,
        default: "https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=740&t=st=1706278022~exp=1706278622~hmac=85d726905d3b42b41a911d541b5421c6565de460f758947107491ecf0b1e9a22"
    }
}, {
    timestamps: true
});

// Create the model
const User = mongoose.model('User', UserSchema);

// Export the model
module.exports = User;


// timestamps: {
//     currentTime: () => {
//         let currentDate = new Date();
//         let offset = 330; // IST offset UTC +5:30 
//         let istDate = new Date(currentDate.getTime() + (offset * 60 * 1000));
//         return istDate;
//     }
// }
