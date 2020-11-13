<template>
  <v-parallax src="/bg.jpg">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-3 mb-4 light-shadow">DDNSSharp</h1>
        <h4 class="subtitle-1 font-weight-light mb-10 light-shadow">
          一款开源、易用的跨平台 DDNS 工具
        </h4>

        <vue-typed-js
          :strings="typeds"
          :loop="true"
          :cursorChar="'┃'"
          :backSpeed="5"
          :backDelay="2000"
          class="d-block light-shadow"
        >
          <p class="body-1 mb-0 command-input">
            ddnssharp <span class="typing"></span>
          </p>
        </vue-typed-js>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  data: () => ({
    typeds: [
      'list',
      'add --type AAAA --interface eth0 --provider aliyun ipv6.bun.plus',
      'delete',
      'ip',
      'sync',
      'provider'
    ]
  })
}
</script>

<style scoped>
.light-shadow {
  text-shadow: #CCC 0px 0px 12px;
}
</style>