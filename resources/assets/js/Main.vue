<template>
    <div class="afterApp">
        asd
        <router-view></router-view>
    </div>
</template>
<script>
   
    export default {
        mounted() {
            console.log('asdasda');
        }

        // computed: {
        //     ...mapState({
        //         userFetched: ({ user }) => user.fetched,
        //     }),
        //     hideNavbar() {
        //         const hideNavbar = this.$route.meta.hideNavbar;
        //         if (hideNavbar) {
        //             document.getElementsByTagName('html')[0].classList.remove('has-navbar-fixed-top');
        //         } else {
        //             document.getElementsByTagName('html')[0].classList.add('has-navbar-fixed-top');
        //         }
        //         return !this.$route.meta.hideNavbar;
        //     },
        // },
        // components: {
        //     Navbar,
        //     _footer: Footer,
        // },
    };
</script>

<style>
    .fade-enter{
        transition: all .1s;
        transform: scale(.9);
    }
    .fade-enter-to{
        transition: all .1s;
        transform: scale(1);
    }
    .fade-leave{
        transition: all .1s;
        transform: scale(1);
    }
    .fade-leave-to{
        transition: all .1s;
        transform: scale(.9);
    }
</style>