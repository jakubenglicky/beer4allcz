<template>
  <div>
    <header>
      <nav class="click-dropdown">
        <div class="navbar-brand">
          <Logo />
        </div>

        <div class="navbar-content click-dropdown-content">
          <ul>
            <li>
              <a href="#uvod">Úvod</a>
            </li>
            <li>
              <a href="#o-mne">O mně</a>
            </li>
            <li>
              <a href="#programy">Naše programy</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
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
              <li>mail: <a href="mailto:info@zorak.cz">info@beer4all.cz</a></li>
            </ul>
            <p>Máte dotaz či připomínku? <a href="mailto:info@beer4all.cz">Napište nám.</a></p>
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
        <div class="copyright">© 2021 VYEN</div>
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
