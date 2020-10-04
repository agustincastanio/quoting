import dbConnect from '../../../../utils/dbConnect'
import QuoteItem from '../../../../models/QuoteItem'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const quoteItems = await QuoteItem.find({}).
          populate('unitType').
          populate('referencePriceUnity')
        res.status(200).json({ success: true, data: quoteItems })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const quoteItem = await QuoteItem.create(req.body)
        res.status(201).json({ success: true, data: quoteItem })
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