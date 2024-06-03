### Coreの設定とgRPCの起動
1. **プロジェクトのセットアップ**
2. **gRPCサーバーの起動**
- gRPCサーバーをDockerコンテナとして起動
- コンテナ名: `hijjiri-core`

### Webアプリケーションの設定
1. **React環境の整備**
2. **フロントエンドとバックエンドの接続**
- JavaScriptでgRPCクライアントを実装
- フロントエンドからgRPCサーバーへのリクエストを送信

### Envoyの設定
1. **Dockerfileとenvoy.yamlの作成**
- Envoyの設定ファイル`envoy.yaml`を作成
- DockerfileでEnvoyイメージをビルド

2. **Envoyのビルドとデプロイ**
- 必要な依存関係をインストール
- DockerコンテナとしてEnvoyを起動

### Dockerネットワークの設定
1. **ネットワークの作成**
- Dockerネットワーク`hijjiri-network`を作成

2. **コンテナの起動**
- `hijjiri-web`, `hijjiri-core`, `envoy`コンテナをネットワークに接続して起動

### 確認
1. **ログと接続の確認**
- 各コンテナのログを確認
- `curl`でエンドポイントにリクエストを送信し、レスポンスを確認

### コード
```
docker build -t custom-envoy .
docker stop envoy hijjiri-web hijjiri-core
docker rm envoy hijjiri-web hijjiri-core
<既存の場合はスキップ>
docker network create hijjiri-network

docker run -d --name hijjiri-web --network hijjiri-network -p 3000:80 hijjiri-web:latest
docker run -d --name hijjiri-core --network hijjiri-network -p 50051:50051 hijjiri-core:latest
docker run -d --name envoy --network hijjiri-network -p 8080:8080 custom-envoy

curl -v http://localhost:8080/
curl -v http://localhost:8080/api


```
