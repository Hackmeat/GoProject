###
# Starting the Backend

# Set Variables
original_directory=$(pwd)

hasura_directory="$original_directory/backend/hasura"
container_hasura="hasura"

############
#  Hasura  #
############

# Change directory
cd "$hasura_directory"

# Check if Hasura container is running
if [[ "$(docker ps -aq -f name=${container_hasura})" ]]; then
    echo "Starting the container ${container_hasura}."
    docker start ${container_hasura}
else
    echo "The container ${container_hasura} does not exist. Creating..."
    docker-compose up -d
fi