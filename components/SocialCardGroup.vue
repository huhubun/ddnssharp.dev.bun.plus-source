<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="social in data"
      :key="social.title"
      lg="3"
      sm="6"
      xs="12"
    >
      <v-btn
        class="white--text"
        block
        depressed
        :color="social.color"
        :href="social.href || '#'"
      >
        <v-icon left>{{ social.icon }}</v-icon>
        {{ social.title }} {{ social.name }}
      </v-btn>
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

<style>
</style>