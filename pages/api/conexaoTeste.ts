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

    const response = await db.collection('collectionTeste').insertOne({
        name: 'Bruno2',
        age: 22,
    });

    res.status(200).json(response.ops[0]);
};