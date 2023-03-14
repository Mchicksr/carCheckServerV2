import mongoose from 'mongoose';

const communitySchema = mongoose.Schema({
    community: String,
    rules:[String]
})

const CommunityMessage = mongoose.model('CommunityMessage',communitySchema)

export default CommunityMessage