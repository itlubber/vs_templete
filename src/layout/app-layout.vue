<template>
  <div class="app-layout">
    <navbar />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";

export default {
  name: "app-layout",
  components: { Navbar },
};
</script>

<style lang="scss">
$mobileBreakPointPX: 640px;
$tabletBreakPointPX: 768px;

.app-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  &__navbar {
    min-height: 4rem;
  }

  &__content {
    display: flex;
    height: calc(100vh - 4rem);
    flex: 1;

    @media screen and (max-width: $tabletBreakPointPX) {
      height: calc(100vh - 6.5rem);
    }

    .app-layout__sidebar-wrapper {
      position: relative;
      height: 100%;
      background: var(--va-white);

      @media screen and (max-width: $tabletBreakPointPX) {
        &:not(.minimized) {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          z-index: 999;
        }

        .va-sidebar:not(.va-sidebar--minimized) {
          // Z-index fix for preventing overflow for close button
          z-index: -1;
          .va-sidebar__menu {
            padding: 0;
          }
        }
      }
    }
  }
  &__page {
    flex-grow: 2;
    overflow-y: scroll;
  }
}
</style>