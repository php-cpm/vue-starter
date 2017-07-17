<template>
  <Row>

    <Menu :accordion="false" theme="dark" width="auto" :open-names="['dash']">
      <div class="layout-logo-left"></div>
      <Submenu name="git">
        <template slot="title" class="layout-text">
          <Icon type="ios-navigate"></Icon>
          菜单一
        </template>
        <router-link :to="{ name: 'home/dashboard'}">
          <Menu-item name="dash">
            菜单二
          </Menu-item>
        </router-link>
      </Submenu>
    </Menu>

  </Row>
</template>
<script>
  export default {
    data () {
      return {
        theme2: 'light'
      }
    }
  }
</script>