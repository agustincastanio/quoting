import { connectToDatabase } from '../../../util/mongodb'

export default async (req, res) => {

    const { db } = await connectToDatabase()
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const items = await db.collection('movies').find().toArray()
                return res.status(200).json(items)
            } catch (err) {
                console.log(err)
                return res.status(422).send(err)
            }
        case 'POST':
            const movie = req.body

            try {
                await db.collection('movies').insertOne(movie);
                return res.json('Movie Sucesfully updated')
            } catch (err) {
                console.log(err)
                return res.status(422).send(err)
            }
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}