// import mongoose from "mongoose"


// const DBConnection=()=>{



//     const MONGO_URI =`mongodb://Project:19682003@ac-uwuzek4-shard-00-00.mlnje0j.mongodb.net:27017,ac-uwuzek4-shard-00-01.mlnje0j.mongodb.net:27017,ac-uwuzek4-shard-00-02.mlnje0j.mongodb.net:27017/?ssl=true&replicaSet=atlas-pzgp8k-shard-0&authSource=admin&retryWrites=true&w=majority`
//     try {
//          mongoose.connect(MONGO_URI, { useNewUrlParser: true });
//         console.log('Database connected successfully');
//     } catch (error) {
//         console.log('Error while connecting with the database ', error.message);
//     }

// }

// export default DBConnection;

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-uwuzek4-shard-00-00.mlnje0j.mongodb.net:27017,ac-uwuzek4-shard-00-01.mlnje0j.mongodb.net:27017,ac-uwuzek4-shard-00-02.mlnje0j.mongodb.net:27017/?ssl=true&replicaSet=atlas-pzgp8k-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;