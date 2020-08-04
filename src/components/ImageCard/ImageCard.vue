<template>
  <div class="flex overflow-hidden bg-white rounded shadow">
      <img class="object-cover object-center w-16" :src="image.download_url" :alt="`Image from ${image.author}`">
        <div class="flex flex-col items-start justify-between flex-1 p-3">
            <p class="text-gray-800">{{image.author}}</p>
            <router-link :to="`/image/${image.id}`" class="px-4 py-2 mt-4 text-sm leading-none text-white transition duration-200 bg-green-500 rounded hover:bg-green-600">Details</router-link>
        </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
</style>