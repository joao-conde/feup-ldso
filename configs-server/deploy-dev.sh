#!/bin/bash

/usr/bin/docker login -u gitlab+deploy-token-27560 -p rx1WRnUXmJDV_WhYdeB5 registry.gitlab.com/feup-tbs/ldso18-19/t3g1
cd /home/andre/LDSO
/usr/bin/docker-compose -f docker-compose.dev.yml pull
DB_HOST=mongo-dev DB_PORT=27017 /usr/bin/docker-compose -f docker-compose.dev.yml up -d
