const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    _id: Schema.Types.ObjectId,
    description: {
      type: String,
      required: true
    },
    imgPath: {
        type: String,
        required: true
    },
    price: {
      type: Number,
      require: true
    },
    isSelling: {
      type: Boolean,
      default: false
    },
    category: {
        type: String,
        enum: ['furniture', 'vehicles', 'machine'],
        required: true
    },
    uploader: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    uploadedTime: {
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        required: true,
        default: 'available'
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
