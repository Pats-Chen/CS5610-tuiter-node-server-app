import mongoose from 'mongoose';
const schema = mongoose.Schema({
    userIcon: String,
    userName: String,
    handle: String,
    tuit: String,
    topic: String,
    time: String,
    image: String,
    title: String,
    content: String,
    href: String,
    replies: Number,
    retuits: Number,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
}, {collection: 'tuits'});
export default schema;