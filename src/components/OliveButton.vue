<template>
  <div>
    <v-btn depressed color="error"> {{ text }} </v-btn>
  </div>
</template>

<script>
import { VBtn } from "vuetify/lib";
export default {
  name: "OliveButton",
  components: { VBtn },
  props: {
    text: {
      default: "Olive Button",
      type: String,
    },
  },
};
</script>

