import mongoose from "mongoose"
export const connectMongo = async () => {
    //连接远程数据库
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch(err) {
        console.error(err)
    }
    
}
export default connectMongo