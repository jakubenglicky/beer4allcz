<template>
  <div>
    <div class="logo">
      <Logo />
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
              <a href="/" class="close-drop">Úvod</a>
            </li>
            <li>
              <a href="#o-nas" class="close-drop">O nás</a>
            </li>
            <li>
              <a href="#programy" class="close-drop">Naše programy</a>
            </li>
            <li>
              <a href="#poradenstvi" class="close-drop">Poradenství a servis</a>
            </li>
            <li>
              <a href="#kontakt" class="close-drop">Kontakt</a>
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
          <div class="col-md-4">

          </div>
          <div class="col-md-4">
            <h4>Kontakt</h4>
            <ul>
              <li>Miroslav Tovara</li>
              <li>mail: <a href="mailto:pivo@beer4all.cz">pivo@beer4all.cz</a></li>
              <li>tel: <a href="tel:+420737224062">+420 737 224 062</a></li>
            </ul>
            <p>Máte dotaz či připomínku? <a href="mailto:pivo@beer4all.cz">Napište nám.</a></p>
          </div>
          <div class="col-md-4">
            <h4>Sledujte nás</h4>
            <a href="https://www.facebook.com"></a>
            <a href="insta"></a>
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
