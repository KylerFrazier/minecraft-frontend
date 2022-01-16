#!/bin/bash

echo 'Generating local settings...\n'

# Move to this file's location
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

# Make dummy files and directories
rm -r local_developement
mkdir -p local_developement/live/kainosekai.com
mkdir -p local_developement/live/kai-no-sekai.com
cd local_developement
curl -O https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf
cd live/kainosekai.com
openssl genrsa 2048 > privkey.pem
echo '

#============== NOTE ==============#
You can just spam "Enter" for these 
prompts because the SSL security 
should not matter for local testing.
#==================================#
'
openssl req -x509 -days 1000 -new -key privkey.pem -out fullchain.pem
cd ..
cp kainosekai.com/privkey.pem kai-no-sekai.com/privkey.pem
cp kainosekai.com/fullchain.pem kai-no-sekai.com/fullchain.pem
cd "$parent_path"

# Configure docker
rm .env
echo 'PORT_HTTP=80
PORT_HTTPS=443
DOCKER_SSL_PATH=./local_developement' >> .env

# Wrap up
echo '\nGenerated local settings.\n'
