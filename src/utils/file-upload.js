import { API_IMAGE_HOST as cloudUrl } from './constants'

export const fileUpload = async file => {
	const formData = new FormData()
	formData.append('upload_preset', 'caly-app')
	formData.append('file', file)
	try {
		const response = await fetch(cloudUrl, {
			method: 'POST',
			body: formData,
		})
		if (response.ok) {
			console.log('file uploaded')
			const cloudResponse = await response.json()
			return cloudResponse.secure_url
		} else {
			throw await response.json()
		}
	} catch (error) {
		console.log(error)
		console.log(error.message)
	}
}