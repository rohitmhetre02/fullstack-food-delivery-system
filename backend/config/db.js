import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://rohitmhetre2004:u3ECVYNg90n3VGFW@cluster0.8jnvk.mongodb.net/<database>?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
}