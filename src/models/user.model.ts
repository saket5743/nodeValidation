import mongoose from 'mongoose'
import validator from 'validator'

interface IUser {
  name: string,
  username: string,
  email: string,
  phone: number,
  value: string | number
}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^[a-zA-Z\s-]{2,30}$/.test(value),
      message: 'Name must be 2 to 30 character long'
    }
  },
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => /^[a-zA-Z0-9]{3,15}$/.test(value),
      message: 'Username must be 3 to 15 characters long'
    }
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value),
      message: 'Email must be required'
    }
  },

  phone: {
    type: Number,
    required: true,
    validate: {
      validator: (value: number) => /^\+?[0-9]{10,12}$/.test(value.toString()),
      message: "Phone number is must be in 10 to 12 digit and start with +"
    }
  }
}
)

const User = mongoose.model('User', userSchema);

export default User;