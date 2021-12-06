```bash
拉取镜像
docker image pull gitlab/gitlab-ce

运行容器以及对应参数
sudo docker container run --detach \
  --hostname guopro.top \
  --publish 443:443 --publish 80:80 --publish 222:222 \
  --name gitlab \
  --restart always \
  --volume /srv/gitlab/config:/etc/gitlab \
  --volume /srv/gitlab/logs:/var/log/gitlab \
  --volume /srv/gitlab/data:/var/opt/gitlab \
  gitlab/gitlab-ce:latest
```
--hostname 主机域名
--publish 映射域名
--name 镜像名
--restart always 宕机后重启
--volume 本地目录映射