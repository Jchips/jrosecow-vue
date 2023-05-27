<template>
  <div :id="selectedDancer.id" class="dancer">
    <button @click="$emit('close', selectedDancer.id)" type="button" class="btn btn-outline-danger">Close</button>

    <!-- 1ST ROW -->
    <div class="row">
      <!-- Img carousel -->
      <div class="col col-md-4 col-12 img-container">
        <div :id="`${selectedDancer.id}-imgs`" class="carousel slide" data-bs-interval="false">

          <!-- Carousel indicators -->
          <div class="carousel-indicators">
            <div v-for="(imgs, index) in selectedDancer.imgs" :key="index">
              <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="index === 0 ? 'active' : ''" :aria-current="index === 0 ? 'true' : 'false'" :aria-label="`Slide ${index + 1}`"></button>
            </div>
          </div>

          <!-- Carousel inner (pics) -->
          <div class="carousel-inner">
            <div v-for="(imgs, index) in selectedDancer.imgs" :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
              <img :src="imgs" :alt="selectedDancer['danceName']" class="img-fluid" />
            </div>
          </div>

          <!-- Left and right controls  -->
          <button class="carousel-control-prev" type="button" :data-bs-target="`#${selectedDancer.id}-imgs`"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" :data-bs-target="`#${selectedDancer.id}-imgs`"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <!-- Dancer basic info -->
      <div class="col col-md-4 col-12 basic-info">
        <h2>{{ selectedDancer['danceName'] }}</h2>
        <p>{{ selectedDancer.name }}</p>
        <p>Age: {{ calculateAge }} | {{ selectedDancer.bday }}</p>
        <p v-if="selectedDancer.inquiries">Inquiries: <a :href="`mailto: ${selectedDancer.inquiries}`">{{ selectedDancer.inquiries }}</a></p>
        <section class="hometowns">
          <h5>Hometown</h5>
          <div v-for="city in selectedDancer.hometown" :key="city">
            <span>{{ city }}</span>
          </div>
        </section>
        <section class="styles">
          <h4>Styles:</h4>
          <ul>
            <div v-for="(style, index) in selectedDancer['danceStyles']" :key="index">
              <!-- IF the element is an array, then don't print it -->
              <li v-if="(typeof(selectedDancer['danceStyles'][index]) === 'object')"></li>

              <!-- IF the next element is an array, then don't add a comma -->
              <li v-else-if="(typeof(selectedDancer['danceStyles'][index+1]) === 'object')">{{ style }}</li>

              <!-- IF it's not the last style, add a comma -->
              <li v-else-if="index !== selectedDancer['danceStyles'].length - 1">{{ style }}, </li>

              <!-- IF the index is an array, list everything in array -->
              <div v-if="typeof(selectedDancer['danceStyles'][index]) === 'object'" class="umbrella-styles">
                <li>→</li>
                <div v-for="(innerStyle, innerIndex) in selectedDancer['danceStyles'][index]" :key="innerIndex">
          
                  <!-- IF it's not the last style OR it's not the last umbrella style, add a comma -->
                  <li v-if="index !== selectedDancer['danceStyles'].length - 1
                  || innerIndex !== selectedDancer['danceStyles'][index].length - 1
                  ">{{ innerStyle }}, </li>

                  <!-- IF it's the last style AND and the last style in the umbrella style -->
                  <li v-else-if="index === selectedDancer['danceStyles'].length - 1
                  && innerIndex === selectedDancer['danceStyles'][index].length - 1
                  ">{{ innerStyle }}.</li>
                </div>
              </div>

              <!-- IF there's only one style, don't add a period or comma -->
              <li v-else-if="selectedDancer['danceStyles'].length === 1">{{ style }}</li>

              <!-- IF it's the last style, add a period. -->
              <li v-else-if="index === selectedDancer['danceStyles'].length - 1">{{ style }}.</li>
            </div>
          </ul>
        </section>
      </div>

      <!-- Social media and studios -->
      <div class="col col-md-4 col-12 socials-col">
        <section class="socials-card">
          <h4>Socials</h4>
          <div class="social">
            <span>Instagram: </span><a :href="`https:\/\/www.instagram.com\/${selectedDancer.socials.instagram}`" target="_blank">@{{ selectedDancer.socials.instagram }}</a>
          </div>

          <!-- IF dancer has Tiktok, then show link -->
          <div v-if="selectedDancer.socials.tiktok !== ''">
            <div class="social">
              <span>TikTok: </span><a :href="`https://www.tiktok.com/@${selectedDancer.socials.tiktok}`" target="_blank">@{{ selectedDancer.socials.tiktok }}</a>
            </div>
          </div>

          <!-- IF dancer has YouTube, then show link -->
          <div v-if="selectedDancer.socials.youtube !== ''">
            <div class="social">
              <span>YouTube: </span>
              <div v-for="accts in selectedDancer.socials.youtube" :key="accts">
                <a :href="`https://www.youtube.com/@${accts}`" target="_blank">@{{ accts }}</a>
              </div>
            </div>               
          </div>
          <div v-if="selectedDancer.totalFollowing != ''" class="total-following">
            <span>Total following: </span>
            <p>{{ selectedDancer.totalFollowing }}</p>
          </div>
        </section>
        <section id="studios" class="socials-card">
          <h4>Studios</h4>
          <ul>
            <div v-for="(studio, index) in selectedDancer.studios" :key="index">
              <li v-if="index !== selectedDancer.studios.length - 1">{{ studio }}, </li>
              <li v-else-if="selectedDancer.studios.length === 1">{{ studio }}</li>
              <li v-else-if="index === selectedDancer.studios.length - 1">{{ studio }}.</li>
            </div>
          </ul>
        </section>
      </div>
    </div>

    <!-- 2ND ROW -->
    <h3>Résumé</h3>
    <div id="resume" class="row">

      <!-- Crews and associations -->
      <div class="col col-xl-3 col-lg-6">
        <section class="associations-card">
          <h4>Crews/Associations</h4>
          <ul>
            <li v-for="(associations, index) in selectedDancer['crewsAssociations']" :key="index">
              <!-- If not at the end of the list, add a comma at the end -->
              <span v-if="index !== selectedDancer['crewsAssociations'].length - 1">{{ associations }}, </span>
              <!-- If there's only one item in the list, then don't add a period at the end (cus that's harsh :))-->
              <span v-else-if="selectedDancer['crewsAssociations'].length === 1">{{ associations }}</span>
              <!-- If at the end of the list (and there's more than one item), add a period at the end -->
              <span v-else-if="index === selectedDancer['crewsAssociations'].length - 1">{{ associations }}.</span>
            </li>
          </ul>
          <h4>Agencies</h4>
          <ul>
            <li v-for="(agency, index) in selectedDancer['agencies']" :key="index">
              <span v-if="index !== selectedDancer['agencies'].length - 1">{{ agency }}, </span>
              <span v-else-if="selectedDancer['agencies'].length === 1">{{ agency }}</span>
              <span v-else-if="index === selectedDancer['agencies'].length - 1">{{ agency }}.</span>
            </li>
          </ul>
        </section>
      </div>

      <!-- TV appearances -->
      <div class="col col-xl-3 col-lg-6">
        <section class="tv-card">
          <h4>TV Appearances</h4>
          <ul>
            <li v-for="(tv, index) in selectedDancer['tvAppearances']" :key="index">
              <span v-if="index !== selectedDancer['tvAppearances'].length - 1">{{ tv }}, </span>
              <span v-else-if="selectedDancer['tvAppearances'].length === 1">{{ tv }}</span>
              <span v-else-if="index === selectedDancer['tvAppearances'].length - 1">{{ tv }}.</span>
            </li>
          </ul>
        </section>
      </div>
      <div class="col col-xl-3 col-lg-6">
        <section class="celebrities-card">
          <h4>Celebrities</h4>
          <ul>
            <li v-for="(celebrity, index) in selectedDancer['celebrities']" :key="index">
              <span v-if="index !== selectedDancer['celebrities'].length - 1">{{ celebrity }}, </span>
              <span v-else-if="selectedDancer['celebrities'].length === 1">{{ celebrity }}</span>
              <span v-else-if="index === selectedDancer['celebrities'].length - 1">{{ celebrity }}.</span>
            </li>
          </ul>
        </section>
      </div>
      <div class="col col-xl-3 col-lg-6">
        <section class="careers-card">
          <h4>Careers</h4>
          <ul>
            <li v-for="(career, index) in selectedDancer['careers']" :key="index">
              <span v-if="index !== selectedDancer['careers'].length - 1">{{ career }}, </span>
              <span v-else-if="selectedDancer['careers'].length === 1">{{ career }}</span>
              <span v-else-if="index === selectedDancer['careers'].length - 1">{{ career }}.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>

    <!-- 3RD ROW -->
    <h3>Other life</h3>
    <div id="other-life" class="row">
      <div class="col">
        <section class="family-card">
          <h4>Family</h4>
          <p>{{ selectedDancer.family }}</p>
        </section>
      </div>
      <div class="col">
        <section class="school-card">
          <h4>School</h4>
          <p>{{ selectedDancer.school }}</p>
        </section>
      </div>
      <div class="col">
        <section class="hobbies-card">
          <h4>Hobbies/Other</h4>
          <p>{{ selectedDancer.otherHobbies }}</p>
        </section>
      </div>
    </div>

    <div v-if="selectedDancer.bestYoutubeVids !== ''" class="best-videos-row">
      <h3>Best Videos</h3>
      <div class="row">
        <div class="col best-videos">
          <div v-if="selectedDancer.bestYoutubeVids.length > 1" :id="`youtube-${selectedDancer.id}`" class="carousel slide" data-bs-interval="false">
              <!-- Carousel inner (videos) -->
              <div class="carousel-inner">
                <div v-for="(vids, index) in selectedDancer.bestYoutubeVids" :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
                  <iframe :src="vids" frameborder="0" alt="No internet connection" allowfullscreen></iframe>
                </div>
              </div>
              <a class="carousel-control-prev" :data-bs-target="`#youtube-${selectedDancer.id}`" role="button" data-bs-slide="prev">
                <font-awesome-icon icon="fa-chevron-left"/>
                <span class="visually-hidden">Previous</span>
              </a>
              <a class="carousel-control-next" :data-bs-target="`#youtube-${selectedDancer.id}`" role="button" data-bs-slide="next">
                <font-awesome-icon icon="fa-chevron-right" aria-hidden="true"/>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
            <div v-else>
              <iframe :src="selectedDancer.bestYoutubeVids[0]" frameborder="0" alt="No internet connection" allowfullscreen></iframe>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    selectedDancer: {
      type: Object
    }
  },
  // calculateAge code from: https://smokeyfro.com/tutorials/calculate-your-age-with-vue
  computed:{
    calculateAge: function() {
      let currentDate = new Date();
      let birthDate = new Date(this.selectedDancer.age);
      let difference = currentDate - birthDate;
      let age = Math.floor(difference/31557600000);
      return age;
    },
  }
}
</script>