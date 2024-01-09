const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB URL

// Database Name
const dbName = 'your_database_name';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Connect to the MongoDB server
async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);

    // Use db variable to perform database operations

    // Example: Insert a document into a collection
    const collection = db.collection('your_collection_name');
    await collection.insertOne({ key: 'value' });

  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  } finally {
    // Close the connection when done
    await client.close();
    console.log('MongoDB connection closed');
  }
}

// Call the function to establish the connection
connectToMongo();
