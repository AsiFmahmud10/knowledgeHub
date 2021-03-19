<template>
  <div class="home">
    <div v-game>vcxvxcv</div>

    {{ game }} {{ hmm }}
    <div class="fade">
      <transition
        name="fade"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <div ref="fad" v-if="game">im coming Home {{ fade }}</div>
      </transition>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ut tempora
      aut error maiores repudiandae neque soluta rem consequatur alias incidunt
      sint minima ex ipsam dolor, corporis quae in consectetur?
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, provide, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {

  name: "Home",
  components: {},
  setup(props) {
    const game = ref(false);
    const hmm = ref(1);

    const cng = () => {
      game.value = true;
    };

    const to = () => {
      const fade = document.querySelector(".fade");
      const observer = new IntersectionObserver((data) => {
        console.log(data[0]);
        if (data[0].isIntersecting) {
          game.value = true;
        } else {
          game.value = false;
        }
      });
      observer.observe(fade);
    };

    const beforeEnter = (el) => {
      console.log("before-enter");
      el.style.transform = "translateY(-100px)";
      el.style.opacity = "0";
    };
    const enter = (el, done) => {
      console.log("i am in", el);
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(el, {
        y: 0,
        duration: 2,
        ease: "bounce.out",
        opacity: 1,
        onComplete: done,
      });
    };
    const afterEnter = (el) => {
      el.style.color = "orangered";
    };

    onMounted(to);

    return { game, cng, hmm, beforeEnter, afterEnter, enter };

  },
};
</script>

<style scoped>

.fade {
  margin-top: 900px;
  margin-bottom: 400px;
  position: absolute;
}
</style>
