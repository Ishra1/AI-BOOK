---
id: 4
title: Address Docusaurus onBrokenMarkdownLinks Deprecation Warning
stage: general
date: 2025-12-18
surface: agent
model: Gemini
feature: none
branch: main
user: dell
command: null
labels: [bugfix, docusaurus, deprecation]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - docusaurus.config.ts
tests:
 - 
---

## Prompt

19:36:33.792 Running build in Washington, D.C., USA (East) – iad1
19:36:33.793 Build machine configuration: 2 cores, 8 GB
19:36:33.931 Cloning github.com/Ishra1/AI-BOOK (Branch: main, Commit: 3e9ab3e)
19:36:34.164 Cloning completed: 233.000ms
19:36:34.608 Restored build cache from previous deployment (AC3KNX37RhngpEGdH7NbWUPUw1YQ)
19:36:35.275 Warning: Detected "engines": { "node": ">=20.0" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: http://vercel.link/node-version
19:36:35.276 Running "vercel build"
19:36:35.687 Vercel CLI 50.0.1
19:36:36.268 Warning: Detected "engines": { "node": ">=20.0" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: http://vercel.link/node-version
19:36:36.282 Installing dependencies...
19:36:38.724 
19:36:38.724 up to date in 2s
19:36:38.725 
19:36:38.725 406 packages are looking for funding
19:36:38.725   run `npm fund` for details
19:36:38.763 Running "npm run build"
19:36:38.866 
19:36:38.866 > temp-docusaurus@0.0.0 build
19:36:38.867 > docusaurus build
19:36:38.867 
19:36:40.152 [WARNING] The `siteConfig.onBrokenMarkdownLinks` config option is deprecated and will be removed in Docusaurus v4.
19:36:40.153 Please migrate and move this option to `siteConfig.markdown.hooks.onBrokenMarkdownLinks` instead.
19:36:40.174 [INFO] [en] Creating an optimized production build...
19:36:40.177 [WARNING] The `siteConfig.onBrokenMarkdownLinks` config option is deprecated and will be removed in Docusaurus v4.
19:36:40.178 Please migrate and move this option to `siteConfig.markdown.hooks.onBrokenMarkdownLinks` instead.
19:36:41.243 [info] [webpackbar] Compiling Client
19:36:41.267 [info] [webpackbar] Compiling Server
19:37:03.875 [success] [webpackbar] Server: Compiled successfully in 22.61s
19:37:16.927 [success] [webpackbar] Client: Compiled successfully in 35.68s
19:37:20.577 [SUCCESS] Generated static files in "build".
19:37:20.578 [INFO] Use `npm run serve` command to test your build locally.
19:37:20.821 Build Completed in /vercel/output [45s]
19:37:20.954 Deploying outputs...
19:37:23.821 Deployment completed
19:37:24.778 Creating build cache...
19:37:40.066 Created build cache: 15.282s
19:37:40.067 Uploading build cache [46.68 MB]
19:37:40.737 Build cache uploaded: 677.973ms

## Response snapshot

I have successfully pushed the fix for the `onBrokenMarkdownLinks` deprecation warning to your GitHub repository.

You can now go to your Vercel dashboard and trigger a new deployment. This should now build without any warnings related to that

## Outcome

- ✅ Impact: Addressed a deprecation warning in `docusaurus.config.ts` by migrating the `onBrokenMarkdownLinks` option to its new location, ensuring future compatibility and cleaner build logs.
- 🧪 Tests: No tests were run as the change was to a configuration file to remove a deprecation warning.
- 📁 Files: Modified `docusaurus.config.ts` to update the deprecated `onBrokenMarkdownLinks` option.
- 🔁 Next prompts: User to verify the fix by deploying to Vercel.
- 🧠 Reflection: Successfully identified and addressed a deprecation warning. The provided solution aligns with Docusaurus's recommended migration path, improving maintainability and preparing for future updates.

## Evaluation notes (flywheel)

- Failure modes observed: n/a
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): n/a
- Next experiment: n/a
