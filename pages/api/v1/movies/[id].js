import fs from 'fs'
import data from '../data.json'
const filePath = '../data.json'

export default (req, res) => {
    const { method } = req
    const id = req.query.id
    const index = data.findIndex(m => m.id === id)

    switch (method) {
        case 'GET':
            const movie = data.find(m => m.id === id)
            res.status(200).json(movie)
            break
        case 'DELETE':
            data.splice(index, 1)

            const stringifiedData = JSON.stringify(data, null, 2)

            fs.writeFile(filePath, stringifiedData, function (err) {
                if (err) {
                    return res.status(422).send(err)
                }

                return res.json('File Sucesfully updated')
            })
            break
        case 'PATCH':
            const movieBody = req.body
            data[index] = movieBody

            const stringifiedData2 = JSON.stringify(data, null, 2)

            fs.writeFile(filePath, stringifiedData2, function (err) {
                if (err) {
                    return res.status(422).send(err)
                }

                return res.json('File Sucesfully updated')
            })
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}