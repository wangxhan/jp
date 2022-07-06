```xml
# 新建项目目录并进入目录
mkdir jp
cd jp
# 用模版建立项目，工作文件将位于/docs
pnpm create vuepress-theme-hope@next docs

# 命令
pnpm docs:dev
pnpm docs:build

# 在项目目录下，为项目建立git，并移动master到main
git init
git add .
git commit -m ‘deploy’
git branch -M main

# 任何git不成功，可以删除git重来
find . -name ".git" | xargs rm -Rf

# git push -f(强制更新) （远程仓库 第一次关联过以后用origin）(本地分支:远程分支，
# 如果同名写一个)
git push -f git@github.com:wangxhan/jp.git main

# -u纪录push，将本地main和远程main分支关联，以后用git push即可
git push -u git@github.com:wangxhan/jp.git main

# 将/dist目录下的文件subtree到github pages专门分支，自动形成网页
git subtree push --prefix docs/.vuepress/dist git@github.com:wangxhan/jp.git gh-pages
```
