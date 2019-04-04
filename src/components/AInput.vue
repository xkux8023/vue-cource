<template>
  <input :value="value" @input="handleInput" />
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      const val = event.target.value
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
