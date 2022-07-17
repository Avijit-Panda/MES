const mongoose=require('mongoose')
const {objectId}=mongoose.Schema.Types

const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"no photo"
    },
    postedBy:{
                type:objectId,
                ref:"user"

    }

})
mongoose.model("post",PostSchema)