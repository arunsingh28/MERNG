import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_EVENT } from '../gql/Mutation'

const Form = () => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [date, setDate] = useState()

    const [createEvent, { error }] = useMutation(CREATE_EVENT)

    const handleEvent = (e) => {
        e.preventDefault()
        createEvent({
            variables: {
                title,
                description,
                price,
                date
            }
        })
        if (error) {
            console.log(error)
        }

    }


    return (
        <div>
            <form onSubmit={handleEvent}>
                <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
                <input type="text" placeholder="desc" onChange={e => setDescription(e.target.value)} />
                <input type="text" placeholder="price" onChange={e => setPrice(e.target.value)} />
                <input type="date" placeholder="date" onChange={e => setDate(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form
