const mongooose = require('mongoose')

const goalSchema = mongooose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true
})

module.exports = mongooose.model('Goal', goalSchema)