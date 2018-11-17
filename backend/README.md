* how to set up local docker env
- docker-machine create -d virtualbox helpnlearn
- eval "$(docker-machine env helpnlearn)"
- docker-compose build
- docker-compose up