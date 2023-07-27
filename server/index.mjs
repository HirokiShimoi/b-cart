import env fron "dotenv"
env.config();


import { mongoClient, Server} from mongodb
const client = new MongoClient(process.env.MONGO_URI)

async function getCollection() {

    try {
        await client.connect();
        const db = client.db("bookxhelf");
        return db.collection("books")
    } catch {
        client.close()
    }

}

async function getSLLbooks() {
    const col = await getCollection();
    const cursol = col.find();

}