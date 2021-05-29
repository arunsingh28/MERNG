let events = []

module.exports = {
    events: () => {
        return events
    },
    createEvent: (arg) => {
        const event = {
            _id: Math.random().toString(),
            title: arg.eventInput.title,
            description: arg.eventInput.description,
            price: +arg.eventInput.price,
            date: arg.eventInput.date
        }
        events.push(event)
        return event
    }
}