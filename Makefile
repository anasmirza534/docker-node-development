create-volume:
	docker volume create --name=node-docker-nodemodules

install:
	docker-compose -f docker-compose.builder.yml run --rm install

dev:
	docker-compose up

down:
	docker-compose down
