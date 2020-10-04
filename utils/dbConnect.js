/* This is a database connection function*/
import mongoose from 'mongoose'

let uri = process.env.MONGODB_URI

const connection = {} /* creating connection object*/

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

async function dbConnect() {

  try {
    if (connection.isConnected) {
      return
    }

    /* connecting to our database */
    const db = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    connection.isConnected = db.connections[0].readyState

  } catch (err) {
    console.log(err.stack);
  }

}

export default dbConnect
