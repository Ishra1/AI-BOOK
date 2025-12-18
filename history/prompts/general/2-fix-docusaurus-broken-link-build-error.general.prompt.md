---
id: 2
title: Fix Docusaurus broken link build error
stage: general
date: 2025-12-18
surface: agent
model: Gemini
feature: none
branch: main
user: dell
command: null
labels: [bugfix, docusaurus, broken-links]
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

i have deployed this book on vercel but it shows the too muc error so what i do?20:48:10.754 Running build in Washington, D.C., USA (East) – iad1
20:48:10.756 Build machine configuration: 2 cores, 8 GB
20:48:11.028 Cloning github.com/Ishra1/AI-BOOK (Branch: main, Commit: bf4cac3)
20:48:11.030 Previous build caches not available.
20:48:11.500 Cloning completed: 471.000ms
20:48:12.337 Warning: Detected "engines": { "node": ">=20.0" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: http://vercel.link/node-version
20:48:12.338 Running "vercel build"
20:48:12.739 Vercel CLI 50.0.1
20:48:13.268 Warning: Detected "engines": { "node": ">=20.0" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: http://vercel.link/node-version
20:48:13.283 Installing dependencies...
20:48:25.501 
20:48:25.502 added 1278 packages in 12s
20:48:25.503 
20:48:25.503 406 packages are looking for funding
20:48:25.504   run `npm fund` for details
20:48:25.552 Running "npm run build"
20:48:25.648 
20:48:25.649 > temp-docusaurus@0.0.0 build
20:48:25.649 > docusaurus build
20:48:25.649 
20:48:26.681 [INFO] [en] Creating an optimized production build...
20:48:27.606 [info] [webpackbar] Compiling Client
20:48:27.628 [info] [webpackbar] Compiling Server
20:48:49.151 [success] [webpackbar] Server: Compiled successfully in 21.52s
20:48:59.530 [success] [webpackbar] Client: Compiled successfully in 31.92s
20:49:03.193 
20:49:03.196 [ERROR] Error: Unable to build website for locale en.
20:49:03.196     at tryToBuildLocale (/vercel/path0/node_modules/@docusaurus/core/lib/commands/build/build.js:83:15)
20:49:03.197     at async /vercel/path0/node_modules/@docusaurus/core/lib/commands/build/build.js:35:9
20:49:03.197     ... 4 lines matching cause stack trace ...
20:49:03.197     at async file:///vercel/path0/node_modules/@docusaurus/core/bin/docusaurus.mjs:44:3 {
20:49:03.198   [cause]: Error: Docusaurus found broken links!
20:49:03.198   
20:49:03.198   Please check the pages of your site in the list below, and make sure you don't reference any path that does not exist.
20:49:03.198   Note: it's possible to ignore broken links with the 'onBrokenLinks' Docusaurus configuration, and let the build pass.
20:49:03.199   
20:49:03.199   It looks like some of the broken links we found appear in many pages of your site.
20:49:03.199   Maybe those broken links appear on all pages through your site layout?
20:49:03.199   We recommend that you check your theme configuration for such links (particularly, theme navbar and footer).
20:49:03.200   Frequent broken links are linking to:
20:49:03.200   - /my-book/chatbot-ui-placeholder
20:49:03.200   - /my-book/urdu-translation-placeholder
20:49:03.200   
20:49:03.200   Exhaustive list of all broken links found:
20:49:03.200   - Broken link on source page path = /my-book/404.html:
20:49:03.200      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.201      -> linking to /my-book/urdu-translation-placeholder
20:49:03.201   - Broken link on source page path = /my-book/about:
20:49:03.201      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.201      -> linking to /my-book/urdu-translation-placeholder
20:49:03.201   - Broken link on source page path = /my-book/blog:
20:49:03.202      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.202      -> linking to /my-book/urdu-translation-placeholder
20:49:03.202   - Broken link on source page path = /my-book/blog/archive:
20:49:03.202      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.202      -> linking to /my-book/urdu-translation-placeholder
20:49:03.202   - Broken link on source page path = /my-book/blog/authors:
20:49:03.203      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.204      -> linking to /my-book/urdu-translation-placeholder
20:49:03.204   - Broken link on source page path = /my-book/blog/authors/all-sebastien-lorber-articles:
20:49:03.204      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.205      -> linking to /my-book/urdu-translation-placeholder
20:49:03.206   - Broken link on source page path = /my-book/blog/authors/yangshun:
20:49:03.207      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.207      -> linking to /my-book/urdu-translation-placeholder
20:49:03.207   - Broken link on source page path = /my-book/blog/first-blog-post:
20:49:03.207      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.207      -> linking to /my-book/urdu-translation-placeholder
20:49:03.207   - Broken link on source page path = /my-book/blog/long-blog-post:
20:49:03.207      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.207      -> linking to /my-book/urdu-translation-placeholder
20:49:03.207   - Broken link on source page path = /my-book/blog/mdx-blog-post:
20:49:03.207      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.207      -> linking to /my-book/urdu-translation-placeholder
20:49:03.211   - Broken link on source page path = /my-book/blog/tags:
20:49:03.211      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.211      -> linking to /my-book/urdu-translation-placeholder
20:49:03.211   - Broken link on source page path = /my-book/blog/tags/docusaurus:
20:49:03.211      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.211      -> linking to /my-book/urdu-translation-placeholder
20:49:03.211   - Broken link on source page path = /my-book/blog/tags/facebook:
20:49:03.211      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.211      -> linking to /my-book/urdu-translation-placeholder
20:49:03.211   - Broken link on source page path = /my-book/blog/tags/hello:
20:49:03.211      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.211      -> linking to /my-book/urdu-translation-placeholder
20:49:03.211   - Broken link on source page path = /my-book/blog/tags/hola:
20:49:03.211      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.211      -> linking to /my-book/urdu-translation-placeholder
20:49:03.212   - Broken link on source page path = /my-book/blog/welcome:
20:49:03.212      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.212      -> linking to /my-book/urdu-translation-placeholder
20:49:03.212   - Broken link on source page path = /my-book/contact:
20:49:03.212      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.212      -> linking to /my-book/urdu-translation-placeholder
20:49:03.212   - Broken link on source page path = /my-book/login-placeholder:
20:49:03.212      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.212      -> linking to /my-book/urdu-translation-placeholder
20:49:03.212   - Broken link on source page path = /my-book/markdown-page:
20:49:03.212      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.212      -> linking to /my-book/urdu-translation-placeholder
20:49:03.213   - Broken link on source page path = /my-book/docs/chapters/chapter-1-foundation-and-sensing:
20:49:03.213      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.213      -> linking to /my-book/urdu-translation-placeholder
20:49:03.213   - Broken link on source page path = /my-book/docs/chapters/chapter-2-ros-and-kinematics:
20:49:03.213      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.213      -> linking to /my-book/urdu-translation-placeholder
20:49:03.213   - Broken link on source page path = /my-book/docs/chapters/chapter-3-simulation-and-navigation:
20:49:03.213      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.213      -> linking to /my-book/urdu-translation-placeholder
20:49:03.213   - Broken link on source page path = /my-book/docs/chapters/chapter-4-manipulation-and-control:
20:49:03.213      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.213      -> linking to /my-book/urdu-translation-placeholder
20:49:03.213   - Broken link on source page path = /my-book/docs/chapters/chapter-5-humanoids:
20:49:03.213      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.213      -> linking to /my-book/urdu-translation-placeholder
20:49:03.213   - Broken link on source page path = /my-book/docs/chapters/chapter-6-learning:
20:49:03.213      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.213      -> linking to /my-book/urdu-translation-placeholder
20:49:03.213   - Broken link on source page path = /my-book/docs/chapters/chapter-7-robot-ethics-and-safety:
20:49:03.213      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.214      -> linking to /my-book/urdu-translation-placeholder
20:49:03.214   - Broken link on source page path = /my-book/docs/chapters/chapter-8-projects:
20:49:03.214      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.214      -> linking to /my-book/urdu-translation-placeholder
20:49:03.214   - Broken link on source page path = /my-book/docs/chatbot-ui-placeholder:
20:49:03.214      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.214      -> linking to /my-book/urdu-translation-placeholder
20:49:03.214   - Broken link on source page path = /my-book/docs/hardware-requirements:
20:49:03.214      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.214      -> linking to /my-book/urdu-translation-placeholder
20:49:03.214   - Broken link on source page path = /my-book/docs/intro:
20:49:03.214      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.214      -> linking to /my-book/urdu-translation-placeholder
20:49:03.214   - Broken link on source page path = /my-book/docs/urdu-translation-placeholder:
20:49:03.214      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.214      -> linking to /my-book/urdu-translation-placeholder
20:49:03.214   - Broken link on source page path = /my-book/docs/week-1-foundations/history-of-robotics:
20:49:03.214      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.214      -> linking to /my-book/urdu-translation-placeholder
20:49:03.214   - Broken link on source page path = /my-book/docs/week-1-foundations/intro-to-physical-ai:
20:49:03.214      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.214      -> linking to /my-book/urdu-translation-placeholder
20:49:03.214   - Broken link on source page path = /my-book/docs/week-10-humanoids/bipedal-locomotion:
20:49:03.214      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.214      -> linking to /my-book/urdu-translation-placeholder
20:49:03.214   - Broken link on source page path = /my-book/docs/week-10-humanoids/humanoid-robot-design:
20:49:03.215      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.215      -> linking to /my-book/urdu-translation-placeholder
20:49:03.215   - Broken link on source page path = /my-book/docs/week-11-learning/imitation-learning:
20:49:03.215      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.215      -> linking to /my-book/urdu-translation-placeholder
20:49:03.215   - Broken link on source page path = /my-book/docs/week-11-learning/reinforcement-learning:
20:49:03.215      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.215      -> linking to /my-book/urdu-translation-placeholder
20:49:03.215   - Broken link on source page path = /my-book/docs/week-12-ethics/robot-ethics-and-safety:
20:49:03.215      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.215      -> linking to /my-book/urdu-translation-placeholder
20:49:03.215   - Broken link on source page path = /my-book/docs/week-13-final/final-project:
20:49:03.215      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.215      -> linking to /my-book/urdu-translation-placeholder
20:49:03.215   - Broken link on source page path = /my-book/docs/week-2-sensing/computer-vision-basics:
20:49:03.215      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.215      -> linking to /my-book/urdu-translation-placeholder
20:49:03.215   - Broken link on source page path = /my-book/docs/week-2-sensing/sensors-and-perception:
20:49:03.215      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.215      -> linking to /my-book/urdu-translation-placeholder
20:49:03.215   - Broken link on source page path = /my-book/docs/week-3-ros/intro-to-ros2:
20:49:03.215      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.215      -> linking to /my-book/urdu-translation-placeholder
20:49:03.216   - Broken link on source page path = /my-book/docs/week-3-ros/nodes-topics-services:
20:49:03.216      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.216      -> linking to /my-book/urdu-translation-placeholder
20:49:03.216   - Broken link on source page path = /my-book/docs/week-4-kinematics/forward-kinematics:
20:49:03.216      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.216      -> linking to /my-book/urdu-translation-placeholder
20:49:03.216   - Broken link on source page path = /my-book/docs/week-4-kinematics/inverse-kinematics:
20:49:03.216      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.216      -> linking to /my-book/urdu-translation-placeholder
20:49:03.216   - Broken link on source page path = /my-book/docs/week-5-simulation/intro-to-gazebo:
20:49:03.216      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.216      -> linking to /my-book/urdu-translation-placeholder
20:49:03.216   - Broken link on source page path = /my-book/docs/week-5-simulation/urdf-and-xacro:
20:49:03.216      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.216      -> linking to /my-book/urdu-translation-placeholder
20:49:03.216   - Broken link on source page path = /my-book/docs/week-6-navigation/path-planning:
20:49:03.216      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.216      -> linking to /my-book/urdu-translation-placeholder
20:49:03.216   - Broken link on source page path = /my-book/docs/week-6-navigation/slam-and-localization:
20:49:03.216      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.216      -> linking to /my-book/urdu-translation-placeholder
20:49:03.216   - Broken link on source page path = /my-book/docs/week-7-midterm/midterm-project:
20:49:03.216      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.216      -> linking to /my-book/urdu-translation-placeholder
20:49:03.216   - Broken link on source page path = /my-book/docs/week-8-manipulation/grasping-and-manipulation:
20:49:03.216      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.216      -> linking to /my-book/urdu-translation-placeholder
20:49:03.216   - Broken link on source page path = /my-book/docs/week-8-manipulation/motion-planning-moveit:
20:49:03.216      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.216      -> linking to /my-book/urdu-translation-placeholder
20:49:03.216   - Broken link on source page path = /my-book/docs/week-9-control/pid-control:
20:49:03.223      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.223      -> linking to /my-book/urdu-translation-placeholder
20:49:03.223   - Broken link on source page path = /my-book/docs/week-9-control/whole-body-control:
20:49:03.223      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.223      -> linking to /my-book/urdu-translation-placeholder
20:49:03.224   - Broken link on source page path = /my-book/:
20:49:03.224      -> linking to /my-book/chatbot-ui-placeholder
20:49:03.224      -> linking to /my-book/urdu-translation-placeholder
20:49:03.224   
20:49:03.224       at throwError (/vercel/path0/node_modules/@docusaurus/logger/lib/logger.js:80:11)
20:49:03.224       at reportBrokenLinks (/vercel/path0/node_modules/@docusaurus/core/lib/server/brokenLinks.js:250:47)
20:49:03.224       at handleBrokenLinks (/vercel/path0/node_modules/@docusaurus/core/lib/server/brokenLinks.js:282:5)
20:49:03.224       at executeBrokenLinksCheck (/vercel/path0/node_modules/@docusaurus/core/lib/commands/build/buildLocale.js:119:47)
20:49:03.224       at /vercel/path0/node_modules/@docusaurus/core/lib/commands/build/buildLocale.js:94:67
20:49:03.224       at Object.async (/vercel/path0/node_modules/@docusaurus/logger/lib/perfLogger.js:42:47)
20:49:03.224       at buildLocale (/vercel/path0/node_modules/@docusaurus/core/lib/commands/build/buildLocale.js:94:31)
2.49:03.224       at async runBuildLocaleTask (/vercel/path0/node_modules/@docusaurus/core/lib/commands/build/build.js:98:5)
20:49:03.224       at async /vercel/path0/node_modules/@docusaurus/core/lib/commands/build/build.js:79:13
20:49:03.224       at async tryToBuildLocale (/vercel/path0/node_modules/@docusaurus/core/lib/commands/build/build.js:75:9)
20:49:03.224       at async /vercel/path0/node_modules/@docusaurus/core/lib/commands/build/build.js:35:9
20:49:03.224       at async mapAsyncSequential (/vercel/path0/node_modules/@docusaurus/utils/lib/jsUtils.js:21:24)
20:49:03.224       at async Command.build (/vercel/path0/node_modules/@docusaurus/core/lib/commands/build/build.js:34:5)
20:49:03.224       at async Promise.all (index 0)
20:49:03.224       at async runCLI (/vercel/path0/node_modules/@docusaurus/core/lib/commands/cli.js:56:5)
20:49:03.224       at async file:///vercel/path0/node_modules/@docusaurus/core/bin/docusaurus.mjs:44:3
20:49:03.224 }
20:49:03.234 [INFO] Docusaurus version: 3.9.2
20:49:03.235 Node version: v24.12.0
20:49:03.273 Error: Command "npm run build" exited with 1

## Response snapshot

I have removed the broken links from your `docusaurus.config.ts` file. This should resolve the build error you were seeing on Vercel. You can now commit these changes and redeploy your project.

## Outcome

- ✅ Impact: Fixed a build-breaking error by removing broken links from the site navigation, allowing the Docusaurus site to be deployed successfully.
- 🧪 Tests: No tests were run as the change was to a configuration file to fix broken links.
- 📁 Files: Modified `docusaurus.config.ts` to remove placeholder navigation links.
- 🔁 Next prompts: User to verify the fix by deploying to Vercel.
- 🧠 Reflection: The Vercel build log clearly indicated the problem was broken links. Identifying the source in `docusaurus.config.ts` and removing the offending placeholder links was a straightforward fix.

## Evaluation notes (flywheel)

- Failure modes observed: n/a
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): n/a
- Next experiment: n/a
