# My First Azure Website 🚀

A tiny static website (HTML + CSS + JavaScript) used to learn how to deploy to
**Azure Static Web Apps** from **GitHub**.

When you push code to GitHub, Azure automatically rebuilds and publishes the site.
This is called **CI/CD** (Continuous Integration / Continuous Deployment).

---

## The big picture

```
  Your PC                GitHub                    Azure
 ┌────────┐   git push  ┌────────┐  auto-deploy  ┌──────────────┐
 │  code  │ ──────────► │  repo  │ ────────────► │ live website │
 └────────┘             └────────┘               └──────────────┘
```

You only set up the GitHub→Azure link **once**. After that, every `git push`
updates your live site automatically.

---

## Part 1 — Put the code on GitHub

### 1a. Initialize git locally (already done if you followed along)
```bash
git init
git add .
git commit -m "Initial website"
```

### 1b. Create an empty repo on GitHub
1. Go to https://github.com/new
2. **Repository name:** `my-first-website`
3. Set it to **Public** (Static Web Apps free tier works with public repos easily).
4. **Do NOT** check "Add a README" / .gitignore / license — keep it empty.
5. Click **Create repository**.

### 1c. Connect your local repo to GitHub and push
GitHub will show you commands. They look like this (replace `YOUR-USERNAME`):
```bash
git remote add origin https://github.com/YOUR-USERNAME/my-first-website.git
git branch -M main
git push -u origin main
```
> First push will pop up a browser window to log into GitHub. That's normal.

Refresh the GitHub page — your files should now be there. ✅

---

## Part 2 — Deploy to Azure (the easy, click-through way)

This is the recommended path for your first time.

1. Go to the **Azure Portal**: https://portal.azure.com
2. In the top search bar, type **Static Web Apps** and click it.
3. Click **+ Create**.
4. Fill in the **Basics** tab:
   - **Subscription:** your subscription (e.g. "Azure subscription 1").
   - **Resource Group:** click *Create new* → name it `rg-website` → OK.
     *(A resource group is just a folder that holds related Azure things.)*
   - **Name:** `my-first-website` (this becomes part of your URL).
   - **Plan type:** **Free**.
   - **Region:** pick the one closest to you.
5. Under **Deployment details**:
   - **Source:** **GitHub** → click **Sign in with GitHub** and authorize.
   - **Organization:** your GitHub username.
   - **Repository:** `my-first-website`.
   - **Branch:** `main`.
6. Under **Build Details**:
   - **Build Presets:** **Custom**.
   - **App location:** `/`
   - **Api location:** *(leave empty)*
   - **Output location:** *(leave empty)*
7. Click **Review + create** → **Create**.

### What just happened?
Azure added a file to your GitHub repo at
`.github/workflows/azure-static-web-apps-*.yml`. This is a **GitHub Action** —
a robot that builds and deploys your site whenever you push.

8. Go to your repo on GitHub → **Actions** tab. You'll see a workflow running.
   Wait for the green checkmark ✅ (~1–2 minutes).
9. Back in the Azure Portal, open your Static Web App resource. The **URL** at
   the top right (something like `https://nice-rock-0abc.azurestaticapps.net`)
   is your **live website**. Click it! 🎉

---

## Part 3 — Sync the auto-generated workflow file back to your PC

Azure committed the workflow file to GitHub, so your local copy is now behind:
```bash
git pull
```

---

## Part 4 — Make a change and watch it deploy

1. Edit `index.html` (e.g. change the `<h1>` text).
2. Save, then:
   ```bash
   git add .
   git commit -m "Update heading"
   git push
   ```
3. Watch the **Actions** tab on GitHub. When it goes green, refresh your live
   site — your change is there. **That's the whole workflow.** 🔁

---

## Troubleshooting
- **Push asks for a password and rejects it:** GitHub no longer accepts account
  passwords on the command line. Let the browser pop-up sign you in, or create a
  Personal Access Token.
- **Action failed (red X):** Open the failed run in the Actions tab and read the
  log. Most first-time failures are a wrong **App location** — it should be `/`.
- **Site shows "Waiting for content":** The first deploy hasn't finished. Wait
  for the green checkmark in Actions, then hard-refresh (Ctrl+F5).

---

## Files in this project
| File         | Purpose                                  |
|--------------|------------------------------------------|
| `index.html` | The page itself                          |
| `styles.css` | Styling (colors, layout)                 |
| `app.js`     | A little interactivity (the button)      |
| `.gitignore` | Tells git which files to ignore          |
| `README.md`  | This guide                               |
