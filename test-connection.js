// MongoDB Connection Test Script
const mongoose = require('mongoose');
require('dotenv').config();

console.log('Testing MongoDB connection...');
console.log('MONGO_URI:', process.env.MONGO_URI);

async function testConnection() {
    try {
        console.log('Attempting to connect to MongoDB...');
        
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log('✅ Connected to MongoDB successfully!');
        console.log('Database:', mongoose.connection.db.databaseName);
        console.log('Host:', mongoose.connection.host);
        console.log('Port:', mongoose.connection.port);
        
        // Test a simple operation
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('Collections found:', collections.length);
        
        await mongoose.disconnect();
        console.log('✅ Disconnected successfully');
        
    } catch (error) {
        console.error('❌ MongoDB connection failed:');
        console.error('Error type:', error.name);
        console.error('Error message:', error.message);
        
        if (error.message.includes('querySrv ENOTFOUND')) {
            console.log('\n🔍 DNS Resolution Issue Detected:');
            console.log('1. Check if your cluster URL is correct');
            console.log('2. Verify your internet connection');
            console.log('3. Try using a different network (mobile hotspot)');
            console.log('4. Check if your firewall is blocking the connection');
        }
        
        process.exit(1);
    }
}

testConnection();
