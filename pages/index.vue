<template>
  <div>
    <index-jumbotron />
    <index-os-area />
    <index-command-area />
    <index-provider-area />
    <index-open-source-area />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '首页',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'DDNSSharp 是一款跨平台 DDNS 工具，支持多种 DNS 提供商，用于在本机 IP 地址变化时，更新 DNS 提供商的解析记录。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'DDNSSharp,DDNS,动态域名解析,huhubun,呼呼小笼包'
        }
      ]
    }
  },
  data: () => ({})
}
</script>
