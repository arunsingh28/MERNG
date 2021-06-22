import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_EVENT } from '../gql/Query'
const Event = () => {
    const [event, setEvent] = useState([])
    const { error, loading, data } = useQuery(LOAD_EVENT)

    useEffect(() => {
        document.title = "Events"
        if(data){
            setEvent(data.events)
        }
    },[data])


    return (
        <div>
            <p>Event</p>
            {
                event.map((i,index) => (
                    <div key={index}>
                    <h1>{i.title}</h1>
                    <sub>{i._id}</sub>
                    <p>{i.description}</p>
                    <code>{i.price}</code><br/>
                    <date>{i.date}</date>
                    <hr/>
                    </div>
                ))
            }
        </div>
    )
}

export default Event
