import { Schema, models, model } from "mongoose";

const TourSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    description: {
        type: String
    },
    location: {
        type: String,
        required: [true, "Location is required"],
    },
    duration: {
        type: String,
        required: [true, "Duration is required"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
})

const Tour = models.Tour || model("Tour", TourSchema);

export default Tour;