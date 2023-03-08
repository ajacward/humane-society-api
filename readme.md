docker run \
  -e "NODE_ENV=production" \
  -m "300M" --memory-swap "1G" \
  --name "humane-society-api" \
  image-name


curl --header "Content-Type: application/json" --header "Accept: application/json" http://localhost:3000/api/pets

curl --header "Content-Type: application/json" --header "Accept: application/json" https://localhost:3080/api/pets

curl --header "Content-Type: application/json" --header "Accept: application/json" --data '{"name": "jiggles", "age": 8, "species": "cat"}' http://localhost:3000/api/pets

curl --header "Content-Type: application/json" --header "Accept: application/json" --data '{"name": "jiggles", "age": 8, "species": "cat"}' https://localhost:3080/api/pets
