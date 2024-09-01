window.addEventListener('load', function () {
  //动态生成小圆圈
  var lunbo = document.querySelector('.lunbo')
  var ul = document.querySelector('.lunbo ul')
  var lunboWidth = lunbo.offsetWidth
  console.log(ul.children.length)
  var ol = document.querySelector('.lunbo ol')
  for (var i = 0; i < ul.children.length; i++) {
    console.log(ul.children, this.length)
    var li = document.createElement('li')
    li.setAttribute('index', i)
    ol.appendChild(li)
    li.addEventListener('click', function () {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = ''
      }
      this.className = 'current'
      var index = this.getAttribute('index')
      num = index
      circle = index
      var lunbo = document.getElementById('lunbo')
      var lunboElement = document.querySelector('.lunbo')
      var lunboWidth = lunboElement.offsetWidth
      animate(ul, -index * lunboWidth)
    })
  }
  ol.children[0].className = 'current'

  // 自动播放
  var timer = this.setInterval(function () {
    win_arrow_r.click()
  }, 4000)
  lunbo.addEventListener('mouseenter', function () {
    clearInterval(timer)
    timer = null
  })
  lunbo.addEventListener('mouseleave', function () {
    timer = setInterval(function () {
      win_arrow_r.click()
    }, 4000)
  })
})
