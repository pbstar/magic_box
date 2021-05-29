<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <router-link to="/sou"
                   v-slot="{ href, navigate, isActive }"
                   custom>
        <li :active="isActive"
            :href="href"
            @click="navigate"
            class="nav-list-item"
            :class="[isActive && 'router-link-active']">
          <van-icon name="search" />
          <span>搜索</span>
        </li>
      </router-link>
      <router-link to="/box"
                   v-slot="{ href, navigate, isActive }"
                   custom>
        <li :active="isActive"
            :href="href"
            @click="navigate"
            class="nav-list-item"
            :class="[isActive && 'router-link-active']">
          <van-icon name="apps-o" />
          <span>功能</span>
        </li>
      </router-link>
      <router-link to="/user"
                   v-slot="{ href, navigate, isActive }"
                   custom>
        <li :active="isActive"
            :href="href"
            @click="navigate"
            class="nav-list-item"
            :class="[isActive && 'router-link-active']">
          <van-icon name="contact" />
          <span>我的</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>
<style lang="less" scoped>
@import "../common/style/mixin";
.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 42px;
  padding: 5px 0;
  z-index: 1000;
  border-top: 1px solid rgb(218, 217, 217);
  background: rgb(238, 236, 236);
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  .nav-list {
    width: 100%;
    height: 100%;
    .fj();
    flex-direction: row;
    padding: 0;
    .nav-list-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      color: #666;
      &.router-link-active {
        color: @primary;
      }
      i {
        text-align: center;
        font-size: 22px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
