# Vercel にデプロイする（LOCO CLINIC）

このプロジェクトは **Next.js App Router** のため、Vercel との相性が良く、設定ほぼ不要です。

## 前提

- GitHub（または GitLab / Bitbucket）にリポジトリを push しておく  
- もしくは **Vercel CLI** で直接アップロード

---

## 方法 A：GitHub 連携（おすすめ）

1. [vercel.com](https://vercel.com) にログイン（前と同じアカウントで OK）
2. **Add New… → Project**
3. **Import** から GitHub のリポジトリを選ぶ
4. **重要：リポジトリのルートが `dev` などで、その中に `loco-clinic` だけある場合**
   - **Root Directory** を `loco-clinic` に設定する  
   - リポジトリのルートがすでに `loco-clinic` ならそのままで OK
5. **Framework Preset**: Next.js（自動）
6. **Build Command**: `npm run build`（デフォルト）
7. **Output**: 自動（変更不要）
8. **Deploy** を押す

初回デプロイ後、同じブランチに push するたびに自動で再デプロイされます。

---

## 方法 B：CLI（Git なしでも可）

ターミナルでプロジェクトフォルダへ：

```bash
cd /Users/kanoyuta/dev/loco-clinic
npx vercel
```

- ログイン・プロジェクト名の質問に答える  
- 本番用: `npx vercel --prod`

---

## 環境変数

現状、API キーなどは使っていない想定なので **Vercel の Environment Variables は空で大丈夫** です。  
後からフォーム送信や分析ツールを入れたら、そのとき追加します。

---

## 画像について

- ヒーロー用の **`public/images/uniquemarfa-morning-1369446.jpg`** は、手元にあれば **`loco-clinic/public/images/` に置いて commit & push** すると本番でも表示されます。
- 無い場合は **`hero-fallback.svg`** が使われます（既にリポジトリに含める想定）。

---

## うまくいかないとき

- **Build Failed**: Vercel のデプロイログの赤い行をコピーして確認（多くは Root Directory 違い）
- **404**: Root Directory が `loco-clinic` になっているか確認
- ローカルで `npm run build` が通るか先に試す

```bash
cd /Users/kanoyuta/dev/loco-clinic
npm run build
```
