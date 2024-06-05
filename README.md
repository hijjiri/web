### 扱ったコマンド一覧
docker build -t hijjiri-web:latest .
docker stop hijjiri-web
docker rm hijjiri-web
docker run -d --name hijjiri-web -p 3000:80 hijjiri-web:latest
