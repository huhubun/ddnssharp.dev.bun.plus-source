<template>
  <div class="blue-grey lighten-5 py-8 text-center">
    <v-container>
      <h2 class="display-1 mb-4">开放源代码</h2>
      <v-row>
        <v-col
          v-for="openSource in openSourceList"
          :key="openSource.title"
          cols="12"
          md="4"
          sm="12"
        >
          <v-card class="d-flex flex-column" height="100%">
            <v-card-title class="justify-center">
              {{ openSource.title }}
            </v-card-title>
            <v-card-text v-if="openSource.text">
              {{ openSource.text }}
            </v-card-text>

            <v-spacer></v-spacer>

            <v-card-actions v-if="openSource.btn">
              <v-btn outlined block :href="openSource.btn.href">
                <v-icon left>{{ openSource.btn.icon }}</v-icon>
                {{ openSource.btn.text }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    openSourceList: [
      {
        title: '获取及贡献源代码',
        text: '一同参与到 DDNSSharp 的开发中来',
        btn: {
          href: 'https://github.com/huhubun/DDNSSharp',
          icon: 'mdi-github',
          text: 'GitHub'
        }
      },
      {
        title: 'MIT 协议',
        text: '放心的使用、复制和修改本程序',
        btn: {
          href: 'https://github.com/huhubun/DDNSSharp',
          icon: 'mdi-license',
          text: '查看许可协议'
        }
      },
      {
        title: '提供反馈',
        text: '发现 bug、表达意见，一同令 DDNSSharp 变得更好',
        btn: {
          href: 'https://github.com/huhubun/DDNSSharp/issues',
          icon: 'mdi-alert-circle-outline',
          text: 'issues'
        }
      }
    ]
  })
}
</script>
