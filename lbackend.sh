###
# Starting the Backend

# Set Variables
original_directory=$(pwd)
postgres_directory="$original_directory/backend/postgresql"
container_postgresql="postgresql"
image_postgresql="postgresql-image"

hasura_directory="$original_directory/backend/hasura"
container_hasura="hasura"
image_hasura="hasura-image"

############
# Postgres #
############

# Change directory
cd "$postgres_directory"

# Check if the postgresql image exists
if [[ "$(docker images -q ${image_postgresql} 2>/dev/null)" ]]; then
    echo "The image ${image_postgresql} already exists."
else
    echo "The image ${image_postgresql} does not exist. Generating..."
    # Build the image using the Dockerfile
    docker build -t ${image_postgresql} .
fi

# Check if Postgresql container is running
if [[ "$(docker ps -aq -f name=${container_postgresql})" ]]; then
    echo "Starting the container ${container_postgresql}."
    docker start ${container_postgresql}
else
    echo "The container ${container_postgresql} does not exist. Creating..."
    docker run -d --name ${container_postgresql} ${image_postgresql}
fi

############
#  Hasura  #
############

# Change directory
cd "$hasura_directory"

# Check if the hasura image exists
if [[ "$(docker images -q ${image_hasura} 2>/dev/null)" ]]; then
    echo "The image ${image_hasura} already exists."
else
    echo "The image ${image_hasura} does not exist. Generating..."
    # Build the image using the Dockerfile
    docker build -t ${image_hasura} .
fi

# Check if Hasura container is running
if [[ "$(docker ps -aq -f name=${container_hasura})" ]]; then
    echo "Starting the container ${container_hasura}."
    docker start ${container_hasura}
else
    echo "The container ${container_hasura} does not exist. Creating..."
    docker run -d --name ${container_hasura} ${image_hasura}
fi