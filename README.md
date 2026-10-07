# DES112 Project

## Getting started

1. Click **Code → Codespaces → Create codespace on main**.
2. When it opens, a live preview of your site opens in a tab. It reloads every time you save a file in `site/`.
   - If the preview tab doesn't appear, go to the **Ports** tab in the bottom panel, right-click **Site preview (8080)**, and choose **Preview in Editor**.
   - If port 8080 isn't listed, run `live-server site --port=8080 --no-browser` in the terminal.
3. Open the terminal and run `claude`, then log in with your Claude account.
4. Edit files in `site/`. Commit and push to publish.

## Turn on your published site (one time)

1. In your repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Under **Visibility**, choose **Public** and click **Save**. If it stays **Private**, your site gets a random address that only signed-in class members can open.
4. Go to the **Actions** tab, open **Deploy Pages**, and click **Run workflow** to publish right away.

## Your published site

After each push to `main`, your site is published at:

```
https://des112-f26.github.io/<this-repo-name>/
```

Check the **Actions** tab if a deploy fails.

> Your published site is public. Don't put personal information on it.
