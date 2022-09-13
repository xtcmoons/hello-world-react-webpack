
npm run build

主要优化 library 配置信息，和 chapter01 的差别如下

```
        entry: "./src/index.js",
        output: {
                filename: "[name].js",
-               library: 'hello-world-react-webpack',
-               libraryTarget: "umd",
+               library: {
+                       name: "hello-world-react-webpack",
+                       type: "umd"
+               },

```
