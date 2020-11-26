<template>
  <!--  <header class="bg-blue-700">-->
  <!--    <div class="container-navbar flex items-center justify-between px-5 py-2">-->
  <!--      <div class="mr-5">-->
  <!--        <span class="text-white font-bold">Jesus Estevez</span>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </header>-->

  <nav
    :class="{ 'scrolled': !view.atTopOfPage }"
    class="fixed flex w-full bg-white border-b  h-16 m-auto top-0 animated bg-blue-700">

    <div class="container-navbar flex items-center flex-row flex-wrap justify-between w-full">
      <span class="text-white font-bold">Jesus Estevez</span>
      <div>

        <span class="mx-3 text-white">About me</span>
        <span class="mx-3 text-white">Portfolio</span>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      view: {
        atTopOfPage: true
      }
    }
  },

// a beforeMount call to add a listener to the window
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    }
  }
}
</script>

<style scoped>
.container-navbar {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
}

nav {
  z-index: 10;
  transition: height .5s ease-out;
}

nav.scrolled {
  @apply shadow-lg h-12;
  border-bottom: 0;
}

</style>
