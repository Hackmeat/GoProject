###
# Starting the Backend

# Set Variables
original_directory=$(pwd)
postgres_directory="$original_directory/backend/postgresql"
container_name="postgresql"
image_name="postgresql-image"

# Change directory
cd "$postgres_directory"

# Check if container is running
if [[ "$(docker ps -aq -f name=${container_name})" ]]; then
    echo "Starting the container ${container_name}."
    docker start ${container_name}
else
    echo "The container ${container_name} does not exist. Creating..."
    docker run -d --name ${container_name} ${image_name}
fi
