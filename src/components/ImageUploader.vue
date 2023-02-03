<template>
  <div class="sm:my-auto">
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
      @vdropzone-file-added="file = $event"
      @vdropzone-removed-file="file = ''"
    >
    </vue-dropzone>
    <div class="text-right">
      <button
        @click="$emit('save-form', file)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full sm:w-auto"
      >
        {{ $t("btn_save") }}
      </button>
    </div>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  mounted() {
    this.dropzoneOptions.dictDefaultMessage = this.$t("upload");
  },
  data() {
    return {
      file: null,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 200,
        addRemoveLinks: true,
        maxFilesize: 1,
        acceptedFiles: ".jpeg,.jpg,.png,.gif",
        headers: { "My-Awesome-Header": "header value" },
      },
    };
  },
};
</script>
<style scoped></style>
