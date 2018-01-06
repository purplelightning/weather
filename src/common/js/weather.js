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
function getImage(url) {
  httpRequest(url, ggImage)
}

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
  console.log("原生AJAX START")
  console.log(result)
  console.log("原生AJAX END")
}

/*
    jQuery AJAX
*/
function getImage2(url) {
  console.log("jqueryAJAX START")
  $.ajax({
    type: 'get',
    async: false,
    url: url,
    // dataType: 'jsonp',
    // jsonp: "callback",
    // jsonpCallback: "handlerr",
    success: function (response, status, xhr) {
      console.log('状态为：' + status + ',状态是：' + xhr.statusText);
      console.log(xhr.responseText);
    },
    error: function (error) {
      console.log("服务端不支持。。。。");
    }
  })
  console.log("jqueryAJAX END")
}

//测试
function test() {
  console.log('hello')
  // $('body').css('background','blue')
}

//导出方法
module.exports = {test, getImage, getImage2}
