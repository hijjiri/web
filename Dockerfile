# ベースイメージとしてNode.jsを使用
FROM node:20 AS builder

# 作業ディレクトリを設定
WORKDIR /app

# パッケージファイルとプロジェクトファイルをコピー
COPY package.json package-lock.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# ビルド
RUN npm run build

# 実行フェーズ
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
