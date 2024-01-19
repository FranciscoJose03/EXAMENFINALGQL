import {contactoModelType} from "../db/Contacto.ts"
import {getjson1, getdatetime} from "../apis/getjson1.ts"

export const contactoGQL = {
    pais: async(parent: contactoModelType) => {
        const json = await getjson1(parent.numero)
        return json.country

    },
    hora: async(parent: contactoModelType)=>{
        const json = await getjson1(parent.numero)
        const ciudad = json.timezones[0].split("/")[1]
        return await getdatetime(ciudad)
    }
}