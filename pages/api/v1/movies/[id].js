import { connectToDatabase } from '../../../../util/mongodb'
import { ObjectId } from 'mongodb';

export default async (req, res) => {

    const { db } = await connectToDatabase()
    const { method } = req
    const id = req.query.id

    switch (method) {
        case 'GET':
            try {
                const movie = await db.collection('movies').findOne({ '_id': new ObjectId(id) });
                return res.status(200).json(movie)
            } catch (err) {
                console.log(err)
                return res.status(422).send(err)
            }
        case 'DELETE':
            try {
                await db.collection('movies').deleteOne({ '_id': new ObjectId(id) });
                return res.json('Movie Sucesfully deleted')
            } catch (err) {
                console.log(err)
                return res.status(422).send(err)
            }
        case 'PATCH':
            const movieBody = req.body
            try {
                const query = { '_id': new ObjectId(id) };
                const options = {
                    upsert: false,
                };
                const replacement = { ...movieBody }

                await db.collection('movies').replaceOne(query, replacement, options);

                return res.json('Movie Sucesfully updated')
            } catch (err) {
                console.log(err)
                return res.status(422).send(err)
            }

        default:
            res.setHeader('Allow', ['GET', 'DELETE', 'PATCH'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}