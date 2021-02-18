import { Db } from 'mongodb';
import { MongoClient } from 'mongodb';

interface connectType{
    db: Db;
    client: MongoClient
}

const client = new MongoClient(process.env.TESTANDO_CONEXAO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default async function connect (): Promise<connectType>{
    
    if(!client.isConnected()) await client.connect();

    const db = client.db('nextteste');
    return {db , client}
}