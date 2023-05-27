<template>
  <div class="dance-wiki">
    <h1>Gen Z Dancer Wiki</h1>
    <div class="accordion" id="glossary">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <span>Glossary</span>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#glossary">
          <div class="accordion-body">
            <h4>Total following</h4>
            <p>All social media followings including Instagram, TikTok, YouTube, Twitter & Facebook added up and rounded (floor round).</p>
            <h4>Open style</h4>
            <p>Out of respect for the origins of hip-hop, I'm recognizing that the choreography 
              style that many dance studios do that some call hip-hop, isn't really exactly hip-hop, 
              but more of a modern style that mixes parts of other styles. Another term we used to
              call this was 'Urban dance', but that name is not being used anymore because the use
              of the word 'urban' in this context is problematic. The term open style became the 
              title of this style in the dance community.</p>
            <p>A definition of open style dance from an online dance class called Ucanji is, 
              "Open-Style is a fusion dance form that promotes self-expression. The dance is dynamic 
              and combines several dance genres. The open category is a blend of jazz, lyrical, 
              contemporary, and hip hop moves to create funky intricate moves to move to the beat 
              of the music."</p>
              <p>Below are links to some helpful resources to learn more:</p>
              <a href="https://www.steezy.co/posts/the-story-behind-urban-dance-and-why-were-leaving-the-term-behind" class="btn btn-danger" target="_blank">Steezy</a>
              <a href="https://www.ucanji.com/dance-style/open-style-online-classes#:~:text=Open%2DStyle%20is%20a%20fusion,the%20beat%20of%20the%20music." class="btn btn-danger" target="_blank">Ucanji</a> 
            <h4>Abbreviations</h4>
            <ul>
              <li v-for="abbreviation in abbreviations" :key="abbreviation">
                <span>{{ abbreviation.abbr }} - </span>{{ abbreviation.expl }}
              </li>
            </ul>
            <p>TV networks: ABC (American), CBS (American), NBC (American), FOX (American), MTV (American), Telemundo (American)</p>
          </div>
        </div>
      </div>
    </div>

    <form>
      <fieldset>
        <label for="sortOptions-dropdown">Sort dancers by:
          <select v-model="selected" @change="sort">
            <option v-for="option in sortOptions" :key="option" :value="option.value">{{ option.text }}</option>
          </select>   
        </label>
      </fieldset>
    </form>

    <!-- Shows the dancer component if a user clicks on a dancer's card -->
    <div id="dancer-page" class="dancer-container">
      <dancer-page v-if="showComp" @close="handleHideComp" :selectedDancer="selectedDancer"></dancer-page>
    </div>
    <section class="all-dancers">
      <div v-for="dancer in myJson" :key="dancer" class="dancer-img">
        <div :id="`${dancer.id}-card`" class="card">
          <img class="card-img-top" :src="dancer.imgs[0]" :alt="dancer['danceName']" @click="handleShowComp(dancer)">
          <div class="card-body">
            <h5 class="card-title">{{ dancer['danceName'] }}</h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import '@/sass/dance-style.scss';
@import '@/sass/dancer-page.scss';
</style>

<script>
import DancerPage from '@/components/DancerPage.vue';
import dancerJson from '@/json/GenZDanceWiki.json';
import sortOptions from '@/json/SortOptions.json';

