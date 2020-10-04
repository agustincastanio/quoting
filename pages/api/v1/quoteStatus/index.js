import dbConnect from '../../../../utils/dbConnect'
import QuoteStatus from '../../../../models/QuoteStatus'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const quoteStatuses = await QuoteStatus.find({})
        res.status(200).json({ success: true, data: quoteStatuses })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const quoteStatus = await QuoteStatus.create(req.body)
        res.status(201).json({ success: true, data: quoteStatus })
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