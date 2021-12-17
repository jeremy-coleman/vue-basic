<template>
  <div>
    <h1>babylonjs</h1>

    <canvas class="bjsCanvas" ref="bjsCanvas" />
  </div>
</template>

<script>
import { createScene } from "../scenes/MyFirstScene";

export default {
  name: "BabylonScene",

  mounted() {
    const bjsCanvas = this.$refs.bjsCanvas;
    if (bjsCanvas) {
      createScene(bjsCanvas);
    }
  },
};
</script>
<style scoped>
.bjsCanvas {
  width: 80vw;
  height: 80vh;
  background-color: rgb(180, 30, 30);
}
h1 {
  color: rgb(180, 30, 30);
}
</style>

