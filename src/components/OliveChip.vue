<template>
  <div>
    <v-chip class="ma-2" color="primary">
      {{ text }}
    </v-chip>
  </div>
</template>

<script>
import { VChip } from "vuetify/lib";
export default {
  name: "OliveChip",
  components: { VChip },
  props: {
    text: {
      default: "Olive Chip",
      type: String,
    },
  },
};
</script>

