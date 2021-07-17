### 1、工程介绍

大家一起学习electron vue开发桌面app，注意node_modules是安装的工程工具，git提交时忽略

### 2、搭建工程

- 1、创建package.json，该文件用来管理工程

    npm init 或者 cnpm init

- 2、在工程目录添加electron，然后可以在package.json的devDependencies字段看见安装的依赖，dev的依赖用在开发中，正式打包app的时候不会打包。

     cnpm install --save-dev electron

- 3、package.json的main字段指定了工程的入口，也就是nodejs的主进程，所以我们需要手动创建main.js，main.js负责创建第一个窗口，详细看main.js

- 4、