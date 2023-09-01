<template>
  <div class="card" style="max-width: 22rem">
    <a :href="card.img_path" :data-lightbox="card.lightbox_cat">
      <img :src="card.img_path" class="card-img-top" :alt="card.lightbox_cat">
    </a>
    <a v-if="card.img2_path" :href="card.img2_path" :data-lightbox="card.lightbox_cat"></a>
    <a v-if="card.img3_path" :href="card.img3_path" :data-lightbox="card.lightbox_cat"></a>
    <div class="card-body">
      <h5 class="card-title">{{ card.card_title }}</h5>
      <p class="card-text">{{ card.card_text }}</p>
      <p class="card-text"><small class="text-muted">Built with {{ card.project_lang }}</small></p>
      <a :href="card.project_link" class="btn btn-primary">Go to site</a>
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