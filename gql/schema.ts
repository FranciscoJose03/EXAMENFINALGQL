export const typeDefs = `#graphql
    type Contacto {
        id: ID!
        nombreyapellidos: String!
        numero: String!
        pais: String
        hora: String
    },

    type Query {
        getContact(idContacto: ID!): Contacto!
        getContacts: [Contacto!]!
    },

    type Mutation { 
        addContact(nombreyapellidos: String!, numero: String!): Contacto!
        deleteContact(idContacto: ID!): Boolean!
        updateContact(idContacto: ID!, nombreyapellidos: String, numero: String): Contacto!
    }

`;