import dbConnect from '../../../../utils/dbConnect'
import RequestType from '../../../../models/RequestType'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const requestTypes = await RequestType.find({})
        res.status(200).json({ success: true, data: requestTypes })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const requestType = await RequestType.create(req.body)
        res.status(201).json({ success: true, data: requestType })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}