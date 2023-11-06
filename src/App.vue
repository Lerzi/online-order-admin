<script setup>
import colors from '@/theme/color.js'
const themeOverrides = {
  common: {
    "primaryColor": colors['color-primary-500'],
    "primaryColorHover": colors['color-primary-400'],
    "primaryColorPressed": colors['color-primary-600'],
    "primaryColorSuppl": colors['color-primary-400'],
    "infoColor": colors['color-info-500'],
    "infoColorHover": colors['color-info-400'],
    "infoColorPressed": colors['color-info-600'],
    "infoColorSuppl": colors['color-info-400'],
    "successColor": colors['color-success-500'],
    "successColorHover": colors['color-success-400'],
    "successColorPressed": colors['color-success-600'],
    "successColorSuppl": colors['color-success-400'],
    "warningColor": colors['color-warning-500'],
    "warningColorHover": colors['color-warning-400'],
    "warningColorPressed": colors['color-warning-600'],
    "warningColorSuppl": colors['color-warning-400'],
    "errorColor": colors['color-danger-500'],
    "errorColorHover": colors['color-danger-400'],
    "errorColorPressed": colors['color-danger-600'],
    "errorColorSuppl": colors['color-danger-400'],
    "borderRadius": "8px",
    "borderRadiusSmall": "4px",
  },
}
</script>

<template>
  <n-config-provider h-full :theme-overrides="themeOverrides">
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </n-config-provider>
</template>

<style scoped></style>
