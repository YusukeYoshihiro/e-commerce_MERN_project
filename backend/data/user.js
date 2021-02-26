import bcrypt from 'bcryptjs';

const users = [
  {
    name : 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name : 'Yusuke Y',
    email: 'yusuke@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name : 'Akari T',
    email: 'akari@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users;