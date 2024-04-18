import mongoose from 'mongoose'

const taggedSchema = mongoose.Schema({
    // violation:{type:[String], default:[]},
    // violation:{type:{sticker:{Type: Boolean,default:true},reason:[String]}, default:[]},

    modified:{type:Date, default:new Date()}
})
// export const TaggedMessage = mongoose.model('taggedMessage',taggedSchema);
// export default TaggedMessage


const carSchema = mongoose.Schema({
    license_plate:{ type: String, uppercase:true, required:true},
    // license_plate:{ type: String, required:true},
    car_make: {type:String, required:true},
    car_model:String,
    violations:{type: Number, default: 0},
    verified:{type:[String],default:[]},
    sticker:[{type: mongoose.Schema.Types.ObjectId, ref:'sticker'}],
    modified: {type: Date, default: new Date()},
    commments: [{type: mongoose.Schema.Types.ObjectId, ref:'comment'}],
    community_id: {type:String, required:true},
    color: String,
    car_address:String,
    // violations_list:{type:[String],default:[]},
    // violations_list:taggedSchema,
    // violations_list:[ {violation:String, modified:{type:Date, default:new Date()}}],
    violations_list:[{sticker:{type:Boolean, default:true}, reason:[ {violation:String, modified:{type:Date, default:new Date()}}]}],
    safe:{type:Number, default:0},
    car_image:{type:[String],default:[]},
    towed:{type:Boolean, default:false},

    

})

const CarMessage = mongoose.model('CarMessage',carSchema)

export default CarMessage