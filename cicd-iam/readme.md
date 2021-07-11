CodeBuildVpcPolicy-svc-framework-papi-sample-ap-northeast-2
CodeBuildCloudWatchLogsPolicy-svc-framework-papi-sample-ap-northeast-2


aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 428923833419.dkr.ecr.ap-northeast-2.amazonaws.com

docker tag svc/framework/papi-sample:latest 428923833419.dkr.ecr.ap-northeast-2.amazonaws.com/svc/framework/papi-sample:latest

docker push 428923833419.dkr.ecr.ap-northeast-2.amazonaws.com/svc/framework/papi-sample:latest



$(aws ecr get-login --no-include-email --region $AWS_DEFAULT_REGION)
  build: