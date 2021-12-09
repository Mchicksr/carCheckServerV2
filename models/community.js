import mongoose from 'mongoose';

const communitySchema = mongoose.Schema({
    community: String,
})

const CommunityMessage = mongoose.model('CommunityMessage',communitySchema)

export default CommunityMessage