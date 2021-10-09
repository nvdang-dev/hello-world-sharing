import OliveButton from "./components/OliveButton.vue";
import OliveChip from "./components/OliveChip.vue";

const VueShareComponentLibrary = {
    install(Vue) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("olive-button", OliveButton);
        Vue.component("olive-chip", OliveChip);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueShareComponentLibrary);
}

export default VueShareComponentLibrary;