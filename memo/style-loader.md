# 設定ファイルに入れただけでエラーになる

* https://ics.media/entry/17376/

　どうやってもエラーになった。'style-loader'を追記しただけでもエラーになった。

```javascript
        use: [
//          'style-loader',
//          'css-loader',
//          { loader: "css-loader", options: { url: false } },
//          'style-loader', 'css-loader', 
//          { loader: "style-loader", options: { injectType: "linkTag" } },
//          { loader: "style-loader" }, 
```
