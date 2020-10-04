import dbConnect from '../../../../utils/dbConnect'
import Currency from '../../../../models/Currency'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const currencies = await Currency.find({})
        res.status(200).json({ success: true, data: currencies })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const currency = await Currency.create(req.body)
        res.status(201).json({ success: true, data: currency })
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