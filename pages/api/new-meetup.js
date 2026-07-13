import { MongoClient } from "mongodb"

export default async function handler(req, res){
    if (req.method === 'POST') {
        const data = req.body;
        let client;

        try {
            // 1. Added 'meetups' database name to the URI string
            const uri = 'mongodb+srv://meenakshi_sundaram:Ts4aU9Q5ios4VbbP@cluster0.rbuqx46.mongodb.net/meetups?appName=Cluster0&compressors=zlib';
            
            client = await MongoClient.connect(uri);
            const db = client.db();
            const meetupData = db.collection('meetups');
            
            const result = await meetupData.insertOne(data);
            console.log("Database insertion result:", result);
            
            client.close();
            
            // 2. Success Response
            return res.status(201).json({ message: 'Data Inserted', id: result.insertedId });

        } catch (error) {
            // Make sure to close the client if it managed to open before the error
            if (client) client.close();
            
            console.error("MongoDB Error Details:", error);
            
            // 3. Fallback Response (Guarantees the frontend gets valid JSON instead of HTML)
            return res.status(500).json({ 
                message: 'Failed to insert data into the database.', 
                error: error.message 
            });
        }
    } else {
        // Handle non-POST requests safely
        return res.status(405).json({ message: 'Method not allowed' });
    }
}