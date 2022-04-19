// import dotenv from "dotenv"


//Initializing our dotenv
// dotenv.config();

//Method for connect and retrieve data from MongoDb to Express
// const { MongoClient } = require("mongodb");
// export const getDataFromMongo = async() => MongoClient.connect(
//     process.env.MONGODB_URL as string,
//     {
//         useUnifiedTopology : true
//     },
//     async (error: any, client: { db: () => any; }) => {
//         if (error) {
//             throw error;
//         }
//         console.log("DB Connected!!");
//         const database = client.db();
//         const collection = database.collection("todos");

//         let dataFromMongo = await collection.find().toArray();
//         console.log(dataFromMongo);
//     }
// );

//Method to send data to MongoDB using Express
// const { MongoClient } = require("mongodb");
// export const postDataToMongoDb = async () => MongoClient.connect(
//     process.env.MONGODB_URL as string,
//     {
//         useUnifiedTopology: true
//     },
//     async (error: any, client: { db: () => any; }) => {
//         if (error) {
//             throw error;
//         }
//         console.log("DB Connected!!");
//         const database = client.db();
//         const collection = database.collection("todos");

//         let sendDataToMongoDB = await collection.insertOne(
//             {
//                 'name': "Uma Mahra",
//                 'email': "uma.mahra4546@gmail.com",
//             }, (err: any, data: any) => {
//                 if (err) throw err;
//                 console.log(data);
//             }
//         )
//     }
// );

//Method to Post Many Documents to MongoDB using Express
// const { MongoClient } = require("mongodb");
// export const postManyDocumentToMongoDb = async () => MongoClient.connect(
//     process.env.MONGODB_URL as string,
//     {
//         useUnifiedTopology: true
//     },
//     async (error: any, client: { db: () => any; }) => {
//         if (error) {
//             throw error;
//         }
//         console.log("DB Connected!!");
//         const database = client.db();
//         const collection = database.collection("todos");

//         let sendDataToMongoDB = collection.insertMany(
//             [
//                 {
//                     'name': "Sweta Mahra",
//                     'email': "sweta.mahra4546@gmail.com",
//                 },
//                 {
//                     'name': "Sweta Mahra 12",
//                     'email': "sweta.mahra12@gmail.com",
//                 },
//                 {
//                     'name': "Sweta Mahra 123",
//                     'email': "sweta.mahra123@gmail.com",
//                 }
//             ], (err: any, data: any) => {
//                 if (err) throw err;
//                 console.log(data);
//             }
//         )
//     }
// );

//Method to Find A Document From MongoDB using Express
// const { MongoClient } = require("mongodb");
// export const findDocumentFromMongoDb = async () => MongoClient.connect(
//     process.env.MONGODB_URL as string,
//     {
//         useUnifiedTopology: true
//     },
//     async (error: any, client: { db: () => any; }) => {
//         if (error) {
//             throw error;
//         }
//         console.log("DB Connected!!");
//         const database = client.db();
//         const collection = database.collection("todos");

//         const filter = {
//             "name": "Mohan Singh Mahra",
//         }

//         let fetchDocument = collection.findOne(
//             filter, (err: any, data: any) => {
//                 if (err) throw err;
//                 console.log(data);
//             }
//         )
//     }
// );

//Method to Delete A Document From MongoDB using Express
// const { MongoClient } = require("mongodb");
// export const deletedDocumentFromMongoDB = async () => MongoClient.connect(
//     process.env.MONGODB_URL as string,
//     {
//         useUnifiedTopology: true
//     },
//     async (error: any, client: { db: () => any; }) => {
//         if (error) {
//             throw error;
//         }
//         console.log("DB Connected!!");
//         const database = client.db();
//         const collection = database.collection("todos");

//         const filter = {
//             "name": "Mohan Singh Mahra",
//         }

//         let deletedDocument = collection.deleteOne(
//             filter, (err: any, data: any) => {
//                 if (err) throw err;
//                 console.log(data);
//             }
//         )
//     }
// );


