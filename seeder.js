import mongoose from "mongoose";
import connectDB from "./config/db.js";
import User from "./model/userModel.js";
import Product from "./model/productModel.js";
import Order from "./model/orderModel.js";
import dotenv from "dotenv";
import products from "./data/products.js";
import users from "./data/User.js";
import colors from "colors";

dotenv.config();

connectDB();

const importData = async () =>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createUsers = await User.insertMany(users);
        const adminUser = createUsers[0]._id;
        const sampleProducts = products.map(product =>{ 
            return {...product,user: adminUser}
        });
        await Product.insertMany(sampleProducts);
        console.log('Data Imported'.green.inverse);
        process.exit(); 
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
} 

const destroyData = async () => { 
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed'.red,inverse);
        process.exit(); 
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
 }

 if(process.argv[2] === '-d'){
    destroyData();
 }else{
    importData()
 }
