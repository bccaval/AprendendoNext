import { NextApiRequest, NextApiResponse} from 'next';
import connect from '../../utils/database';

interface ResponseType{
    message: string;
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
): Promise<void> => {

    const {db} = await connect();

    const reponse = await db.collection('collectionTeste').insertOne({
        name: 'Rodrigo',
        age: 22,
    });

    res.status(200).json({message: 'Foi'});
};