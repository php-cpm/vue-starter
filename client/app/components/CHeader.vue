<style scoped>
  .ivu-icon {

    color: white;
  }
</style>
<template>

  <Row>
    <Menu mode="horizontal" theme="primary" width="auto">
    </Menu>
  </Row>
</template>
<script>
  export default {
    data () {
      return {
        theme2: 'light',
        username: this.$store.state.login.username,
      }
    },
    methods: {
      toggleClick () {
        this.$store.dispatch('toggleMenu')
      },
      logout () {
        this.$store.dispatch('logout')
        this.$router.push('/login');
      }
    }
  }
</script>