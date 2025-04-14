<script setup lang="ts">
// You can fetch data or props here if needed
const cards = [
  { title: 'Users', value: '1,245', icon: '👥', color: 'bg-blue-100', textColor: 'text-blue-800' },
  { title: 'Sales', value: '$9,800', icon: '💰', color: 'bg-green-100', textColor: 'text-green-800' },
  { title: 'Orders', value: '320', icon: '📦', color: 'bg-yellow-100', textColor: 'text-yellow-800' },
  { title: 'Visitors', value: '4,500', icon: '👀', color: 'bg-purple-100', textColor: 'text-purple-800' },
]
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="rounded-xl shadow-md p-5 transition duration-300 hover:shadow-xl hover:-translate-y-1"
        :class="card.color"
      >
        <div class="flex justify-between items-center">
          <div>
            <p class="text-sm text-gray-600 mb-1">{{ card.title }}</p>
            <p :class="['text-xl font-bold', card.textColor]">{{ card.value }}</p>
          </div>
          <div class="text-3xl">
            {{ card.icon }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>