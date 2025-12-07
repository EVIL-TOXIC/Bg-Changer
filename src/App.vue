<script setup>
import { ref } from 'vue';

const customColor = ref('#667eea');

const changeBackgroundColor = (color) => {
  document.body.style.transition = 'background 0.8s ease';
  document.body.style.background = color;
};

const changeBackgroundGradient = (gradient) => {
  document.body.style.transition = 'background 0.8s ease';
  document.body.style.background = gradient;
};

const applyCustomColor = () => {
  changeBackgroundColor(customColor.value);
};

const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 60 + Math.floor(Math.random() * 30);
  const lightness = 45 + Math.floor(Math.random() * 20);
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  changeBackgroundColor(color);
};

// Curated color palette
const colors = [
  { name: 'Ocean Blue', value: 'hsl(210, 80%, 55%)' },
  { name: 'Sunset Orange', value: 'hsl(25, 85%, 60%)' },
  { name: 'Forest Green', value: 'hsl(140, 60%, 45%)' },
  { name: 'Royal Purple', value: 'hsl(270, 65%, 55%)' },
  { name: 'Rose Pink', value: 'hsl(340, 75%, 65%)' },
  { name: 'Golden Yellow', value: 'hsl(45, 90%, 60%)' },
  { name: 'Crimson Red', value: 'hsl(355, 75%, 55%)' },
  { name: 'Teal', value: 'hsl(180, 65%, 50%)' },
  { name: 'Midnight', value: 'hsl(240, 30%, 15%)' },
  { name: 'Slate Gray', value: 'hsl(210, 15%, 45%)' },
];

// Beautiful gradient presets
const gradients = [
  { name: 'Purple Dream', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { name: 'Sunset Bliss', value: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
  { name: 'Ocean Breeze', value: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { name: 'Forest Mist', value: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
  { name: 'Fire & Ice', value: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { name: 'Aurora', value: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
  { name: 'Cosmic', value: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
  { name: 'Peach', value: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
];
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <h1 class="app-title">Background Changer</h1>
      <p class="app-subtitle">Transform your screen with beautiful colors & gradients</p>
    </header>

    <div class="control-panel">
      <!-- Solid Colors Section -->
      <section>
        <h2 class="section-title">Solid Colors</h2>
        <div class="buttons">
          <button 
            v-for="color in colors" 
            :key="color.name"
            class="button" 
            @click="changeBackgroundColor(color.value)"
          >
            {{ color.name }}
          </button>
        </div>
      </section>

      <!-- Gradients Section -->
      <section>
        <h2 class="section-title">Gradient Presets</h2>
        <div class="buttons">
          <button 
            v-for="gradient in gradients" 
            :key="gradient.name"
            class="button button-gradient" 
            @click="changeBackgroundGradient(gradient.value)"
          >
            {{ gradient.name }}
          </button>
        </div>
      </section>

      <!-- Custom Color Picker Section -->
      <section class="color-picker-section">
        <h2 class="section-title">Custom Color</h2>
        <div class="color-picker-wrapper">
          <input 
            type="color" 
            v-model="customColor" 
            class="color-input"
            @change="applyCustomColor"
            title="Pick a custom color"
          />
          <button class="random-button" @click="generateRandomColor">
            🎲 Random Color
          </button>
        </div>
      </section>
    </div>
  </div>
</template>
