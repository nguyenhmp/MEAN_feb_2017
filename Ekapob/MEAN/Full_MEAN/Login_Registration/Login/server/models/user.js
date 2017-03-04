// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Login and Registration
// Assignment: Login and Registration

console.log("Server/Models/user.js");

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First name cannot be empty!"],
        minlength: [2, "First Name must have at least 2 characters!"],
        trim: true
    },
    last_name: {
        type: String,
        required: [true, "Last name cannot be empty!"],
        minlength: [2, "Last Name must have at least 2 characters!"],
        trim: true
     },
    dob: {
        type: Date,
        required: [true, "Date of birth cannot be empty!"]
    },
    email: {
        type: String,
        required: [true, "Email cannot be empty!"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address!'],
        unique: [true, "Email already registered. Please register using a different email!"]
    },
    password: {
        type: String,
        required: [true, "Password cannot be empty!"],
        minlength: [8, "Password must have at least 8 characters!"],
        validate: [{
            validator: function( value ) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Password failed validation, you must have at least 1 number, uppercase, lowercase and special character."
        },
        {
            validator: function (value) {
                return value === this.confirm_password
            },
            message: "Please make sure password and confirm password match!"
        }]
    }
}, {timestamps: true});

UserSchema.pre("save", function (done) {
    var hashed_password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    this.password = hashed_password;
    console.log(this.password);
    done();
})

var User = mongoose.model('User', UserSchema);
