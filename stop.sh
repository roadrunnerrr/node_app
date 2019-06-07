#!/bin/bash
docker ps| egrep 'webserver|nodejs'| awk {'print $1'}| xargs docker stop
docker system prune --force
