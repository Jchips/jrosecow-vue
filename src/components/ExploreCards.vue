<template>
  <div class="card" style="max-width: 22rem">
    <a :href="card.imgs[0]" :data-lightbox="card.lightbox_cat">
      <img :src="card.imgs[0]" class="card-img-top" :alt="card.lightbox_cat">
    </a>
    <a v-for="img in card.imgs.slice(1)" :key="img" :href="img" :data-lightbox="card.lightbox_cat"></a>
    <div class="card-body">
      <h5 class="card-title">{{ card.card_title }}</h5>
      <p class="card-text">{{ card.card_text }}</p>
      <p class="card-text"><small class="text-muted">Built with {{ card.project_lang }}</small></p>
      <a :href="card.project_link" target="_blank" class="btn btn-primary">Go to site</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  }
}
</script>