import { directive as vClickOutside } from "../node_modules/vue-clickaway";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalDirectives = {
  install(Vue) {
    Vue.directive("click-outside", vClickOutside);
  }
};

export default GlobalDirectives;
