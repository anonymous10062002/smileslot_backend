require("dotenv").config();

// MongoDb configuration
const mongoose=require('mongoose');
const mongoDB=mongoose.connect(process.env.mongoURL);

// Redis configuration
// const redis=require('redis');
// const client=redis.createClient({url:process.env.redisURL});
// client.on("error", (err) => console.log("Redis Client Error", err));
const {createClient}=require('redis');

const client = createClient({
    password: 'ktJZKRNcRFX41epr7TLO2z0vzHNb8AfN',
    socket: {
        host: 'redis-18694.c301.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 18694
    }
});

module.exports={mongoDB,client}