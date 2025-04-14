<script setup lang="ts">
import DynamicFormField from '@/components/DynamicFormField.vue'
import { useRouter } from 'vue-router' // For navigation after login

const router = useRouter()

const handleLogout = () => {
  localStorage.clear()
  router.push({ name: 'Login' }) // Navigate to the Dashboard
}
</script>

<template>
  <div class="bg-gray-900 p-4 flex justify-between items-center">
    <router-link to="/" class="text-white text-2xl hover:text-orange-500 transition duration-200"
      >Home</router-link
    >
    <div class="flex items-center space-x-6">
      <div class="mb-4 space-x-6">
        <router-link to="/profile" class="text-white hover:text-orange-500 transition duration-200"
          >Profile</router-link
        >
        <router-link to="/settings" class="text-white hover:text-orange-500 transition duration-200"
          >Settings</router-link
        >
      </div>
      <DynamicFormField
        :field="{
          title: '',
          type: 'button',
          name: 'logout',
          buttonType: 'button',
          label: 'Logout',
          class:
            'bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200',
        }"
        @update:value="handleLogout"
      />
    </div>
  </div>
</template>

