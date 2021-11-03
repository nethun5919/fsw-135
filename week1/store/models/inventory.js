import mongoose from 'mongoose'

const Schema = mongoose.Schema

const inventorySchema = newSchema({ 
    item: {
        type: String,
        required: true
    },
    quanity: {
        type:Number,
        required: true
    },
    description: {
        type: String,
        required: true

    }
})

modual.exports = mongoose.module("inventory", inventorySchema)