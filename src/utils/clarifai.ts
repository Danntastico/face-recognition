/* eslint-disable */
export const PAT = '1f688a0d0c384deca7eec62ba6b8eed0';
export const MODEL_ID = 'face-detection'
export const URL = `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`

export const getRequestOptions = (imageUrl?: string) => {

  const USER_ID = 'clarifai';
  const APP_ID = 'main';
  const IMAGE_URL = imageUrl || 'https://samples.clarifai.com/metro-north.jpg';
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
    },
    body: JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": IMAGE_URL
            }
          }
        }
      ]
    })
  }
}
