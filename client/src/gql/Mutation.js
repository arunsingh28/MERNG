import { gql } from '@apollo/client'


export const CREATE_EVENT = gql`
    mutation createEvent($title:String! $description:String! $price:String! $date:String!){
    createEvent(eventInput:{
        title:$title,
        description:$description,
        price:$price,
        date:$date,
    }){
        title
    }
}

`