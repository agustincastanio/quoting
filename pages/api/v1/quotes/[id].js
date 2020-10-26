import dbConnect from '../../../../utils/dbConnect'
import Quote from '../../../../models/Quote'
// import QuoteStatus from '../../../../models/QuoteStatus'


//TOOD: try https://mongoosejs.com/docs/middleware.html
const quotePreSaveHook = async function (quote) {
    const hookedQuote = reduceObject(quote)

    quote.items.forEach(function (item, index) {
        quote.items[index] = reduceObject(item)
    });

    return hookedQuote
}

const isPlainObject = function (value) {
    return value instanceof Object &&
        Object.getPrototypeOf(value) == Object.prototype;
}

const reduceObject = function (object) {
    let reducedObject = {}

    Object.keys(object).forEach(function (key) {
        if (isPlainObject(object[key])) {
            if (object[key].id) {
                reducedObject[key] = object[key].id
            }
        } else {
            reducedObject[key] = object[key]
        }
    });

    return reducedObject
}

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
                    populate('currency').
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
                const newQuote = await quotePreSaveHook(req.body)

                const quote = await Quote.findByIdAndUpdate(id, newQuote, {
                    new: true,
                    runValidators: true,
                }).
                    populate('status').
                    populate('addressType').
                    populate('requestType').
                    populate('category').
                    populate('currency').
                    populate({
                        path: 'items',
                        populate: { path: 'item' }
                    })
                if (!quote) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: quote })
            } catch (error) {
                console.log(error)
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