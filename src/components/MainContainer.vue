<template>
  <div class="container mx-auto my-5 px-8 py-10 md:px-0">
    <div
      class="rounded-lg px-5 pt-2 pb-10 mb-16 border-l-8 border-desaturatedDarkCyan bg-white shadow-2xl"
    >
      <img
        class="-mt-12 pb-4"
        src="./../assets/images/photosnap.svg"
        alt=""
        srcset=""
      />
      <div class="text-sm mb-4">
        <span class="text-lg font-bold text-desaturatedDarkCyan">
          Photosnap
        </span>
        <button
          class="mr-2 ml-3 text-white font-bold uppercase bg-desaturatedDarkCyan px-2 py-2 rounded-full"
        >
          new!
        </button>
        <button
          class="text-white font-bold uppercase bg-black px-2 py-2 rounded-full"
        >
          featured
        </button>
        <p class="font-bold text-lg capitalize my-4">
          senior frontend developer
        </p>
        <span class="text-lg text-gray-600">
          1d ago . full time . USA only
        </span>
      </div>

      <hr class="bg-gray-800" />

      <div class="mt-6">
        <span
          class="bg-lightGrayishCyan p-2 rounded font-bold capitalize text-lg text-desaturatedDarkCyan mr-4"
        >
          frontend
        </span>
        <span
          class="bg-lightGrayishCyan p-2 rounded font-bold capitalize text-lg text-desaturatedDarkCyan mr-4"
        >
          senior
        </span>
        <span
          class="bg-lightGrayishCyan p-2 rounded font-bold uppercase text-lg text-desaturatedDarkCyan mr-4"
        >
          html
        </span>
        <span
          class="bg-lightGrayishCyan p-2 rounded font-bold capitalize text-lg text-desaturatedDarkCyan mr-4"
        >
          css
        </span>
        <span
          class="bg-lightGrayishCyan p-2 rounded font-bold capitalize text-lg text-desaturatedDarkCyan mr-4"
        >
          javascript
        </span>
      </div>
    </div>

    <div
      class="rounded-lg px-5 pt-2 pb-10 border-l-8 border-desaturatedDarkCyan bg-white shadow-2xl"
    >
      <img
        class="-mt-12 pb-4"
        src="./../assets/images/photosnap.svg"
        alt=""
        srcset=""
      />
      <div class="text-sm mb-4">
        <span class="text-lg font-bold text-desaturatedDarkCyan">
          Photosnap
        </span>
        <button
          class="mr-2 ml-3 text-white font-bold uppercase bg-desaturatedDarkCyan px-2 py-2 rounded-full"
        >
          new!
        </button>
        <button
          class="text-white font-bold uppercase bg-black px-2 py-2 rounded-full"
        >
          featured
        </button>
        <p class="font-bold text-lg capitalize my-4">
          senior frontend developer
        </p>
        <span class="text-lg text-gray-600">
          1d ago . full time . USA only
        </span>
      </div>

      <hr class="bg-gray-800" />

      <div class="mt-6">
        <span
          class="bg-lightGrayishCyan p-2 rounded font-bold capitalize text-lg text-desaturatedDarkCyan mr-4"
        >
          frontend
        </span>
        <span
          class="bg-lightGrayishCyan p-2 rounded font-bold capitalize text-lg text-desaturatedDarkCyan mr-4"
        >
          senior
        </span>
        <span
          class="bg-lightGrayishCyan p-2 rounded font-bold uppercase text-lg text-desaturatedDarkCyan mr-4"
        >
          html
        </span>
        <span
          class="bg-lightGrayishCyan p-2 rounded font-bold capitalize text-lg text-desaturatedDarkCyan mr-4"
        >
          css
        </span>
        <span
          class="bg-lightGrayishCyan p-2 rounded font-bold capitalize text-lg text-desaturatedDarkCyan mr-4"
        >
          javascript
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContainer",
  data() {
    return {
      cardData: [
        {
          img: "./../assets/images/photosnap.svg",
          title: "Photosnap",
          date: "1d ago",
          type: "Full Time",
          country: "USA only",
          tags: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>