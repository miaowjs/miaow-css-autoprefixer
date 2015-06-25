# miaow-css-autoprefixer

> Miaow的CSS自动前缀补全工具,只是对[autoprefixer](https://github.com/postcss/autoprefixer)进行简单封装

```css
:fullscreen a {
  display: flex
}

/* 处理后 */
:-webkit-full-screen a {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex
}
:-moz-full-screen a {
  display: flex
}
:-ms-fullscreen a {
  display: -ms-flexbox;
  display: flex
}
:fullscreen a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}
```

## 使用说明

### 安装

```
npm install miaow-css-autoprefixer --save-dev
```

### 在项目的 miaow.config.js 中添加模块的 tasks 设置

```javascript
//miaow.config.js
module: {
  tasks: [
    {
      test: /\.css$/,
      plugins: ['miaow-css-autoprefixer']
    }
  ]
}
```
