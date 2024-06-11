<template>
  <div class="home">
    <!-- Hero Image -->
    <div class="hero-image">
      <div class="hero-text">
        <h1>Jrosecow</h1>
        <h6 id="quote">"Everybody dies but not everybody lives"</h6>
      </div>
    </div>

    <main>
      <section class="of-the-week">
        <article class="video">
          <h2>Video of the week</h2>
          <iframe src="https://www.youtube.com/embed/JYqfVE-fykk?si=fKfrZ79FSrcIYQFh" allowfullscreen></iframe>
        </article>
        <article class="songs">
          <h2>Songs of the week</h2>
          <div>
            <iframe src="https://open.spotify.com/embed/track/7k0wVBW3cvV6Xmb87JikIf?utm_source=generator" width="100%"
              height="80" frameBorder="0" allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"></iframe>
            <br />
            <iframe src="https://open.spotify.com/embed/track/3baPniPXS0iEII8rDUJdYP?utm_source=generator" width="100%"
              height="80" frameBorder="0" allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"></iframe>
            <br />
            <iframe src="https://open.spotify.com/embed/track/1QPreu0BNOrUfEb8HTd2qG?utm_source=generator" width="100%"
              height="80" frameBorder="0" allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"></iframe>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
@import '@/sass/home.scss';
</style>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView'
}
</script>
