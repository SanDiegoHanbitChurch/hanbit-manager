#! /bin/sh

echo sendgrid API Key $SENDGRID_API_KEY
firebase functions:config:set sendgrid.apikey="$SENDGRID_API_KEY"
