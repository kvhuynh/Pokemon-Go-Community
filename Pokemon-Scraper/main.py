import requests

url = 'https://www.youngla.com/products/451-olaf-tees'

data = requests.get(url)

print(data)