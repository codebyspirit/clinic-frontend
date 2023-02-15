<template>
  <div id="layout-wrapper">
    <ScaffoldingHead />
    <ScaffoldingMenu />
    <div class="main-content">
      <slot />
      <ScaffoldingFooter />
    </div>
  </div>
  <ScaffoldingRightbar />
  <!-- Right bar overlay-->
  <div class="rightbar-overlay"></div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
