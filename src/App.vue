<template>
  <div>
    <transition name="fade">
      <div class=fade-screen v-if="tuneMenu"></div>
    </transition>
    <app-menu></app-menu>
    <app-table></app-table>
    <app-footer></app-footer>
    <app-filter v-if="tuneMenu"></app-filter>
  </div>
</template>

<style scoped>
  .fade-screen {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color:rgba(34, 34, 34, 0.8);
    z-index: 1;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
  }

</style>

<script>
import Menu from './components/Menu';
import Footer from './components/Footer';
import Table from './components/Table';
import FilterMenu from './components/FilterMenu';

export default {
  name: 'App',

  components: {
    'app-menu': Menu,
    'app-table': Table,
    'app-footer': Footer,
    'app-filter': FilterMenu
  },

  data: () => ({
    fadeScreen: false
  }),

  computed: {
    tuneMenu: function() {
      return this.fadeScreen;
    }
  },

   mounted: function () { 
    this.$root.$on('fadeScreen', (fadeScreen) => { // here you need to use the arrow function
      this.fadeScreen = fadeScreen;
      this.tuneMenu;
    })
  }
};
</script>
