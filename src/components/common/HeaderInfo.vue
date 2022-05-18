<template>
  <v-footer v-if="!$vuetify.display.mobile">
    <v-card
      elevation="0"
      rounded="0"
      width="100%"
      class="text-center pa-0 d-flex"
    >
      <v-card-text class="pa-0">
        <div
          class="mr-auto text-grey-lighten-5"
          @click="redirect()"
          style="cursor: pointer"
        >
          <v-btn icon="mdi-home" class="mb-1 mr-0" variant="plain"></v-btn>
          <span>Biertowice 202, 32-440 Sułkowice</span>
        </div>
      </v-card-text>
      <v-card-text class="pa-0">
        <div class="ml-auto text-grey-lighten-5">
          <v-btn class="mb-1 mr-0" icon="mdi-email" variant="plain"></v-btn>
          <span
            ><span
              style="cursor: pointer"
              @click="copyTel('profil.js@gmail.com')"
              >profil.js@gmail.com</span
            >
            |
            <span @click="copyTel('537 633 536')" style="cursor: pointer"
              >537 633 536</span
            ></span
          >
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "HeaderInfo",
  methods: {
    async redirect() {
      try {
        let anchor = document.createElement("a");
        anchor.target = "_blank";
        anchor.href = "https://goo.gl/maps/WJNMJ4o2LeaXdCNH9";
        document.body.appendChild(anchor);
        await anchor.click();
      } catch (err) {
        console.log("error");
      }
    },
    copyTel(text) {
      var copyText = text;
      navigator.clipboard.writeText(text);
      alert("skopiowano nr telefonu " + copyText);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-footer {
  padding: 0px;
  .v-card {
    background-color: #204b63 !important;
  }
}
.v-btn.v-btn--density-default {
  height: calc(var(--v-btn-height) + 0px);
}
</style>
