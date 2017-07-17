## 使用
1. 安装依赖
```
yarn install
```

2. 启动开发
```
yarn start
```

3. 编译打包
```
yarn run build
```

> 在启动和编译时，会自动帮你格式化代码、检测代码语法错误

### 开发时，自动提示错误配置
1. 推荐使用`vscode`编辑器，安装`vscode-standardjs`插件。
2. 菜单：code -> 首选项 -> 设置，复制下面代码到`settings.json`中
```
 "standard.validate": [
     "javascript",
     "javascriptreact",
     "html"
 ],
 "standard.options": {
     "plugins": ["html"]
 },
 "files.associations": {
     "*.vue": "html"
 }
```
