const request = require('supertest');
const mongoose = require('mongoose');

require('dotenv').config();
describe('Users',() => {
    let connection;
    let database;
    const users = mongoose.model("test_"+process.env.COLLECTION,mongoose.Schema({
        name: String,
        email: String,
        password: String
    }));

    beforeAll(async () => {
       
        connection = await mongoose.connect('mongodb+srv://videoData:504030asd@cluster0.tellj.mongodb.net/test_'+process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true });
        db = mongoose.connection;
        const collection = process.env.COLLECTION;
        await db.createCollection(collection);

    });

    afterAll(async () => {

        const collection = "test_"+process.env.COLLECTION;
        await db.dropCollection(collection);
        await db.dropDatabase();
        await db.close();
        await connection.close();

    });

    
    test("Add Users POST /signup/createUser",async () => {

        const response = await users.create({
            name: process.env.CUSTOMER_NAME,
            email: process.env.CUSTOMER_EMAIL,
            password:process.env.CUSTOMER_PASSWORD
        });
        await response.save();
        expect(response.name).toBe(process.env.CUSTOMER_NAME);

    });

 
    test("Login User POST /login/search",async () => {
        const response = {
            email: process.env.CUSTOMER_EMAIL,
            password:process.env.CUSTOMER_PASSWORD
        };
        let userEmail = users.findOne(response.email);
        expect(userEmail.email).toBe(response.email)
        expect(response.password).toBe(users.password);
       

    });
 
});

