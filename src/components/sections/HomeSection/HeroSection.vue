<template>
  <section class="hero-section">
    <div class="video-wrapper">
      <video ref="videoRef" class="hero-video" autoplay muted loop playsinline>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div class="overlay" />
      <div class="grain" />
    </div>

    <div class="hero-content">
      <h1 class="hero-headline">
        <span class="headline-line welcome-line" :class="{ visible: mounted }" style="transition-delay: 0.2s">
          Welcome to
        </span>
        <div class="typewriter-container">
          <span class="headline-row">
            <span class="bold-line">JOMVINH</span>
            <span class="stroke-line">KH</span>
          </span>
        </div>
      </h1>

      <div class="hero-divider" :class="{ visible: mounted }" style="transition-delay: 0.75s"></div>

      <p class="hero-sub" :class="{ visible: mounted }" style="transition-delay: 0.82s">
        We show you all the amazing places to visit in Cambodia.
      </p>
    </div>

    <button class="btn" :class="{ visible: mounted }" style="transition-delay: 1s">
      <span>View All</span>
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const videoRef = ref(null)
const mounted = ref(false)

onMounted(() => {
  setTimeout(() => { mounted.value = true }, 100)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.hero-section {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  background: #080808;
  font-family: 'Bebas Neue', sans-serif; /* Global section font */
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
  font-size: clamp(60px, 12vw, 200px);
  line-height: 0.9;
  letter-spacing: 0.02em;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
}

.headline-line {
  display: block;
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.headline-line.visible {
  opacity: 1;
  transform: none;
}

/* Updated "Welcome to" font specs */
.welcome-line {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
  font-weight: 400;
  color: rgba(245, 240, 232, 0.75);
  letter-spacing: 0.08em;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
}

.typewriter-container {
  display: inline-block;
  overflow: hidden; 
  white-space: nowrap; 
  border-right: 4px solid #d4a853; 
  width: 0;
  max-width: max-content;
  animation: 
    typing 5s steps(11, end) infinite,
    blink 0.75s step-end infinite;
}

.headline-row {
  display: inline-flex;
  align-items: baseline;
  gap: 0.18em;
}

@keyframes typing {
  0% { width: 0; }
  40% { width: 100%; }   
  60% { width: 100%; }  
  90% { width: 0; }     
  100% { width: 0; }
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: #d4a853; }
}

.bold-line {
  color: #f5f0e8;
}

.stroke-line {
  color: transparent;
  -webkit-text-stroke: 2px #d4a853;
}

.hero-divider {
  width: 48px;
  height: 1px;
  background: #d4a853;
  margin-bottom: 1.25rem;
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.hero-divider.visible {
  opacity: 1;
  transform: scaleX(1);
}

/* Updated subtext font alignment */
.hero-sub {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 400;
  color: rgba(245, 240, 232, 0.6);
  letter-spacing: 0.08em;
  line-height: 1.4;
  margin: 0;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.hero-sub.visible {
  opacity: 1;
  transform: none;
}

/* Updated button typography definitions */
.btn {
  position: absolute;
  bottom: 3rem;
  left: 3.5rem;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 2.2rem;
  background: transparent;
  border: 1px solid rgba(245, 240, 232, 0.3);
  color: #f5f0e8;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s ease,
              border-color 0.25s, color 0.25s;
}
.btn.visible {
  opacity: 1;
  transform: none;
}
.btn span {
  position: relative;
  z-index: 1;
}
.btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #d4a853;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  z-index: 0;
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