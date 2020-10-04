import dbConnect from '../../../../utils/dbConnect'
import AddressType from '../../../../models/AddressType'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const addressTypes = await AddressType.find({})
        res.status(200).json({ success: true, data: addressTypes })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const addressType = await AddressType.create(req.body)
        res.status(201).json({ success: true, data: addressType })
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