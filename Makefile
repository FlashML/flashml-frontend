APP=flash-frontend

docker-build: 
	docker build -t ${APP} .

docker-run:
	docker run -d -p 80:80 ${APP}

docker-build-and-run: docker-build docker-run
