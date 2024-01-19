import mongoose, {InferSchemaType} from "mongoose";
import {getjson1, getdatetime} from "../apis/getjson1.ts"

const schema = mongoose.Schema
const contactoSchema = new schema({
    nombreyapellidos: {type: String, required: true},
    numero: {type: String, required: true, unique: true},
    pais:   {type: String, required: false}
})

contactoSchema.path("numero").validate(async function(numero: string) {
    const json = await getjson1(numero)
    if(json.is_valid != true){
        return false
    }
    return true
})

export type contactoModelType = mongoose.Document & InferSchemaType<typeof contactoSchema>
export const contactoModel = mongoose.model<contactoModelType>("contacto", contactoSchema)