<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="site in data"
      :key="site.title"
      cols="12"
      lg="4"
      md="4"
      xs="12"
    >
      <v-card hover :href="site.href">
        <v-img
          :src="site.src"
          class="white--text align-end"
          gradient="rgba(0,0,0,.4), rgba(0,0,0,.4)"
          height="200px"
        >
          <v-card-text class="text-center">{{ site.description }}</v-card-text>
          <v-card-title class="justify-center">
            {{ site.title }} {{ site.href }}
          </v-card-title>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
