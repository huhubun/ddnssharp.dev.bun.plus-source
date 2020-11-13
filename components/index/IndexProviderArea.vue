<template>
  <v-container class="py-8 text-center">
    <h2 class="display-1 mb-4">
      支持多达 {{ providers.length - 1 }} 种 DNS 提供商
    </h2>
    <div>
      <v-chip
        v-for="provider in providers"
        :key="provider.name"
        outlined
        class="ma-2"
      >
        {{ provider.name }}
      </v-chip>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    providers: [
      {
        name: '阿里云'
      },
      {
        name: '更多支持中…'
      }
    ]
  })
}
</script>
