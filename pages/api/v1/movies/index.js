import { connectToDatabase } from '../../../../util/mongodb'
import objectRenameKeys from 'object-rename-keys';

export default async (req, res) => {

    const { db } = await connectToDatabase()
    const { method } = req
    const changesMap = {
        _id: 'id'
    }

    switch (method) {
        case 'GET':
            try {
                const items = await db.collection('movies').find().toArray()
                items.forEach(function (movie) {
                    
                });
                const itemsNew = objectRenameKeys(items, changesMap);
                return res.status(200).json(itemsNew)
            } catch (err) {
                console.log(err)
                return res.status(422).send(err)
            }
        case 'POST':
            const movie = req.body

            try {
                await db.collection('movies').insertOne(movie);
                return res.json('Movie Sucesfully created')
            } catch (err) {
                console.log(err)
                return res.status(422).send(err)
            }
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}