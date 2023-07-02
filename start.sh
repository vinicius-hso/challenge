#!bin/bash
docker rm tinnova-challenge-api tinnova-challenge-db
docker rmi -f tinnova-test_api
sleep 5
docker-compose --env-file=./tinnova-challenge-back/.env up
