// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // 是否开启服务端渲染，默认开启
  devtools: { enabled: true }, // 是否开启调试工具
  modules: ['@vant/nuxt'] // 应用模块
})
