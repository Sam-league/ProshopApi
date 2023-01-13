import bcrypt from "bcrypt";

const users = [
    {
        name: "Admin User",
        email: "admin@exmaple.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin: true, 
    },
    {
        name: "John doe",
        email: "john@exmaple.com",
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: "Jane doe",
        email: "jane@exmaple.com",
        password: bcrypt.hashSync('123456',10),
    },
];

export default users;