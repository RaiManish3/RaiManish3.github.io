---
title:  Collections
date:   2021-06-26 19:43:44 +0530
categories: []
tags: []
description: List of outstanding art
---

<style>
.collage_table {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.collage_row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.movie-item {
  position: relative;
  transition: transform 0.3s ease;
  overflow: hidden;
}

.movie-item:hover {
  transform: translateY(-5px);
}

.movie-item img {
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.movie-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 8px;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.movie-item:hover .movie-caption {
  transform: translateY(0);
}

.section-title {
  text-align: center;
  font-size: 2.5em;
  margin: 40px 0;
  color: #333;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: #333;
  margin: 10px auto;
  border-radius: 2px;
}

.image-large {
  width: 100%;
  max-width: 600px;
}

.image-medium {
  width: 100%;
  max-width: 400px;
}

.image-small {
  width: 100%;
  max-width: 250px;
}
</style>

<h2 class="section-title">Movies</h2>
<div class="collage_table">
  <div class="collage_row">
    <div class="movie-item">
      <img src="/assets/img/icons/eternal_sunshine_of_spotless_mind_icon.jpg" alt="Movie poster for Eternal Sunshine of the Spotless Mind" class="image-large">
      <div class="movie-caption">Eternal Sunshine of the Spotless Mind</div>
    </div>
  </div>
  
  <div class="collage_row">
    <div class="movie-item">
      <img src="/assets/img/icons/shawshank_redemption_icon.jpg" alt="Movie poster for The Shawshank Redemption" class="image-small">
      <div class="movie-caption">The Shawshank Redemption</div>
    </div>
    <div class="movie-item">
      <img src="/assets/img/icons/the_perks_of_being_a_wallflower_icon.jpg" alt="Movie poster for The Perks of Being a Wallflower" class="image-small">
      <div class="movie-caption">The Perks of Being a Wallflower</div>
    </div>
    <div class="movie-item">
      <img src="/assets/img/icons/interstellar_icon.jpg" alt="Movie poster for Interstellar" class="image-small">
      <div class="movie-caption">Interstellar</div>
    </div>
  </div>
  
  <div class="collage_row">
    <div class="movie-item">
      <img src="/assets/img/icons/batman_trilogy_icon.jpg" alt="Movie poster for The Dark Knight Trilogy" class="image-medium">
      <div class="movie-caption">The Dark Knight Trilogy</div>
    </div>
    <div class="movie-item">
      <img src="/assets/img/icons/lord_of_the_rings_icon.jpg" alt="Movie poster for The Lord of the Rings" class="image-medium">
      <div class="movie-caption">The Lord of the Rings</div>
    </div>
  </div>
  
  <div class="collage_row">
    <div class="movie-item">
      <img src="/assets/img/icons/dead_poets_society_icon.jpg" alt="Movie poster for Dead Poets Society" class="image-small">
      <div class="movie-caption">Dead Poets Society</div>
    </div>
    <div class="movie-item">
      <img src="/assets/img/icons/a_silent_voice_icon.jpg" alt="Movie poster for A Silent Voice" class="image-small">
      <div class="movie-caption">A Silent Voice</div>
    </div>
    <div class="movie-item">
      <img src="/assets/img/icons/the_matrix_icon.jpg" alt="Movie poster for The Matrix" class="image-small">
      <div class="movie-caption">The Matrix</div>
    </div>
  </div>
  
  <div class="collage_row">
    <div class="movie-item">
      <img src="/assets/img/icons/inception_icon.jpg" alt="Movie poster for Inception" class="image-large">
      <div class="movie-caption">Inception</div>
    </div>
  </div>
</div>

<h2 class="section-title">Anime</h2>
<div class="collage_table">
  <div class="collage_row">
    <div class="movie-item">
      <img src="/assets/img/icons/death_note_icon.jpg" alt="Anime poster for Death Note" class="image-medium">
      <div class="movie-caption">Death Note</div>
    </div>
    <div class="movie-item">
      <img src="/assets/img/icons/fullmetal_alchemist_icon.jpg" alt="Anime poster for Fullmetal Alchemist" class="image-medium">
      <div class="movie-caption">Fullmetal Alchemist</div>
    </div>
  </div>
</div>