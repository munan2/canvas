/**
 * @description: canvas画多边形
 * @param center {Object} {x: , y: } 中心点坐标
 * @param side {Number} 几边形
 * @param radius {Number} 半径
 * @param scale {Array} 每一个顶点到中心点的距离相对正多边形的比例
 * @return: 
 */
var Polygon = function (center, side, radius, scale) {
  this.side = side
  this.radius = radius
  this.center = center
  this.name = name
  this.scale = scale || []
  for (var i=0; i<side; i++) {
    if (!this.scale[i]) this.scale[i] = 1
  }
  this.points = getPoint(center, side, radius, this.scale)
  /**
   * @description: 获取多边形的各个顶点的坐标
   * @param center {Object} {x: , y:} 中心点坐标
   * @param side {Number} 几边形
   * @param r {Number} 半径
   * @param scale {Array}每一个顶点到中心点的距离相对正多边形的比例
   * @return: points数组
   */
  function getPoint (center, side, r, scale) {
    angle = 0
    centerAngle = 360 / side * Math.PI / 180
    var points = []
    for (var i=0; i<side; i++) {
      cx = center.x + r * Math.sin(angle) * scale[i]
      cy = center.y - r * Math.cos(angle) * scale[i]
      angle += centerAngle
      points.push({
        x: cx,
        y: cy
      })
    }
    return points
  }
}
Polygon.prototype = {
  /**
   * @description: 让多边形顶点连线的方法
   * @param ctx {Object} canvas上下文
   * @return: 
   */
  showBorder: function (ctx) {
    ctx.beginPath()
    ctx.moveTo(this.points[0].x, this.points[0].y)
    for (var i =1; i<this.points.length; i++) {
      ctx.lineTo(this.points[i].x, this.points[i].y)
    }
    ctx.closePath()
    ctx.stroke()
  },
  /**
   * @description: 让多边形各个顶点与中心点连线的方法
   * @param ctx {Object} canvas上下文
   * @return: 
   */
  showRadius: function (ctx) {
    ctx.beginPath()
    ctx.moveTo(this.center.x, this.center.y)
    for (var i=0; i<this.points.length; i++) {
      ctx.lineTo(this.points[i].x, this.points[i].y)
      ctx.moveTo(this.center.x, this.center.y)
    }
    ctx.closePath()
    ctx.stroke()
  }
}