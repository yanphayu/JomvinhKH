<template>
  <div class="scroll-section-wrapper">

    <section class="reveal-section" ref="section1">
      <div class="section-inner layout-left">
        <div class="image-block" :class="{ popped: s1Visible }">
          <div class="img-frame">
            <img src="https://plus.unsplash.com/premium_photo-1661963850090-cf5b2f556b4d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
              alt="Angkor Wat aerial" />
            <div class="img-caption">
              <span>Siem Reap, Cambodia</span>
            </div>
          </div>
        </div>

        <div class="text-block">
          <h2 class="text-headline">
            <span class="word-reveal" :class="{ popped: s1Visible }" style="transition-delay:0.1s">SIEM REAP</span>
            <span class="word-reveal accent-stroke" :class="{ popped: s1Visible }"
              style="transition-delay:0.18s">PROVINCE</span>
          </h2>
          <p class="text-body" :class="{ popped: s1Visible }" style="transition-delay:0.28s">
            Located in the northwest of Cambodia, Siem Reap Province is the country's premier tourism hub, home to the
            Angkor Archaeological Park — a UNESCO World Heritage Site and one of the world's most iconic ancient temple
            complexes.
          </p>
          <button class="explore-btn" :class="{ popped: s1Visible }" style="transition-delay:0.4s">
            <span>Explore Story</span>
          </button>
        </div>
      </div>
    </section>

    <section class="reveal-section" ref="section2">
      <div class="section-inner layout-left">
        <div class="text-block">
          <h2 class="text-headline">
            <span class="word-reveal" :class="{ popped: s2Visible }" style="transition-delay:0.1s">PHNOM PENH</span>
            <span class="word-reveal accent-stroke" :class="{ popped: s2Visible }"
              style="transition-delay:0.18s">CITY</span>
          </h2>
          <p class="text-body" :class="{ popped: s2Visible }" style="transition-delay:0.28s">
            At the confluence of three rivers that nourish the fertile agricultural heartland of Southeast Asia lies
            Phnom Penh, Cambodia's capital and the nation's economic and industrial hub — a bustling metropolis of nearly 2.6
            million residents, where shimmering skyscrapers tower above a city that only a few decades ago was largely hollowed out from
            years of violent conflict and neglect.
          </p>
          <button class="explore-btn" :class="{ popped: s2Visible }" style="transition-delay:0.4s">
            <span>Explore Story</span>
          </button>
        </div>

        <div class="image-block img-top" :class="{ popped: s2Visible }">
          <div class="img-frame">
            <img
              src="https://images.unsplash.com/photo-1722053688201-c9fab1fdc936?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBobm9tJTIwcGVuaHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Phnom Penh city" />
            <div class="img-caption">
              <span>Phnom Penh, Cambodia</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="reveal-section" ref="section3">
      <div class="section-inner layout-left">
        <div class="image-block" :class="{ popped: s3Visible }">
          <div class="img-frame">
            <img src="https://wheretoflow.com/wp-content/uploads/2023/03/koh-rong-9-768x1024.webp"
              alt="Koh Rong aerial" />
            <div class="img-caption">
              <span>Preah Sihanouk, Cambodia</span>
            </div>
          </div>
        </div>

        <div class="text-block">
          <h2 class="text-headline">
            <span class="word-reveal" :class="{ popped: s3Visible }" style="transition-delay:0.1s">Preah Sihanouk</span>
            <span class="word-reveal accent-stroke" :class="{ popped: s3Visible }"
              style="transition-delay:0.18s">Province</span>
          </h2>
          <p class="text-body" :class="{ popped: s3Visible }" style="transition-delay:0.34s">
            Koh Rong is a beautiful island located in Preah Sihanouk Province, Cambodia. It is famous for its white-sand
            beaches, clear blue water, and peaceful atmosphere, making it a popular destination for tourists.
          </p>
          <button class="explore-btn" :class="{ popped: s3Visible }" style="transition-delay:0.46s">
            <span>Explore Story</span>
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)
const s1Visible = ref(false)
const s2Visible = ref(false)
const s3Visible = ref(false)

let observer

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      if (entry.target === section1.value) s1Visible.value = true
      if (entry.target === section2.value) s2Visible.value = true
      if (entry.target === section3.value) s3Visible.value = true
    })
  }, { threshold: 0.15 })

  if (section1.value) observer.observe(section1.value)
  if (section2.value) observer.observe(section2.value)
  if (section3.value) observer.observe(section3.value)
})

onBeforeUnmount(() => { observer?.disconnect() })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.scroll-section-wrapper {
  background: #080808;
  color: #f5f0e8;
  font-family: 'Bebas Neue', sans-serif;
  overflow-x: hidden;
}

.popped {
  opacity: 1 !important;
  transform: none !important;
}

.reveal-section {
  padding: 8rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
}

.section-inner {
  display: grid;
  gap: 5rem;
  align-items: center;
}

.layout-left {
  grid-template-columns: 1fr 1fr;
}

.image-block {
  position: relative;
  opacity: 0;
  transform: translateX(-40px) scale(0.97);
  transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.img-frame {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/5;
  cursor: zoom-in;
}

.img-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.image-block.popped .img-frame img {
  transform: scale(1.04);
}

.img-frame:hover img {
  transform: scale(1.1) !important;
}

.img-caption {
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.7);
  background: rgba(8, 8, 8, 0.6);
  backdrop-filter: blur(8px);
  padding: 0.4rem 0.8rem;
}


.text-block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.text-headline {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 6vw, 6rem);
  line-height: 0.95;
  letter-spacing: 0.02em;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.word-reveal {
  display: block;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.accent-stroke {
  color: transparent;
  -webkit-text-stroke: 1.5px #d4a853;
  padding-left: 2.5rem;
}

.text-body {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(245, 240, 232, 0.65);
  letter-spacing: 0.05em;
  margin: 0;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.explore-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 2.25rem;
  border: 1px solid rgba(245, 240, 232, 0.25);
  background: transparent;
  color: #f5f0e8;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  width: fit-content;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.3s ease, transform 0.3s ease,
    border-color 0.2s, color 0.2s;
}

.explore-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #d4a853;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
  z-index: 0;
}

.explore-btn span {
  position: relative;
  z-index: 1;
}

.explore-btn:hover::before {
  transform: scaleX(1);
}

.explore-btn:hover {
  border-color: #d4a853;
  color: #080808;
}
@media (max-width: 900px) {
  .reveal-section {
    padding: 5rem 1.75rem;
  }

  .layout-left {
    grid-template-columns: 1fr;
  }

  .img-top {
    order: -1;
  }
  
  .accent-stroke {
    padding-left: 0rem; 
  }
}
</style>