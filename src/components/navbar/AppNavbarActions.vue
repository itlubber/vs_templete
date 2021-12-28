<template>
  <div class="app-navbar-actions">
    <profile-dropdown class="app-navbar-actions__item app-navbar-actions__item--profile">
      <img src="@/assets/avatar.jpg" class="avatar-image">
      <span style="height: 24px; padding-left: 5px; padding-top: 4px;">{{userName}}</span>
    </profile-dropdown>
  </div>
</template>

<script>
import ProfileDropdown from '@/components/navbar/ProfileDropdown'

export default {
  name: 'app-navbar-actions',

  components: {
    ProfileDropdown,
  },

  props: {
    userName: {
      type: String,
      default: '',
    },
    isTopBar: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isTopBarProxy: {
      get () {
        return this.isTopBar
      },
      set (isTopBar) {
        this.$emit('update:isTopBar', isTopBar)
      },
    },
  },
}
</script>

<style lang="scss">
.app-navbar-actions {
  display: flex;
  align-items: center;

  .va-dropdown__anchor {
    color: var(--va-primary);
    fill: var(--va-primary);
  }
  
  &__item {
    padding: 0;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    
    svg {
      height: 24px;
    }

    &:last-of-type {
      margin-right: 0;
    }

    &--profile {
      display: flex;
      justify-content: center;
      margin: auto 0 auto 1.25rem;
    }

    .va-dropdown-content {
      background-color: var(--va-white);
    }

    @media screen and (max-width: 768px) {
      margin-right: 0;

      &:first-of-type {
        margin-left: 0;
      }

      &--profile {
        position: absolute;
        right: 0.75rem;
        top: 1.25rem;
        height: fit-content;
        margin: auto;
      }
    }
  }
}
.avatar-image{
  widows: 24px;
  height: 24px;
  padding: 0 5px;
  border-radius: 50%;
}
</style>
