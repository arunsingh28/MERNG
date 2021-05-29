exports.resolver = {
    event: () => {
        return ['Hello', 'world']
    },
    createEvent: (args) => {
        return args.name
    }
}