## Begin
```
$ yarn install
$ yarn start
```

> When you start or build, will automatically detect you code.

## Configuration vscode

1. Installation `vscode-standardjs`
> Ctrl + P, press enter `ext install vscode-standardjs`

2. `settings.json`
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
