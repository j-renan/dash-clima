docker build -f ./.environment/docker/Dockerfile --build-arg USER_ID=$(id -u) --no-cache --build-arg GROUP_ID=$(id -g) -t dashclima:latest .
