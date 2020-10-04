import dbConnect from '../../../../utils/dbConnect'
import QuoteItemUnitType from '../../../../models/QuoteItemUnitType'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const quoteItemUnitTypes = await QuoteItemUnitType.find({})
        res.status(200).json({ success: true, data: quoteItemUnitTypes })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const quoteItemUnitType = await QuoteItemUnitType.create(req.body)
        res.status(201).json({ success: true, data: quoteItemUnitType })
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