export default {
  name: "GenZDanceWiki",
  data() {
    return {
      myJson: dancerJson,
      sortOptions: sortOptions,
      selected: '1',
      showComp: false,
      selectedDancer: null,
      abbreviations: [
        {'abbr': 'ABDC', 'expl': 'America\'s Best Dance Crew (American dance crew competition TV series)'},
        {'abbr': 'AGT', 'expl': 'America\'s Got Talent (American talent competition TV series)'},
        {'abbr': 'AMA', expl: 'American Music Awards (American music awards show)'},
        {'abbr': 'BBMA', expl: 'Billboard Music Awards (American music awards show)'},
        {'abbr': 'BMI', expl: 'Broadcast Music, Inc (Honors songwriters, composers, and music publishers in various genres)'},
        {'abbr': 'CDF', expl: 'Chapkis Dance Family (Dance studio and dance crew located in Suisan City, CA)'},
        {'abbr': 'CMA', expl: 'Country Music Awards (American country music awards show)'},
        {'abbr': 'CTG', expl: 'Clear Talent Group (Talent agency in Los Angeles, CA)'},
        {'abbr': 'DWTS', expl: 'Dancing With the Stars (American ballroom dance competition with celebrities)'},
        {'abbr': 'GMA', expl: 'Good Morning America (American TV news show)'},
        {'abbr': 'HS', expl: 'High school (Secondary school in America)'},
        {'abbr': 'HSMTMTS', expl: 'High School Musical the Musical the Series (American drama TV show)'},
        {'abbr': 'JR Agency', expl: 'JamRepublicTheAgency (Talent Agency in America)'},
        {'abbr': 'KCA', expl: 'Kids\' Choice Awards (American award show for kids)'},
        {'abbr': 'LSB', expl: 'Lip Sync Battle (American Lip Sync Battle TV series on Paramount & Nickelodeon)'},
        {'abbr': 'MDC', expl: 'Millennium Dance Complex (Dance studio located in Los Angeles and some other cities)'},
        {'abbr': 'Mgmt', expl: 'Management'},
        {'abbr': 'MSA', expl: 'McDonald Selznick Associates (Talent agency located in Los Angeles, CA)'},
        {'abbr': 'RDMA', expl: 'Radio Disney Music Awards [also called ARDYs] (American award show for Disney)'},
        {'abbr': 'SNL', expl: 'Saturday Night Live (American Comedy TV Series)'},
        {'abbr': 'SYTYCD', expl: 'So You Think You Can Dance (American dance competition TV series)'},
        {'abbr': 'TCA', expl: 'Teens Choice Awards (American award show for teens)'},
        {'abbr': 'VMA', expl: 'Video Music Awards (American MTV awards show)'},
        {'abbr': 'WOD', expl: 'World of Dance (Touring dance competition and American Dance Competition TV Series)'},
        {'abbr': '🎬', expl: '[Follows] a movie'}
      ]
    }
  },
  components: {
    DancerPage
  },
  // watch: {
  //   selected() {
  //     this.sort();
  //   }
  // },
  methods: {
    handleShowComp(dancer) {
      this.showComp = true;
      this.selectedDancer = dancer;
      this.scrollToTop();
    },
    handleHideComp(id) {
      this.showComp = false;
      this.scrollMeTo(id + '-card');
    },
    scrollToTop() {
      document.getElementById('dancer-page').scrollIntoView();
    },
    scrollMeTo(id) {
      let modalSpace = document.getElementById('dancer-page').offsetHeight;
      let dancerCard = document.getElementById(id);
      let difference = dancerCard.offsetTop - modalSpace;
      window.scrollTo(0, difference);
    },
    sort() {
      if (this.selected === '1') {
        this.myJson = this.sortByFirstName(this.myJson);
      } else if (this.selected === '2') {
        this.myJson = this.sortByDanceName(this.myJson);
      } else if (this.selected === "3") {
        this.myJson = this.sortByLastName(this.myJson);
      } else if (this.selected === "4") {
        this.myJson = this.sortByYoungestAge(this.myJson);
      } else if (this.selected === "5") {
        this.myJson = this.sortByOldestAge(this.myJson);
      } else if (this.selected === "6") {
        this.myJson = this.sortByBday(this.myJson);
      }
    },
    sortByFirstName(data) {
      data.sort((a,b) => {
        if(a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
      return data;
    },
    sortByDanceName(data) {
      data.sort((a,b) => {
        if(a.danceName.toLowerCase() > b.danceName.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
      return data;
    },
    sortByLastName(data) {
      data.sort((a, b) => {
        let fullName1 = a.name;
        let fullName2 = b.name;
        let array1 = fullName1.split(" ");
        let array2 = fullName2.split(" ");

        // Special last name cases
        if(fullName1 === "Gabriel De Guzman" || fullName1 === "Kenneth Paul San Jose") {
          array1.pop();
        }
        if (fullName2 === "Gabriel De Guzman" || fullName2 === "Kenneth Paul San Jose"){
          array2.pop();
        }
        if (array1[array1.length - 1] === "Jr" || array1[array1.length - 1] === "II") {
          array1.pop();
        }
        if (array2[array2.length - 1] === "Jr" || array2[array2.length - 1] === "II") {
          array2.pop();
        }
        
        if (array1[array1.length - 1] > array2[array2.length - 1]) {
          return 1;
        } else {
          return -1;
        }
      });
      return data;
    },
    sortByYoungestAge(data) {
      data.sort((a, b) => {
        const date1 = new Date(a.age)
        const date2 = new Date(b.age)
        
        return date2 - date1;
      });
      return data;
    },
    sortByOldestAge(data) {
      data.sort((a, b) => {
        const date1 = new Date(a.age)
        const date2 = new Date(b.age)
        
        return date1 - date2;
      });
      return data;
    },
    sortByBday(data) {
      data.sort((a, b) => {
        let month1 = new Date(a.bday.substring(0, a.bday.length - 4) + "2000");
        let month2 = new Date(b.bday.substring(0, b.bday.length - 4) + "2000");
        return month1 - month2;
      });
      return data;
    }
  }
}
</script>