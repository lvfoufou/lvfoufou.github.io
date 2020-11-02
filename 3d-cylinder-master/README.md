css 实现旋转立方体

一. transform
transform的属性包括： rotate() / skew() / scale() / translate()

rotate - 旋转rotate()函数通过指定的角度参数对元素根据对象原点指定旋转 单位deg(度数)

skew - 倾斜skew()函数能够让元素倾斜显示

translate - 将元素向指定的方向移动，类似于position中的relative。

scale - 让元素根据中心原点对对象进行缩放。默认的值1

transform-origin: x-axis y-axis z-axis; - 设置旋转元素的基点位置

transform-style (flat/preserve-3d)

二.transition
transition: property duration timing-function delay;

transition: property duration timing-function delay;

transition-property: 规定设置过渡效果的 CSS 属性的名称。

transition-duration: 规定完成过渡效果需要多少秒或毫秒。

transition-timing-function: 规定速度效果的速度曲线。

transition-delay: 延迟



三.animation
animation: name duration timing-function delay iteration-count direction;



四.animation和transition的区别
相同点：都是随着时间改变元素的属性值

不同点：transition需要触发一个事件(hover事件或click事件等)才会随时间改变其css属性； 而animation在不需要触发任何事件的情况下也可以显式的随着时间变化来改变元素css的属性值，从而达到一种动画的效果，css3的animation就需要明确的动画属性值。

五.css 3D
CSS3中的3D变换主要包括以下几种功能函数：

3D位移：CSS3中的3D位移主要包括translateZ()和translate3d()两个功能函数；
3D旋转：CSS3中的3D旋转主要包括rotateX()、rotateY()、rotateZ()和rotate3d()四个功能函数；
3D缩放：CSS3中的3D缩放主要包括scaleZ()和scale3d()两个功能函数；
perspective-景深

近大远小
perspective: 1200px;（在父元素中使用）
transform:perspective(1200px) （在子元素中使用）
perspective-origin - 观察3d元素的（位置）角度

perspective-origin：center center （中心）
perspective-origin：left top （左上角）
perspective-origin：100% 100% （右下角）
