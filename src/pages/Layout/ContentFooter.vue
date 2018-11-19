<template>
  <footer class="footer">
    <div class="container">
        <nav>
            <ul>
              <li>
                <router-link :to="{path:'/dashboard'}">Home</router-link>
              </li>
                <li>
                    <a href="#">
                        Company
                    </a>
                </li>
                <li>
                    <a href="#">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#">
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
        <div class="copyright text-center">
          &copy; {{ new Date().getFullYear() }} <a href="https://www.creative-tim.com/?ref=mdf-vuejs" target="_blank">Creative Tim</a>, made with <i class="fa fa-heart heart"></i> for a better web
        </div>
    </div>
  </footer>

</template>
<script>
export default {};
</script>
<style>
</style>
