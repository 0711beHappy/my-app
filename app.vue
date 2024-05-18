<template>
  <!-- Nuxt 基于文件的路由系统 -->
  <!-- 首页 index/index.vue -->
  <NuxtLink to="/">首页</NuxtLink>
  <!-- 视频页 video/index.vue -->
  <NuxtLink to="/video">视频页</NuxtLink>
  <!-- Nuxt 页面路由，相当于 RouterView -->
  <NuxtPage />
</template>

<script setup lang="ts">
// q? SEO里面设置的属性是每一个页面都会有的
// SEO 优化
useSeoMeta({
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili官方', // 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili官方
  description: 'bilibili是国内知名的视频弹幕网站,这里有及时的动漫新番,活跃的ACG氛围,有创意的Up主。大家可以在这里找到许多欢乐',
  keywords: 'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影' // 搜索关键词，权重相对较低
}) 
</script>
