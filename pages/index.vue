<template>
  <div>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-3 mb-4">DDNSSharp</h1>
          <h4 class="subtitle-1 font-weight-light mb-10">
            一款开源、易用的跨平台 DDNS 工具
          </h4>

          <vue-typed-js
            :strings="typeds"
            :loop="true"
            :cursorChar="'┃'"
            :backSpeed="5"
            :backDelay="2000"
            class="d-block"
          >
            <p class="body-1 mb-0 command-input">
              ddnssharp <span class="typing"></span>
            </p>
          </vue-typed-js>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container class="py-8">
      <v-tabs background-color="transparent" color="basil" grow>
        <v-tab v-for="os in osList" :key="os.name">
          <v-icon class="pr-1">{{ os.icon }}</v-icon>
          {{ os.name }}
        </v-tab>

        <v-tab-item v-for="os in osList" :key="`${os.name}_architecture`">
          <v-row>
            <v-col
              v-for="architecture in os.architectures"
              :key="`${os.name}-${architecture.name}`"
              cols="12"
              :lg="os.col.lg"
              :offset-lg="os.col.offset_lg"
              :md="os.col.md"
              sm="12"
            >
              <v-card class="d-flex flex-column" height="100%">
                <v-card-title class="justify-center">
                  {{ os.name }}-{{ architecture.name }}
                </v-card-title>

                <v-card-text class="text-center">
                  {{ architecture.text }}
                </v-card-text>

                <v-spacer></v-spacer>

                <v-card-actions class="align-end">
                  <v-btn outlined block>
                    <v-icon left>mdi-download-box</v-icon>
                    Download
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-container>

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
  data: () => ({
    typeds: [
      'list',
      'add --type AAAA --interface eth0 --provider aliyun ipv6.bun.plus',
      'delete',
      'ip',
      'sync',
      'provider'
    ],
    osList: [
      {
        name: 'Linux',
        icon: 'mdi-linux',
        architectures: [
          {
            name: 'x64',
            text:
              '支持大多数桌面发行版，如 CentOS、Debian、Fedora、Ubuntu 及派生版本'
          },
          {
            name: 'arm',
            text:
              '在 ARM 上运行的 Linux 发行版本，如 Raspberry Pi Model 2 及更高版本上的 Raspbian'
          },
          {
            name: 'arm64',
            text:
              '在 64 位 ARM 上运行的 Linux 发行版本，如 Raspberry Pi Model 3 及更高版本上的 Ubuntu 服务器 64 位'
          }
        ],
        col: {
          lg: 4,
          md: 4
        }
      },
      {
        name: 'Windows',
        icon: 'mdi-microsoft-windows',
        architectures: [
          {
            name: 'x86',
            text: '适用于 Windows 7 及更高版本的 32 位 Windows 系统'
          },
          {
            name: 'x64',
            text: '适用于 Windows 7 及更高版本的 64 位 Windows 系统'
          },
          {
            name: 'arm',
            text: '适用于运行在 ARM 上的 Windows 8.1 及更高版本的 Windows 系统'
          },
          {
            name: 'arm64',
            text:
              '适用于运行在 64 位 ARM 上的 Windows 10 及更高版本的 Windows 系统'
          }
        ],
        col: {
          lg: 3,
          md: 6
        }
      },
      {
        name: 'macOS',
        icon: 'mdi-apple',
        architectures: [
          {
            name: 'x64',
            text: '支持 macOS 10.12 Sierra 及更高版本'
          }
        ],
        col: {
          lg: 4,
          offset_lg: 4,
          md: 12
        }
      }
    ],
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
    ],
    providers: [
      {
        name: '阿里云'
      },
      {
        name: '更多支持中…'
      }
    ],
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
        text: '您可以放心使用、复制和修改本程序',
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

<style scoped>
.command-input {
  font-family: 'Roboto Mono', monospace !important;
}
</style>