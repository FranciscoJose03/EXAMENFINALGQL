import {contactoModelType, contactoModel} from "../db/Contacto.ts"
import { GraphQLError } from "graphql";

export const Mutation = {
    addContact: async(_parent: unknown, args: {nombreyapellidos: string, numero: string}): Promise<contactoModelType> => {
            const contacto = new contactoModel({
                nombreyapellidos: args.nombreyapellidos,
                numero: args.numero
            })
            await contacto.save()
            return contacto;
    },
    deleteContact: async(_parent: unknown, args: {idContacto: string}): Promise<boolean> => {
        const deleteContacto = await contactoModel.findOneAndDelete({_id: args.idContacto}).exec()
        if(!deleteContacto){
            return false
        }
        return true
    },
    updateContact: async(_parent: unknown, args: {idContacto: string, nombreyapellidos: string, numero: string}): Promise<contactoModelType> => {
        const contactoupdate = await contactoModel.findOneAndUpdate({_id: args.idContacto}, {
            nombreyapellidos: args.nombreyapellidos,
            numero: args.numero
        }, {new: true}).exec()
        if(!contactoupdate){
            throw new GraphQLError("No es posible el update")
        }
        await contactoupdate.save()
        return contactoupdate
    }
};