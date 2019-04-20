<template>
  <div class="color-card" @click="onClick">
    <div v-bind:style="{ background: color }"></div>
    <h3>{{ color }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ColorCard extends Vue {
  @Prop() private color!: string;

  onClick() {
    this.$emit('click')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.color-card {
  height: 200px;
  width: 150px;
  padding: 0px;
  background: #FFF;
  filter: drop-shadow(0px 0px 5px #666);
  display: flex;
  flex-flow: column;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    width: 90vw;
    height: 120px;
    margin: 0 auto;
  }

  > div {
    flex: 1;
    display: block;
    width: 100%;
  }

  > h3 {
    flex: none;
    font-family: sans-serif;
    font-weight: bold;
    padding: 10px;
    margin: 0;
  }
}
</style>
