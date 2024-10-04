<template>
  <div>
    <scale-telekom-header
      meta-nav-aria-label="Meta navigation section"
      meta-nav-external-aria-label="External navigation section"
      lang-switcher-aria-label="Language switcher section"
      main-nav-aria-label="Main navigation section"
    >
      <scale-telekom-nav-list
        slot="main-nav"
        aria-label="Main Navigation Links"
      >
        <scale-telekom-nav-item aria-label="Topic one">
          <!-- <h2 class="btn">Scale Familiarization</h2> -->
          <!-- <scale-telekom-nav-flyout hover>
            <div>Flyout content</div>
          </scale-telekom-nav-flyout> -->
        </scale-telekom-nav-item>
        <!-- … -->
      </scale-telekom-nav-list>
    </scale-telekom-header>
  </div>
</template>

<script>
export default {
  name: "HeaderFile",
};
</script>

<style scoped>
.btn{
    /* margin-left: 10px; */
}
</style>