<template>
  <base-dia v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
    <template #body>
      <div>
        <p>add data to all feilds</p>
      </div>
    </template>
    <template #actions>
      <base-button @click="confirmError"> Okay </base-button>
    </template>
  </base-dia>

  <card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title"></label>
        <input type="text" name="title" id="title" ref="titleInput" />
      </div>
      link
      <div class="form-control">
        <label for="description"></label>
        <textarea
          name="desctription"
          id="description"
          rows="3"
          ref="descriptionInput"
        ></textarea>
      </div>

      <div class="form-control">
        <label for="link"></label>
        <input type="url" name="link" id="link" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resourc</base-button>
      </div>
    </form>
  </card>
</template>

<script>
export default {
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  inject: ['addResource'],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (!enteredTitle || !enteredDescription || !enteredLink) {
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
