import dbConnect from '../../../../utils/dbConnect'
import RequestType from '../../../../models/RequestType'
import AddressType from '../../../../models/AddressType'
import Category from '../../../../models/Category'
import Currency from '../../../../models/Currency'
import QuoteStatus from '../../../../models/QuoteStatus'

function firstLetterToLowerCase(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

export default async function handler(req, res) {
    const { method } = req

    const types = [
        RequestType,
        AddressType,
        Category,
        Currency,
        QuoteStatus
    ]

    await dbConnect()

    switch (method) {
        case 'GET':
            try {

                let promises = []
                let outputTypes = {}

                types.forEach(type => promises.push(type.find({})))

                const allTypes = await Promise.all(promises)

                for (let i = 0; i < types.length; i++) {
                    let typeKey = types[i].modelName
                    typeKey = firstLetterToLowerCase(typeKey)
                    outputTypes[typeKey] = allTypes[i]
                }

                res.status(200).json({ success: true, data: outputTypes })
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