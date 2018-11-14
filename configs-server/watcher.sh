#!/bin/bash

/usr/bin/docker login -u gitlab+deploy-token-26608 -p hHHTA9DoQdWjwhzhd_MZ registry.gitlab.com/ldso18-19/t3g1
cd /home/andre/LDSO
/usr/local/bin/docker-compose pull 
/usr/local/bin/docker-compose up -d
