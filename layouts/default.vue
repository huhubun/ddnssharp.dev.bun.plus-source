<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      temporary
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="`drawer_nav_item_${i}`"
          :to="item.to"
          :href="item.href"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" flat app color="blue-grey darken-4 white--text">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-sm-and-up"
      />
      <v-toolbar-title v-text="title" />

      <v-spacer />

      <v-toolbar-items class="hidden-xs-only">
        <template v-for="(item, i) in items">
          <v-btn
            text
            v-bind:key="`toolbar_item_${i}_btn`"
            :to="items[i].to"
            :href="items[i].href"
            class="white--text"
          >
            {{ items[i].title }}
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer color="blue-grey darken-4" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="footer in footers"
          :key="footer.href"
          :href="footer.href"
          color="white"
          text
          class="my-2"
        >
          {{ footer.text }}
        </v-btn>
        <v-col class="pb-4 text-center white--text" cols="12">
          &copy; {{ new Date().getFullYear() }}
          <a
            href="https://huhubun.com"
            class="text-decoration-none white--text"
          >
            huhubun
          </a>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      items: [
        {
          icon: 'mdi-home-outline',
          title: '首页',
          to: '/'
        },
        {
          icon: 'mdi-file-document-outline',
          title: '文档',
          href: 'https://github.com/huhubun/DDNSSharp'
        },
        {
          icon: 'mdi-history',
          title: '更新记录',
          href: 'https://github.com/huhubun/DDNSSharp/releases'
        },
        {
          icon: 'mdi-keyboard-return',
          title: 'BUN.DEV',
          href: 'https://bun.dev/'
        }
      ],
      title: 'DDNSSharp',
      footers: [
        {
          text: '源代码',
          href: 'https://github.com/huhubun/DDNSSharp'
        },
        {
          text: 'bun.dev 旗下作品',
          href: 'https://bun.dev'
        }
      ]
    }
  }
}
</script>
