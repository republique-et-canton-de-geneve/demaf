<template>
  <v-app>
    <v-app-bar color="primary" elevation="0">
      <template #prepend>
        <img src="/logo.svg" height="34" width="34" alt="DEMAF" class="ml-2 mr-1" style="border-radius:6px"/>
      </template>
      <v-app-bar-title>
        <router-link to="/" class="text-white text-decoration-none font-weight-bold">
          DEMAF
        </router-link>
        <span class="text-caption ml-2 opacity-70">Domain Event Message Async Flow</span>
      </v-app-bar-title>
      <template v-if="isMock" #append>
        <v-chip size="small" color="warning" variant="tonal" class="mr-4">
          <v-icon start icon="mdi-circle" size="x-small"/>
          MSW actif
        </v-chip>
      </template>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
const isMock = import.meta.env.VITE_MOCK === 'true'
</script>
