<template>
  <section class="hero-section">
       <div class="video-wrapper">
      <video
        ref="videoRef"
        class="hero-video"
        autoplay
        muted
        loop
        playsinline
  
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

    
      <div class="overlay" />
      <div class="grain" />
    </div>

    <div class="hero-content">
    
      <h1 class="hero-headline">
        <span class="headline-line" :class="{ visible: mounted }" style="transition-delay: 0.15s">
          Welcome to
        </span>
        <span class="headline-line" :class="{ visible: mounted }" style="transition-delay: 0.45s">
          JOMVINH KH
        </span>
      </h1>
      <p>We show you all the amazing places to visit in CAMBODIA.</p>
    </div>

    <button class="btn">View All</button>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const videoRef = ref(null)
const mounted = ref(false)

onMounted(() => {
  setTimeout(() => { mounted.value = true }, 100)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');


.hero-section {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  background: #080808;
  font-family: 'DM Sans', sans-serif;
  color: #f5f0e8;
}


.video-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
}
.overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, #080808 0%, transparent 40%),
    linear-gradient(to right, #080808 0%, transparent 30%),
    linear-gradient(160deg, rgba(8,8,8,0.5) 0%, transparent 60%);
}
.grain {
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.035;
  pointer-events: none;
  animation: grain-move 0.5s steps(2) infinite;
}
@keyframes grain-move {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(-1%, 1%); }
  50%  { transform: translate(1%, -1%); }
  75%  { transform: translate(-1%, -1%); }
  100% { transform: translate(1%, 1%); }
}


.hero-content {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3.5rem 4rem;
  max-width: 900px;
}

.hero-headline {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(4.5rem, 12vw, 11rem);
  line-height: 0.9;
  letter-spacing: 0.02em;
  margin: 0 0 2.5rem;
  display: flex;
  flex-direction: column;
}
.headline-line {
  display: block;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.headline-line.visible { opacity: 1; transform: translateY(0); }


.btn {
  position: absolute;
  bottom: 3rem;
  left: 3.5rem;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 2rem;
  background: transparent;
  border: 1px solid rgba(245, 240, 232, 0.3);
  color: #f5f0e8;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.25s, color 0.25s;
}
.btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #d4a853;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  z-index: -1;
}
.btn:hover::before { transform: scaleX(1); }
.btn:hover {
  border-color: #d4a853;
  color: #080808;
}

@media (max-width: 768px) {
  .hero-content { padding: 0 1.75rem 4rem; }
  .btn { left: 1.75rem; bottom: 2rem; }
}
</style>