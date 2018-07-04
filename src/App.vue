<template>
  <div id="app">
    <transition v-if="!$route.meta.template" name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <transition v-if="$route.meta.template=='appLayout'" name="slide-fade" mode="out-in">
      <app-layout>
        <router-view></router-view>
      </app-layout>
    </transition>
  </div>
</template>

<script>
import { AppLayout } from "@/components";

export default {
  data() {
    return {};
  },
  components: {
    AppLayout
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
</style>
