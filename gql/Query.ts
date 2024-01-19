import {contactoModelType, contactoModel} from "../db/Contacto.ts"
import { GraphQLError } from "graphql";

export const Query = {
    getContact: async(_parent: unknown, args: {idContacto: string}): Promise<contactoModelType> => {
        const contacto = await contactoModel.findById({_id: args.idContacto}).select("-_id").exec()
        if(!contacto){
            throw new GraphQLError("No existe contacto con id => " + args.idContacto)
        }
        return contacto
    },
    getContacts: async(_parent: unknown, _args: unknown): Promise<contactoModelType[]> => {
        const contactos = await contactoModel.find().exec()
        return contactos
    }
};