<template>
  <div class="blue-grey lighten-5 py-8 text-center">
    <v-container>
      <h2 class="display-1 mb-4">立即开始</h2>
      <v-row>
        <v-col
          v-for="command in commands"
          :key="command.command"
          cols="12"
          lg="4"
          md="6"
          sm="12"
        >
          <v-card height="100%">
            <v-card-title class="justify-center command-input">
              {{ command.command }}
            </v-card-title>
            <v-card-subtitle>{{ command.name }}</v-card-subtitle>
            <v-card-text class="text-center command-input">
              {{ command.sample }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-btn
            block
            color="white"
            href="https://github.com/huhubun/DDNSSharp"
          >
            <v-icon left>mdi-arrow-right</v-icon>
            查看文档
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    commands: [
      {
        command: 'list',
        name: '显示域名列表',
        sample: 'ddnssharp list'
      },
      {
        command: 'add',
        name: '添加域名',
        sample:
          'ddnssharp add -t AAAA -i eth0 -p aliyun --ali-access-key-id YOUR_ACCESS_KEY_ID --ali-secret YOUR_SECRET ipv6.bun.plus'
      },
      {
        command: 'delete',
        name: '删除域名',
        sample: 'ddnssharp delete ipv6.bun.plus'
      },
      {
        command: 'ip',
        name: '显示本机 IP 信息',
        sample: 'ddnssharp ip'
      },
      {
        command: 'sync',
        name: '与 DNS 提供商进行同步',
        sample: 'ddnssharp sync'
      },
      {
        command: 'provider',
        name: '查看支持的 DNS 提供商',
        sample: 'ddnssharp provider'
      }
    ]
  })
}
</script>
