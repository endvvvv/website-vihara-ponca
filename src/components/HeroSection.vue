<template>
  <section class="rounded-2xl bg-zinc-800/60 px-6 py-10 md:px-10 md:py-14">
    <h1 class="text-3xl font-bold md:text-4xl">Vihara Avalokitesvara</h1>
    <p class="mt-3 max-w-2xl text-zinc-300">
      Informasi kegiatan rutin, PMV, dan GABI. Temukan aktivitas terbaru di
      komunitas.
    </p>
    <div class="mt-6 flex gap-3">
      <router-link
        to="/pmv"
        class="rounded-xl bg-brand-500 px-4 py-2 text-white hover:bg-brand-600"
        >Lihat PMV</router-link
      >
      <router-link
        to="/gabi"
        class="rounded-xl bg-brand-500 px-4 py-2 text-white hover:bg-brand-600"
        >Lihat GABI</router-link
      >
    </div>
  </section>
</template>
