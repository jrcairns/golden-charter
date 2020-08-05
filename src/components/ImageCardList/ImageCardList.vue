<template>
  <Loader v-if="loading" />
  <div v-else class="grid max-w-6xl grid-cols-2 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <ImageCard v-for="image in images" :key="image.id" :image="image" />
  </div>
</template>

<script>
import axios from "axios";
import { getImages } from "../../api/api";

export default {
  components: {
    ImageCard: () => import("@/components/ImageCard/ImageCard"),
    Loader: () => import("@/components/Loader/Loader")
  },
  data: () => ({ images: [], loading: false }),
  async created() {
    try {
      this.loading = true;
      const { data } = await getImages();
      this.images = data;
      this.loading = false;
    } catch (e) {
      console.log(e.message);
    }
  }
};
</script>

<style lang="scss">
</style>