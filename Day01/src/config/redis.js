const  { createClient } = require('redis');

const redisclient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-10025.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 10025
    }
});
module.exports = redisclient;





