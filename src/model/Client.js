import mongoose, {Schema, model} from "mongoose"

const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
},{timestamps:true})

export default mongoose.models.Client || model('Client', clientSchema)