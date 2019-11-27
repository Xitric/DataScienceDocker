mvn package -f flume/components/ && docker build --rm -f "flume/Dockerfile" -t flume:latest flume && docker run --rm -it --ip 172.200.0.245 --hostname flume --name flume --network hadoop --env-file flume.env flume:latest