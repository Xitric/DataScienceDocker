docker build --rm -f "pysparkApp\Dockerfile" -t pysparkapp:latest pysparkApp && docker run --rm --ip 172.200.0.8 --hostname pyspark --name pyspark --network hadoop --env-file hadoop.env pysparkapp:latest