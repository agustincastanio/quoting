import dbConnect from '../../../../utils/dbConnect'
import Quote from '../../../../models/Quote'
import QuoteStatus from '../../../../models/QuoteStatus'

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const quote = await Quote.findById(id).
                    populate('status').
                    populate('addressType').
                    populate('requestType').
                    populate('category').
                    populate('referenceCurrency').
                    populate({
                        path: 'items',
                        populate: { path: 'item' }
                    })
                if (!quote) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: quote })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT' /* Edit a model by its ID */:
            try {
                const quote = await Quote.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                }).
                    populate('status').
                    populate('addressType').
                    populate('requestType').
                    populate('category').
                    populate('referenceCurrency').
                    populate({
                        path: 'items',
                        populate: { path: 'item' }
                    })
                if (!quote) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: quote })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE' /* Delete a model by its ID */:
            try {
                /*
                const quoteStatuses = await QuoteStatus.find({})
                const archivedStatusId = quoteStatuses.find((status) => status.name === 'Archivada')
                if (!archivedStatusId) {
                    return res.status(400).json({ success: false })
                }

                const deletedQuote = await Quote.findByIdAndUpdate(id, { status: archivedStatusId })
                */

                const deletedQuote = await Quote.deleteOne({ _id: id })
                if (!deletedQuote) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {} })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}