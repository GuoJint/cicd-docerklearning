``` javascript
// 安装docker
curl -fsSL get.docker.com -o get-docker.sh
sudo sh get-docker.sh
// 开启docker
sudo systemctl start docker
// 创建一个容器镜像未nginx
docker container run nginx
// 查看目前容器目录
docker container ls/ps
// 查看目前所有容器包括未启用的
docker container ls/ps -a
// 停止指定的容器 
docker container stop [container id（通常前2-5个就可以）]
docker container stop 3d712
// 重启
docker restart id
// 删除指定的容器
docker container rm  [container id]
// 查询所有docker的id
docker container ps -aq
// 停用所有docker 貌似不能用
docker container stop $(docker container ps -aq)
// 强制删除容器(包括还在运行的容器)
docker container rm 0c -f
// 服务器与docker端口映射（前台运行）可以清楚看到日志，调试服务器的时候。
docker container run -p [服务器端口]:[container端口] nginx
docker container run -p 80:80 ngnix
// 服务器与docker端口映射(后台运行)
docker container run -d -p 80:80 nginx
docker container run --detach -p
// 后台转前台
docker attach [container id]
// 打印一次日志
docker container logs [container id]
// 持续打印日志 ctrl+c服务不会关闭
docker container logs -f [container id]
// 打开交互模式
docker container run -it ubuntu sh

//普通打开交互模式exit退出后容器也会退出，
// 但如果后台运行服务进入交互模式之后容器不受影响
// 进入交互模式
docker container run -d -p 80:80 nginx
docker exec -it [container id] sh

// * 镜像获取
// 从官方dockerhub社区导入
// pull from registry 
docker image pull node
docker image pull node:版本

docker image ls
// 删除镜像
docker image rm id

// 上传社区?
// Dockerfile online
Dockerfile是用于构建docker镜像的文件。
Dockerfile里包含了构建镜像所需的指令
Dockerfile有其特定的语法规则（重要）

Dockerfile 命令
FROM 镜像名
RUN 执行命令，比如安装某个环境python之类的
ADD test.js /
把当前目录下的test.js文件， 放在镜像的根目录下
CMD ["node","test.js"]
执行 node test.js命令

不加版本为lastetst
根据dockerfile文件构建image
docker image build -t mynode:1.0
运行image
docker container run mynode:1.0

dockerfile文件上传dockerhub
docker image tag mynode mynodecom/mynode   修改文件名规范命名
mynodecom/mynode  这种形式是dockerhub规范
docker login  登录
docker image push mynodecom/mynode     可以通过  mynode:1.0来指定版本





//自有文件导入导出(公司内部)
// 导出  把自己的node导出成一个自己node，导出的镜像如何给别人？
docker image save node:版本 -o mynode.image
             导出     :tag  输出  镜像名
// 导入
docker image load -i .\mynode.image (所在目录)
```