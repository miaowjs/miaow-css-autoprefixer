# miaow-css-autoprefixer

> Miaow的CSS自动前缀补全工具,只是对[autoprefixer](https://github.com/postcss/autoprefixer)进行简单封装

## 使用效果

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

### 参数说明

传入的所有参数都会直接传递给[autoprefixer](https://github.com/postcss/autoprefixer)
