<template>
  <div>
    <a-input @input="handleInput"/>
    <a-show :content="inputValue" />
    <p>{{ inputValue }} -> lastLetter is {{ inputValueLastLetter }}</p>
    <p>appName: {{ appName }}, appNameWithVersion : {{ appNameWithVersion }}</p>
    <p>userName : {{ userName }}, firstLetter is : {{ firstLetter }}</p>

    <button @click="handleChangeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
    <button @click="changeUserName">修改用户名</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  mounted() {
    this.$store.commit('SET_APP_VERSION')
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    ...mapMutations([
      'SET_USER_NAME'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    handleChangeAppName () {
      this.updateAppName()
    },
    changeUserName () {
      this.SET_USER_NAME('vue-cource')
    },
    registerModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: ['学习mutations', '学习actions']
        }
      })
    }
  },
  computed: {
    ...mapState({
      userName: state => state.user.userName,
      appName: state => state.appName,
      appVersion: state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
    }),
    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  }
}
</script>
