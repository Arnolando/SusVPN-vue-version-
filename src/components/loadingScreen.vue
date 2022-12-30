<template>
  <div id="loading">
    <img
      class="img"
      src="@/img/loading.gif"
      alt="loading..."
    />
  </div>
</template>

<script>
export default {

}
</script>

<style>
#loading {
  position: fixed;
  z-index: 1000;
  background-color: black;
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
}
.img {
  position: relative;
  margin: auto;
  margin-top: 20%;
  width: 500px;
}
</style>