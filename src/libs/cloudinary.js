import {v2} from 'cloudinary'
import  {config} from'dotenv'
config()

v2.config({
    cloud_name:process.env.USER_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY
})

export const uploadImage = async (filePath) => {
    return await v2.uploader.upload(filePath, {
        folder: 'posts'
    })
}

export const deleteImage = async (id) => {
    return await v2.uploader.destroy(id)
}
