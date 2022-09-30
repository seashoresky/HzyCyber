import { Schema, model, models } from "mongoose";
const userSchema = new Schema({
    id: String,
    token: String,
    activeUser: Boolean,
    state: String
})
const User = models.User|| model('User', userSchema)
export default User
