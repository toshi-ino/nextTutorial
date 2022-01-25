//Next.jsのAPIエンドポイント（lamdas）はpagesファルダの中にapiのファイルを作成する
export default function handler(req, res) {
  //statusはステータスコード 200は正常
  res.status(200).json({ text: "Hello" });
}

//reqはクラスのhttpインカミングメッセージのインスタンス
//resはクラスのhttpサーバーレスポンスのインスタンス

//getStaticPropsとgetStaticPathsの中でAPIは叩かない。
//getStaticPropsとgetStaticPathはサーバーサイドで実行される。
//この２つの中にデータ取得のクエリを記載しても、ブラウザ側に送られるJSバンドルに含まれないため、
//APIルートをつくる意味はない。

//next.jsでAPIルートを使うとよいケース
//APIルートに対してPOSTのリクエストなどを送るのがよい、申し込みフォームなど。
//SQLをクライアントサイドに書くことはNG

//プレビューモード
//調べること

//ダイナミックAPIモード
