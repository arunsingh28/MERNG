import { gql } from '@apollo/client'

export const LOAD_EVENT = gql`
    query{
        events{
        description,
        title,
        price,
        date,
        _id
    }
}


`