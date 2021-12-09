ci-cd(持续集成，持续部署)

# 拉取镜像
docker image pull gitlab/gitlab-ce
# 运行容器以及对应参数
跑起来是gitlab需要服务器资源较大
sudo docker container run --detach \
  --hostname guopro.top \
  --publish 443:443 --publish 80:80 --publish 222:222 \
  --name gitlab \
  --restart always \
  --volume /srv/gitlab/config:/etc/gitlab \
  --volume /srv/gitlab/logs:/var/log/gitlab \
  --volume /srv/gitlab/data:/var/opt/gitlab \
  gitlab/gitlab-ce:latest

  - hostname 主机域名
  - publish 映射域名
  - name 镜像名
  - restart always 宕机后重启
  - volume 本地目录映射

# 安装gitlab0runner
sudo docker run -d --name gitlab-runner --restart always \
  -v /srv/gitlab-runner/config:/etc/gitlab-runner \
  -v /var/run/docker.sock:/var/run/docker.sock \
  gitlab/gitlab-runner:latest
# 注册gitlab-runner
docker run --rm -v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register \
  --non-interactive \
  --executor "docker" \   执行器
  --docker-image alpine:latest \  docker镜像只是用来提供一个linux执行环境
  --url "同下在一起" \
  --registration-token "root用户可以从admin area的runners菜单中获取token" \
  --description "runner描述" \
  --tag-list "test-cicd,dockercicd" \    注册runner的标签可以相当于runner的标识
  --run-untagged="true" \
  --locked="false" \
  --access-level="not-protected"   共享的可以给多个项目应用，私有的只能给指定的项目

pipelines: 流水线，包含多个阶段以及对应阶段中的任务。   
gitlab-runner： 流水线中的各种操作会在gitlab-runner去运行。   
gitlab-ci.yml：文件中可以编写流水线需要执行的stage以及task的内容。

# 编写yml文件

