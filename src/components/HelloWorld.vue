<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="900">
      <v-img class="mb-4" height="70" src="@/assets/logo.png" />
      <span class="d-flex justify-center text-h4 text-bold">Sistem Terpadu Arthaya</span>

      <div class="d-flex justify-center align-center">
        <v-icon :icon="theme.global.current.value.dark
            ? 'mdi-weather-sunny'
            : 'mdi-weather-night'
          " @click="toggleTheme">
        </v-icon>
      </div>

      <div class="py-4" />
      <v-row>
        <v-col cols="4">
          <v-card append-icon="mdi-open-in-new" class="py-4" color="surface-variant" href="https://bankarthaya.com/wp-admin"
            prepend-icon="mdi-wordpress" rel="noopener noreferrer" rounded="lg"
            subtitle="Masuk Untuk melakukan konfigurasi website utama" target="_blank" title="Website Utama"
            variant="text">
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card append-icon="mdi-open-in-new" class="py-4" color="surface-variant" href="https://timers.bankarthaya.com/"
            prepend-icon="mdi-laravel" rel="noopener noreferrer" rounded="lg"
            subtitle="Dashboard admin Timers" target="_blank" title="Website Timers (Cepat Catat)"
            variant="text">
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card append-icon="mdi-open-in-new" class="py-4" color="surface-variant" href="https://kma.bankarthaya.com/"
            prepend-icon="mdi-laravel" rel="noopener noreferrer" rounded="lg"
            subtitle="Dashboard admin KMA" target="_blank" title="Website KMA"
            variant="text">
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>
        
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();
const themeIcon = ref("mdi-theme-light-dark");

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  themeIcon = ref(
    theme.global.current.value.dark
      ? "mdi-theme-light-dark"
      : "mdi-theme-dark-light"
  );
}
</script>
