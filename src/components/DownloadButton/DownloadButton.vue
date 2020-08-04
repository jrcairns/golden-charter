<template>
    <button class="px-4 py-2 text-sm leading-none text-white transition duration-200 bg-blue-500 rounded hover:bg-blue-600" @click="download">Download</button>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
  },
  methods: {
    toDataURL(url) {
      return fetch(url)
        .then(response => {
          return response.blob();
        })
        .then(blob => {
          return URL.createObjectURL(blob);
        });
    },
    async download() {
      const a = document.createElement("a");
      a.href = await this.toDataURL(this.url);
      a.download = this.author;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
};
</script>