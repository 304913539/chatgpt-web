IMAGE_TAG=registry.cn-beijing.aliyuncs.com/jingbingshuai/chatgpt-web:latest
docker build . --platform linux/amd64 -t $IMAGE_TAG
docker push $IMAGE_TAG
