#!/bin/bash

/usr/bin/docker login -u "$CI_DEPLOY_USER" -p "$CI_DEPLOY_TOKEN" registry.gitlab.com/feup-tbs/ldso18-19/t3g1
cd /home/andre/LDSO
/usr/bin/docker-compose pull
/usr/bin/docker-compose up -d
