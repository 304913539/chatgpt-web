IMAGE_TAG=registry.cn-beijing.aliyuncs.com/jingbingshuai/chatgpt-web:last
docker build . --platform linux/amd64 -t $IMAGE_TAG
docker push $IMAGE_TAG
