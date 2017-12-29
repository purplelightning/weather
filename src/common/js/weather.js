// function getWeather(result) {
//   var result = JSON.parse(result)
//   var list = result.HeWeather6
//   console.log(list[0].basic.location)
// }
//
// module.exports = getWeather

// const imageURL = 'http://guolin.tech/api/bing_pic'

require('./jquery-3.2.1')

/*
    原生AJAX
*/
function httpRequest(url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      callback(xhr.responseText)
    }
  }
  xhr.send()
}

function ggImage(result) {
  console.log(result)
  console.log("原生AJAX")
}

/*
    jQuery AJAX
*/
function getImage2(url) {
  var ht = $.ajax({
    url: url, async: false
  })
  console.log(ht.responseText)
  console.log("jqueryAJAX")
}

//测试
function test() {
  console.log('hello')
  // $('body').css('background','blue')
}

function test2() {
  console.log('bbeadf')
}

function getImage(url) {
  httpRequest(url, ggImage)
}

//导出方法
module.exports = {test, test2, getImage, getImage2}
