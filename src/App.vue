<template>
  <div id="app" class="h-screen bg-lightGrayishCyan">
    <div class="top-header bg-darkGrayishCyan h-40">
      <!-- <img
        src="./assets/images/bg-header-desktop.svg"
        class="w-full"
        alt=""
        srcset=""
      /> -->
    </div>
    <MainContainer />
  </div>
</template>

<script>
import MainContainer from "@/components/MainContainer";
export default {
  name: "App",
  components: {
    MainContainer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap");
body {
  font-family: "Spartan", sans-serif;
}

#app div {
  /* opacity: 0.9; */
}

.top-header {
  background-image: url("./assets/images/bg-header-desktop.svg");
  /* background-size: contain; */
  /* background-repeat: no-repeat; */
  background-size: 100% 100%;
}

@media only screen and (max-width: 600px) {
  .top-header {
    background-image: url("./assets/images/bg-header-mobile.svg");
    background-size: contain;
  }
}
</style>
