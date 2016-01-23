from clarifai.client import ClarifaiApi
clarifai_api = ClarifaiApi(app_id = 'WmQfZ90p6JsaxHbUGmFjtDtr3UDPOOM4AW8v_ezU',app_secret = 'EKq9zb8zjc-K0Iq6B9dTL1T613Um5XPiR2-rC9pR')
result = clarifai_api.tag_image_urls('http://i.imgur.com/DNoLuGI.jpg')
result = result['results'][0]['result']['tag']

for x in range(len(result['classes'])):
  print result['classes'][x], result['probs'][x]