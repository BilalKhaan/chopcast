<template>
  <div class="w-full sm:w-2/4 bg-white shadow-md rounded-xl sm:my-auto p-4">
    <!-- Title -->
    <span class="text-4xl font-bold m-4"> {{ $t("title") }} </span>
    <!-- form -->
    <form ref="form">
      <div class="mt-8">
        <div class="text-left">
          <label
            for="small-input"
            class="block mb-2 text-sm font-medium text-gray-900 text-left"
          >
            {{ $t("input.first_name") }}
          </label>
          <input
            type="text"
            id="small-input"
            v-model="form.firstName"
            :class="
              v$.form.firstName.$error ? 'border-red-500' : 'border-grey-300'
            "
            class="block w-full p-2 text-gray-900 border rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <span v-if="v$.form.firstName.$error" class="text-red-500 text-left">
            {{ $t(`error.${v$.form.firstName.$errors[0].$message}`) }}
          </span>
        </div>

        <div class="my-4 text-left">
          <label
            for="small-input my-4"
            class="block mb-2 text-sm font-medium text-gray-900 text-left"
          >
            {{ $t("input.last_name") }}
          </label>
          <input
            type="text"
            id="small-input"
            v-model="form.lastName"
            :class="
              v$.form.lastName.$error ? 'border-red-500' : 'border-grey-300'
            "
            class="block w-full p-2 text-gray-900 border rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <span v-if="v$.form.lastName.$error" class="text-red-500 text-left">
            {{ $t(`error.${v$.form.lastName.$errors[0].$message}`) }}
          </span>
        </div>

        <div class="text-left">
          <label
            for="small-input"
            class="block mb-2 text-sm font-medium text-gray-900 text-left"
          >
            {{ $t("input.email") }}
          </label>
          <input
            type="email"
            id="small-input"
            v-model="form.emale"
            :class="v$.form.emale.$error ? 'border-red-500' : 'border-grey-300'"
            class="block w-full p-2 text-gray-900 border rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <span v-if="v$.form.emale.$error" class="text-red-500 text-left">
            {{ $t(`error.${v$.form.emale.$errors[0].$message}`) }}
          </span>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  maxLength,
  alphaNum,
  helpers,
} from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  mounted() {
    this.$store.commit("setValidateObj", this.v$);
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        emale: "",
      },
    };
  },
  validations() {
    return {
      form: {
        firstName: {
          required: helpers.withMessage("required", required),
          maxLength: helpers.withMessage("max_length", maxLength(50)),
          alphaNum: helpers.withMessage("alpha_num", alphaNum),
        },
        lastName: {
          required: helpers.withMessage("required", required),
          maxLength: helpers.withMessage("max_length", maxLength(50)),
          alphaNum: helpers.withMessage("alpha_num", alphaNum),
        },
        emale: {
          required: helpers.withMessage("required", required),
          email: helpers.withMessage("emale", email),
        },
      },
    };
  },
  watch: {
    form: {
      immediate: true,
      deep: true,
      handler() {
        this.$emit("set-form", this.form);
      },
    },
  },
};
</script>
<style scoped></style>
