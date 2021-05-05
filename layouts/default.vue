<template>
  <div>
    <div class="logo">
      <NuxtLink to="/"><Logo /></NuxtLink>
    </div>
    <header>
      <nav class="click-dropdown">
        <div class="navbar-brand">
          <nuxt-link to="/"><Logo /></nuxt-link>
        </div>
        <button class="navbar-toggler open-drop"><span></span></button>
        <div class="navbar-content click-dropdown-content">
          <ul>
            <li>
              <nuxt-link to="/" class="close-drop">Úvod</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#o-nas" class="close-drop">O nás</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#programy" class="close-drop">Naše programy</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#servis" class="close-drop">Poradenství a servis</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#kontakt" class="close-drop">Kontakt</nuxt-link>
            </li>
          </ul>
        </div>

      </nav>
    </header>

    <main>
      <Nuxt />
    </main>

    <footer>
      <div class="container" id="kontakt">
        <div class="row">
          <div class="col-md-6">
            <h4>Kontakt</h4>
            <ul>
              <li>Miroslav Tovara</li>
              <li>mail: <a href="mailto:pivo@beer4all.cz">pivo@beer4all.cz</a></li>
              <li>tel: <a href="tel:+420737224062">+420 737 224 062</a></li>
            </ul>
            <p>Máte dotaz či připomínku? <a href="mailto:pivo@beer4all.cz">Napište nám.</a></p>
          </div>
          <div class="col-md-6">
            <h4>Sledujte nás</h4>
            <a href="https://www.facebook.com/beer4all.cz/" class="social-link" target="_blank"><i class="fab fa-facebook-square fa-3x"></i></a>
            <a href="https://www.instagram.com/beer4all.cz/" class="social-link" target="_blank"><i class="fab fa-instagram fa-3x"></i></a>
          </div>

        </div>
      </div>
      <hr>
      <div class="copyright-row">
        <div class="copyright">© 2021 BEER 4 ALL</div>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "../components/Logo";
export default {
  components: {Logo}
}
</script>
