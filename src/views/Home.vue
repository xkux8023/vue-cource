<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到argu</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <h4> {{ food }} </h4>
    <button @click="getInfo" :style="{ background: bgColor }">请求数据</button>
    <br />
    <br />
    <img :src="url"> -->

    <Row>
      <i-col></i-col>
    </Row>
    <Row :gutter="10">
      <i-col span="12"></i-col>
      <i-col span="12"></i-col>
    </Row>
    <Row :gutter="10" class="blue">
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
    </Row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'egg'
    }
  },
  data () {
    return {
      url: '',
      bgColor: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => console.log(vm))
  },
  beforeRouteLeave (to, from, next) {
    // const leave = confirm('您确定要离开吗')
    // if (leave) next()
    // else next(false)
    next()
  },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        const name = 'lison'
        this.$router.push({
          path: `/argu/${name}`
        // name: 'argu',
        // params: {
        //   name: 'xkux8023'
        // }
        })
      } else if (type === 'replace') this.$router.replace({ name: 'parent'})
    },
    getInfo () {
      getUserInfo({ userId: 21 }).then(res => {
        console.log('res: ', res.data)
        this.url = res.data.img
        this.bgColor = res.data.color
      })
    }
  }
}
</script>
<style lang="less">
.home{
  .ivu-col{
    height: 50px;
    margin-top: 10px;
    background: pink;
    background-clip: content-box;
  }
  .blue{
    .ivu-col{
      background: blue;
      background-clip: content-box;
    }
  }
}
</style>
