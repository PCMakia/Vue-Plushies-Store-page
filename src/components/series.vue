<script setup>
import doraemonImage from "@/assets/Doraemon-BG.png";
import jewelpetImage from "@/assets/Jewelpet-background.jpg";
import kingdomHeartsImage from "@/assets/Kingdom-Hearts-BG.png";
import fruitRoboImage from "@/assets/Fruit-Robo-BG.jpg";
</script>

<template>
     <div class="no1">
      <h1 class="fonta">Series we have</h1>
    </div>

    <!-- Section -->
    <div class="container px-4 px-lg-5 mt-5">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div class="col mb-5">
          <div class="card h-100">
            <router-link to="/Doraemon">
              <img class="card-img-top" :src="doraemonImage" alt="Doraemon" />
            </router-link>
          </div>
        </div>
        <div class="col mb-5">
          <div class="card h-100">
            <router-link to="/Jewelpet">
              <img class="card-img-top" :src="jewelpetImage" alt="Jewelpet" />
            </router-link>
          </div>
        </div>
        <div class="col mb-5">
          <div class="card h-100">
            <router-link to="/KingdomHeart">
              <img class="card-img-top" :src="kingdomHeartsImage" alt="Kingdom Hearts" />
            </router-link>
          </div>
        </div>
        <div class="col mb-5">
          <div class="card h-100">
            <router-link to="/FruitRobo">
              <img class="card-img-top" :src="fruitRoboImage" alt="Fruit Robo" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

