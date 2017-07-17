<style scoped>
  .layout {
    height: 100%;
    width: 100%;
    padding: 0;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-all {

    height: 100%;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    flex-grow: 1;
    min-height: 200px;
    padding: 15px;
    overflow-x: hidden;
    overflow-y: auto;
    background: #fff;
    border-radius: 4px;
  }

  .layout-copy {
    text-align: center;
    padding: 4px 0 0px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
    height: 100%;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    margin: 12px auto;
    color: white;
    text-align: center;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .layout-right {
    display: flex;
    flex-direction: column;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }
</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row class="layout-all" type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
      <div class="layout-logo-left">
        <h1>VUE 开发实例</h1>
      </div>
      <CMenu></CMenu>
      <div class="layout-copy">
        2017 &copy; php-cpm
      </div>
      </Col>
      <Col :span="spanRight" class="layout-right">
      <CHeader></CHeader>
      <div class="layout-breadcrumb">
        <Breadcrumb>

          <template v-for="item in items">
            <Breadcrumb-item v-if="item.href" :href="item.href">{{item.title}}</Breadcrumb-item>
            <Breadcrumb-item v-else>{{item.title}}</Breadcrumb-item>
          </template>
        </Breadcrumb>
      </div>
      <div class="layout-content">
        <router-view></router-view>
      </div>

      </Col>
    </Row>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import CMenu from '../../components/CMenu.vue'
  import CHeader from '../../components/CHeader.vue'
  import Util from '../../libs/util'
  export default {

    created () {


      Util.log('home index created')
    },
    /*
     由于是组件父元素
     可以在每个路由切换时触发
     */
    beforeCreate() {
    },
    data () {
      return {
        spanLeft: 4,
        spanRight: 20,
        items: [
          {href: "home/dashboard", title: "首页"},
        ]
      }
    },
    computed: {
      iconSize: () => {
        return this.spanLeft > 2 ? 14 : 24;
      },
      ...mapGetters([
        'menuIsFold',
      ])
    },
    watch: {
      menuIsFold: function (val) {
        Util.log("menuIsFold", val)

        if (this.spanLeft > 2) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 4;
          this.spanRight = 20;
        }
      },
    },
//    computed: {
//    },
    components: {
      CHeader,
      CMenu,
    },
  methods: {

  }
  }
</script>