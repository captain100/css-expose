# css-expose
css编码技巧
```
1.尽量减少代码的重复
  font-size  em 
2.响应式网页的的设计
  media
3.合理简写代码
  background: url(image.jpg) no-repeact top left / 2em 2em,
              url(image.jpg) no-repeact bottom right / 2em 2em;
  ---------
  background: url(image.jpg) top left,
              url(image.jpg) bottom right;
  background-size: 2em 2em;
  background-repeact: no-repeact;
  
4.使用css与处理器
  less sass
```
