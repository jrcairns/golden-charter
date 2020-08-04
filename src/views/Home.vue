<template>
  <div class="relative py-12 bg-gray-100">
    <ImageCardList />
  </div>
</template>

<script>
export default {
  components: {
    ImageCardList: () => import("@/components/ImageCardList/ImageCardList"),
  }
};
</script>
