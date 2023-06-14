# 【React+TypeScript】Netflixのクローンを作るチュートリアル 写経

下記サイトを写経しようと思ったものの、APIからYouTubeのIDが取れなかったり、それっぽい値が取れても動画が再生できなかったりした。
なので全然クローンじゃない。
[TMDB](https://www.themoviedb.org/) の API を叩いてレスポンスを Flowbite React で表示させるだけのサンプルになった。

- https://zenn.dev/gunners6518/books/4c4672f32dd100

## やったこと

- TMDBのAPIを使って、映画情報を取得
- Flowbite React を使ってUIの構築

## env

```dotenv
REACT_APP_TMDB_API_KEY="your key"
REACT_APP_TMDB_API_TOKEN="your token"
```

## install

```bash
npm install
```

## start

```bash
npm start
```
