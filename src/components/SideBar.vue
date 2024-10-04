<template>
  <div class="hello">
    <scale-sidebar-nav>
      <scale-sidebar-nav-item current>
        <a href="/">Home</a>
      </scale-sidebar-nav-item>
      <scale-sidebar-nav-item>
        <a href="/not-ready">Products</a>
      </scale-sidebar-nav-item>
      <scale-sidebar-nav-item>
        <a href="/not-ready">Accounts</a>
      </scale-sidebar-nav-item>
      <scale-sidebar-nav-item>
        <a href="/not-ready">Payouts</a>
      </scale-sidebar-nav-item>
      <scale-sidebar-nav-item>
        <a href="/not-ready">Vendors</a>
      </scale-sidebar-nav-item>
      <scale-sidebar-nav-item>
        <a href="/not-ready">Transactions</a>
      </scale-sidebar-nav-item>
      <scale-sidebar-nav-item>
        <a href="/not-ready">Sub Users/Roles</a>
      </scale-sidebar-nav-item>
      <!-- <scale-divider></scale-divider> -->
      <scale-sidebar-nav-item>
        <a href="/not-ready"
          ><scale-icon-service-settings
            accessibility-title="settings"
            size="15"
            class="iconss"
          />Settings</a
        >
      </scale-sidebar-nav-item>
      <scale-sidebar-nav-item>
        <a href="#">Logout</a>
      </scale-sidebar-nav-item>
    </scale-sidebar-nav>
  </div>
</template>
  
<script>
export default {
  name: "SideBar",
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #e20074;
}
scale-icon {
  --display: inline-flex;
  --transition: all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);
}
.iconss {
  margin-right: var(--scl-spacing-16);
}
</style>
  