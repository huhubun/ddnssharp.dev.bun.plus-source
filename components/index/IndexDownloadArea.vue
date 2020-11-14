<template>
  <v-container class="py-8">
    <div class="text-center mb-4">
      <v-chip class="mx-2" color="blue-grey darken-1" outlined label>
        当前版本 {{ ddnssharpVersion }}
      </v-chip>

      <v-chip class="mx-2" color="blue-grey darken-1" outlined label>
        发布于 {{ ddnssharpVersionCreatedAt }} (UTC)
      </v-chip>
    </div>

    <v-tabs background-color="transparent" color="blue-grey darken-4" grow>
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
                <v-btn
                  outlined
                  block
                  color="blue-grey darken-4"
                  :href="generateDownloadUrl(os, architecture)"
                >
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
</template>

<script>
export default {
  computed: {
    ddnssharpVersionCreatedAt: function () {
      var createdAtStr = process.env.DDNSSHARP_VERSION_CREATED_AT
      var createdAtDate = new Date(createdAtStr)

      return `${createdAtDate.getUTCFullYear()}-${
        createdAtDate.getUTCMonth() + 1
      }-${createdAtDate.getUTCDate()}`
    }
  },
  data: () => ({
    // 版本不带 v 前缀
    ddnssharpVersion: process.env.DDNSSHARP_VERSION,
    // 完整 URL 类似于 https://github.com/huhubun/DDNSSharp/releases/download/v0.0.2/ddnssharp_0.0.2_linux.tar.gz
    downloadBaseUrl: 'https://github.com/huhubun/DDNSSharp/releases/download/',
    osList: [
      {
        name: 'linux',
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
        fileExtension: '.tar.gz',
        col: {
          lg: 4,
          md: 4
        }
      },
      {
        name: 'windows',
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
        fileExtension: '.zip',
        col: {
          lg: 3,
          md: 6
        }
      },
      {
        name: 'macos',
        icon: 'mdi-apple',
        architectures: [
          {
            name: 'x64',
            text: '支持 macOS 10.12 Sierra 及更高版本'
          }
        ],
        fileExtension: '.zip',
        col: {
          lg: 4,
          offset_lg: 4,
          md: 12
        }
      }
    ]
  }),
  methods: {
    generateDownloadUrl(os, architecture) {
      return `${this.downloadBaseUrl}v${this.ddnssharpVersion}/ddnssharp_${this.ddnssharpVersion}_${os.name}_${architecture.name}${os.fileExtension}`
    }
  }
}
</script>
