curl \
    --header "Content-type: application/x-www-form-urlencoded" \
    --user my_oath_app:MySecret123 \
    --request POST \
    --data "grant_type=client_credentials&scopes=test_api" \
    http://localhost:5001/token