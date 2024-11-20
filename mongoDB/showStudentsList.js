const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017";
const dbName = "411630907";
const collectionName = "studentsList";

(async () => {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("成功連接到 MongoDB");
    
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
    
        const results = await collection.find().toArray();
        for (each of results){
            console.log(each.姓名);
        }
        
        client.close();
    } catch (error) {
        console.error("發生錯誤：", error);
    }
})();