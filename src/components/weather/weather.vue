<template>
  <div id="weather">
    <header>
      <div class="title">天气预报</div>
      <input type="text" id="city" placeholder="输入城市名" ref="city"
             @key.enter="setCity()">
      <button id="btn" @click="setCity()">查询</button>
    </header>
    <div class="content" ref="content">
      <ul class="wrapper" v-if="wea">
        <li v-for="item in wea" class="item">
          <div class="cityName">{{item.basic.location}}</div>
          <ul class="weatherContent">
            <li v-for="dd in item.daily_forecast" class="item-date">
              <div class="date">日期：{{dd.date}}</div>
              <div class="day">白天天气：{{dd.cond_txt_d}}</div>
              <div class="night">晚上天气：{{dd.cond_txt_n}}</div>
              <div class="maxTem">最高温度：{{dd.tmp_max}}</div>
              <div class="minTem">最低温度：{{dd.tmp_min}}</div>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import axios from 'axios'
  import {test, test2, getImage, getImage2} from 'common/js/weather'

  var city = '南京'

  const myKey = '9501a32f34e54b2d96db5fb7827e56cb',
    apiURL = 'https://free-api.heweather.com/s6/weather/forecast?'
  var url = apiURL + 'key=' + myKey + '&location=' + city,
    imageURL = 'http://guolin.tech/api/bing_pic',
    districtURL = 'http://guolin.tech/api/china'

  export default {
    data() {
      return {
        wea: {}
      }
    },
    methods: {
      setCity() {
        city = this.$refs.city.value
        localStorage.city = city
        url = apiURL + 'key=' + myKey + '&location=' + city

        var _this = this
        this.$http.get(url).then(function (res) {
          _this.wea = res.data.HeWeather6
          _this.$nextTick(() => {
            _this._initScroll()
          })
        }).catch(function (error) {
          console.log(error)
        })
      },
      _initScroll() {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.content, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      }
    },
    created() {
      var _this = this
      this.$http.get(url).then(function (res) {
//        console.log(res.data)
        _this.wea = res.data.HeWeather6
//        console.log(_this.wea.length)
        _this.$nextTick(() => {
          _this._initScroll()
//          test()
//          test2()
//          getImage(districtURL)
          getImage2(imageURL)
        })
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #weather
    position: absolute
    top: 80px
    left: 0
    bottom: 0
    width: 100%
    background: #46e4ff
    header
      width: 100%
      height: 100px
      .title
        margin: 20px auto
        text-align: center
        color: blue
        font-size: 22px;
      #city
        display: inline-block
        margin-left: 20%
        padding: 5px
      #btn
        padding: 5px
        border: 1px solid black
        border-radius: 5px
    .content
      position: absolute
      top: 100px
      left: 0
      bottom: 0
      width: 100%
      overflow: hidden
      text-align: center
      .item
        margin-bottom: 30px
        width: 100%
        .cityName
          font-size: 20px
          text-align: center
        .weatherContent
          text-align: left
          margin-left: 30%
          .item-date
            margin-bottom: 15px


</style>
