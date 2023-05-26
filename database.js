import mongoose from 'mongoose'

const URI = 'mongodb+srv://davibarem:IICIeysDr3mKIpsp@cluster0.g0ttong.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)

        global.mongoose = await mongoose.connect(URI)
    }

}

export default databaseConnection