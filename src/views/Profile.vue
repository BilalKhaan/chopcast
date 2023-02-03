<template>
  <div
    class="flex sm:justify-between h-screen p-8 flex-wrap flex-col sm:flex-row gap-16 sm:gap-0"
  >
    <UserForm @set-form="form = $event" />

    <ImageUploader @save-form="save" />
  </div>
</template>
<script>
import UserForm from "../components/UserForm.vue";
import ImageUploader from "@/components/ImageUploader.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    UserForm,
    ImageUploader,
  },
  data() {
    return {
      form: null,
    };
  },
  computed: {
    ...mapGetters({
      v$: "v",
    }),
  },
  methods: {
    ...mapActions({
      saveUser: "saveUserInfo",
    }),
    async save(file) {
      const flag = await this.v$.form.$validate();
      if (!flag) return;
      const payload = {
        ...this.form,
        image: file,
      };
      this.saveUser(payload);
      alert("form is save");
    },
  },
};
</script>
<style scoped></style>
