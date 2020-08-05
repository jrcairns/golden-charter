<template>
  <div class="relative bg-gray-100">
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
