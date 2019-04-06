<template>
  <div>
    <count-to ref="countTo" :end-val="endVal" @on-animation-end="handleEnd">
      <span slot="left">总金额：</span>
      <span slot="right"> RMB</span>
    </count-to>
    <button @click="getNumber">获取数值</button>
    <button @click="up">更新值</button>
  </div>
</template>

<script>
import CountTo from '_c/count-to'
export default {
  name: 'count_to',
  data () {
    return {
      endVal: 100
    }
  },
  components: {
    CountTo
  },
  methods: {
    getNumber () {
      console.log(this.$refs.countTo.getCount())
    },
    up () {
      this.endVal += Math.random() * 100
    },
    handleEnd (endVal) {
      console.log('end -> ', endVal)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
