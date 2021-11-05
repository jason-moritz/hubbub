import axios from 'axios'
const imageBaseUrl = 'https://api.cloudinary.com/v1_1/dwhdm5z4a'
const imageApi = axios.create({
  baseURL: imageBaseUrl,
})

export const imageUpload = async image => {
  try {
    const imageData = new FormData()
    imageData.append('file', image)
    imageData.append('upload_preset', 'hubbub_images')
    const res = await imageApi.post('/image/upload', imageData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const imageUpdate = async image => {}
