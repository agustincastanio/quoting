import dbConnect from '../../../../utils/dbConnect'
import Quote from '../../../../models/Quote'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const quotes = await Quote.find({}).
          populate('status').
          populate('addressType').
          populate('requestType').
          populate('category').
          populate('currency').
          populate({
            path: 'items',
            populate: { path: 'item' }
          })
        res.status(200).json({ success: true, data: quotes })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const quote = await Quote.create(req.body)
        res.status(201).json({ success: true, data: quote })
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