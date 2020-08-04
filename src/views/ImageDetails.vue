<template>
  <div class="w-full max-w-xl mx-auto">
    <Loader v-if="loading" />
    <div v-else>
      <router-link to="/">back</router-link>
      <div class="overflow-hidden bg-white rounded shadow">
        <img class="max-w-full" :src="image.download_url" alt />
        <div class="flex justify-between p-6">
          <div>
            <div class="mb-4">
              <p class="text-xs font-bold leading-none text-gray-600 uppercase">Author</p>
              <p class="text-sm text-gray-800">{{ image.author }}</p>
            </div>
            <div>
              <p class="text-xs font-bold leading-none text-gray-600 uppercase">Dimensions</p>
              <p class="text-sm text-gray-800">{{ image.width }} x {{ image.height }}</p>
            </div>
          </div>
          <div>
            <DownloadButton :author="image.author" :url="image.download_url" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getImageById } from "../api/api";

export default {
  components: {
    Loader: () => import("@/components/Loader/Loader"),
    DownloadButton: () => import("@/components/DownloadButton/DownloadButton")
  },
  data: () => ({ image: null, loading: false }),
  async created() {
    try {
      this.loading = true;
      const { data } = await getImageById(this.$route.params.id);
      this.image = data;
      this.loading = false;
    } catch (e) {
      console.log(e.message);
    }
  }
};
</script>