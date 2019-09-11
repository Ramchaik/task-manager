const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model('User', {
  name: {
    type: String,
    require: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate( value ) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid.');
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if ( value < 0 ) {
        throw new Error('Age must be a positive number.');
      }
    }
  }
});

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});
/* 
const Ram = new User({
  name: 'Ram',
  age: 23
});

Ram.save()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  }); */
const Ram = new User({
  name: "  Ram   ",
  email: "  aSSf@gma.com "
});

Ram.save().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});
