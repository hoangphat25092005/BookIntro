// Alternative MongoDB Connection Test
const { MongoClient } = require('mongodb');
require('dotenv').config();

async function testConnection() {
    const uri = process.env.MONGO_URI;
    console.log('Testing connection with URI:', uri.replace(/:[^:@]*@/, ':****@'));
    
    // Test different connection methods
    console.log('\n--- Method 1: Direct MongoClient ---');
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log('✅ Direct connection successful!');
        
        const db = client.db('bookstore');
        const collections = await db.listCollections().toArray();
        console.log('Collections:', collections.length);
        
        await client.close();
    } catch (error) {
        console.error('❌ Direct connection failed:', error.message);
    }
    
    console.log('\n--- Method 2: Alternative URI format ---');
    try {
        // Try without retryWrites parameter
        const altUri = uri.replace('?retryWrites=true&w=majority&appName=BookstoreAPI', '');
        console.log('Trying simplified URI...');
        
        const client = new MongoClient(altUri);
        await client.connect();
        console.log('✅ Simplified connection successful!');
        await client.close();
    } catch (error) {
        console.error('❌ Simplified connection failed:', error.message);
    }
    
    console.log('\n--- Method 3: Standard mongodb:// format ---');
    try {
        // Try standard connection string (you'll need to get this from Atlas)
        console.log('Note: You may need to get a standard mongodb:// connection string from Atlas');
        console.log('Go to Atlas > Connect > Connect your application > Change to "Standard connection string"');
    } catch (error) {
        console.error('❌ Standard connection failed:', error.message);
    }
}

testConnection().catch(console.error);
