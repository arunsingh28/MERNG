const bcrypt = require('bcryptjs')
const _event = require('../model/event')
const _user = require('../model/user')

module.exports = {
    events: async () => {
        return _event.find()
            .then(event => {
                return event.map(e => {
                    return { ...e._doc }
                })
            }).catch(err => console.log(err))
    },


    // creating events
    createEvent: async (arg) => {
        const event = new _event({
            title: arg.eventInput.title,
            description: arg.eventInput.description,
            price: +arg.eventInput.price,
            date: new Date(arg.eventInput.date),
            creator: "60b285c4c635d1f96d98f17e"
        })
        try {
            const result = await event.save();
            createdEvent = {
                ...result._doc,
                _id: result._doc._id.toString(),
                date: new Date(event._doc.date).toISOString(),
                creator: user.bind(this, result._doc.creator)
            };
            const creator = await _user.findById('5c0fbd06c816781c518e4f3e');

            if (!creator) {
                throw new Error('User not found.');
            }
            creator.createdEvents.push(event);
            await creator.save();

            return createdEvent;
        } catch (err) {
            console.log(err);
            throw err;
        }
    },


    // creating user
    createUser: async (args) => {
        try {
            const existingUser = await _user.findOne({ email: args.userInput.email });
            if (existingUser) {
                throw new Error('User exists already.');
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

            const user = new _user({
                email: args.userInput.email,
                password: hashedPassword
            });

            const result = await user.save();

            return { ...result._doc, password: null, _id: result.id };
        } catch (err) {
            throw err;
        }
    },



}

