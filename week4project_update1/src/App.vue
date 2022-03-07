<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <SideBrand />
      <SideMenu />
    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <nav
          class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
        >
          <TopSearch />
          <TopNav />
        </nav>
        <!-- End of Topbar -->
        <ContentComp />
      </div>
      <!-- End of Main Content -->
      <!-- Footer -->
      <FooterComp />
      <!-- End of Footer -->
    </div>
  </div>
  <LogoutComp />
  <ScrollTop />
</template>

<script>
import FooterComp from "./components/FooterComp.vue";
import ContentComp from "./components/ContentComp.vue";
import LogoutComp from "./components/LogOutComp.vue";
import ScrollTop from "./components/ScrollTop.vue";
import SideBrand from "./components/topAndSideBar/SideBarCmp/SideBrand.vue";
import SideMenu from "./components/topAndSideBar/SideBarCmp/SideMenu.vue";
import TopSearch from "./components/topAndSideBar/TopBarCmp/TopSearch.vue";
import TopNav from "./components/topAndSideBar/TopBarCmp/TopNav.vue";
export default {
  name: "App",
  components: {
    FooterComp,
    ContentComp,
    LogoutComp,
    ScrollTop,
    SideBrand,
    SideMenu,
    TopSearch,
    TopNav,
  },
};
</script>
