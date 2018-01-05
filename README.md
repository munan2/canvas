# canvas
## getContext()
返回用于在画布上绘图的环境，一般getContext('2d')。返回一个对象，该对象提供了用于在画布上绘画
## fillStyle 填充颜色
## fillRect 填充的形状，有填充，实心的
4个参数，x轴开始的位置，y轴开始的位置，x轴的宽度,y轴的宽度
## createLinearGradient 渐变
参数4个， [x坐标渐变开始的点,y坐标渐变开始的点,x坐标渐变结束的点,y坐标渐变结束的点]
## addColorStop结束时的颜色
两个参数，第一个参数介于0-1之间，表示渐变开始与结束之间的位置，第二个参数是颜色值。
## strokeStyle 线条颜色
## lineWidth 线条宽度
## strokeRect 填充形状，无填充，空心的