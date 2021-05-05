<template>
  <div>
  <section id="uvod">
      <div class="main-carousel-item">
        <img src="img/main.jpg">
        <a href="#programy" class="cta">
          <span>
            NAŠE PROGRAMY
          </span>
        </a>
      </div>
  </section>
  <section id="o-nas">
    <div class="container">
      <h2>O nás</h2>
      <ul>
        <li>Jako jediní nabízíme specializované kurzy péče o čepované pivo a výčepní zařízení</li>
        <li>Našimi zákazníky jsou pivaři s vlastním výčepem, ale také profesionální gastroprovozy</li>
      </ul>

      <p>Už vás nebaví teplé, zvětralé pivo ze zaprášené sklenice, s řídkou pěnou, která vypadá jako Himalájské pohoří ?
        Máme pro vás řešení !</p>

      <p>I když jsou Češi národ pivařů, stále mezi námi koluje mnoho mýtů a nepravd o čepování, tlačných plynech i pivu
      obecně. Jsme schopni pro vás tyto informace rozklíčovat, vysvětlit a udělat z vás skutečné teoretické i praktické
        pivní znalce.</p>
      <p>Naší vášní je skvělé čepované pivo a vše, co k němu patří.</p>
      <p>V oboru pivovarnictví máme více než dvacetileté zkušenosti z těch největších tuzemských i světových pivovarů.</p>

      <p>Nezáleží, jestli máte výčep na chalupě, doma, v garáži, ve sklepě, jste hospoda v centru města, nebo na vesnici,
      naučíme vás ošetřit a následně si užít to nejlepší pivo ve stejné kvalitě, jako v těch nejlepších pivnicích.</p>
      <p>Doporučíme, jak se starat o váš výčep, veškeré jeho příslušenství a v neposlední řadě pivní sklo.</p>
    </div>
  </section>
  <section id="programy">
    <div class="container">
      <h2>Naše programy</h2>
      <div class="row">
        <div class="col-md-4">
          <nuxt-link to="pan-hospodsky">
            <div class="service-box">
              <div class="image">
                <img src="img/pan_hospodsky.jpg">
              </div>
              <div class="text">
                <h3>PAN HOSPODSKÝ - domácí profesionál</h3>
                <p>Budete umět vysanitovat a udržovat svůj výčep, znát teorii výroby piva a současně budete schopni načepovat to nejlepší pivo</p>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-4">
          <nuxt-link to="pan-vycepni">
            <div class="service-box">
              <div class="image">
                <img src="img/pan_vycepni.jpg">
              </div>
              <div class="text">
                <h3>PAN VÝČEPNÍ - pivní znalec</h3>
                <p>
                  Budete mít znalosti jako ti nejlepší výčepní a dokážete kdykoli načepovat skvělé pivo
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-4">
          <nuxt-link to="gastroprovozy">
            <div class="service-box">
              <div class="image">
                <img src="img/gastroprovozy.jpg">
              </div>
              <div class="text">
                <h3>PROGRAM PRO GASTROPROVOZY</h3>
                <p>
                  Chcete mít v restauraci lepší pivo než konkurence, případně ve vaší klubovně mít skvělé pivo ?
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>

    </div>
  </section>
  <section id="servis">
    <div class="container">
      <h2>Poradenství a servis</h2>
      <div class="row">
        <div class="col-md-6">
          <img src="/img/servis.jpg" width="535">
          <br><br>
          <div class="row">
            <div class="col-md-6">
              <a href="/img/projects/001.jpg" data-lightbox="projects-2"><img src="/img/projects/001.jpg" width="250"></a>
            </div>
            <div class="col-md-6">
              <a href="/img/projects/002.jpg" data-lightbox="projects-2"><img src="/img/projects/002.jpg" width="250"></a>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-md-12">
              <a href="/img/projects/003.jpg" data-lightbox="projects-2"><img src="/img/projects/003.jpg" width="250"></a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <ul>
            <li>Dodáváme veškeré náhradní díly pro výčepní technologie.</li>
            <li>Dodáváme chemii pro mytí pivního skla, sanitaci atp. </li>
            <li>Jsme schopni navrhnout individuální řešení výčepního místa, doporučit umístění výčepního stojanu, chladiče, skladu sudů, myčky skla atd.</li>
            <li>Stavíte novou pergolu, zimní zahradu, nebo prostě „trucovnu“ a chcete mít k dispozici výčep na skvělé pivo ? Určitě nás kontaktujte.</li>
            <li>Rádi vám poradíme také s výběrem vhodného výčepu a příslušenství pro domácí čepování.</li>
            <li>Po dohodě se zákazníkem realizujeme tematické výčepy – hasiči, myslivci, sportovci a jakákoli jiná varianta dle vlastní fantazie.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {}
</script>
