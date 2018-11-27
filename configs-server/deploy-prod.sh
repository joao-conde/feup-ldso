#!/bin/bash

/usr/bin/docker login -u gitlab+deploy-token-27560 -p rx1WRnUXmJDV_WhYdeB5 registry.gitlab.com/feup-tbs/ldso18-19/t3g1
cd /home/andre/LDSO
/usr/bin/docker-compose -f docker-compose.prod.yml pull
DB_HOST=mongo DB_PORT=27017 REACT_APP_ENDPOINT=http://impactup.westeurope.cloudapp.azure.com/api /usr/bin/docker-compose -f docker-compose.prod.yml up -d
