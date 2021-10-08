import Sidebar from "./SideBar.vue";
import SidebarLink from "./SidebarLink.vue";

const SidebarStore = {
  showSidebar: false,
  displaySidebar(value) {
    this.showSidebar = value;
  },
};

const SidebarPlugin = {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          sidebarStore: SidebarStore,
        };
      },
    });

    Object.defineProperty(Vue.prototype, "$sidebar", {
      get() {
        return this.$root.sidebarStore;
      },
    });
    Vue.component("side-bar", Sidebar);
    Vue.component("sidebar-link", SidebarLink);
  },
};

export default SidebarPlugin;
