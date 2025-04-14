<script setup lang="ts">
import { ref } from 'vue'

const emailNotifications = ref(true)
const darkMode = ref(false)
</script>

<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

    <!-- Section 1: Account -->
    <div class="bg-white shadow rounded-lg p-6 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Account Settings</h2>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label class="block text-gray-600 mb-1">Username</label>
          <input
            type="text"
            placeholder="MyStar"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label class="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="mystar@example.com"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>

    <!-- Section 2: Password -->
    <div class="bg-white shadow rounded-lg p-6 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Change Password</h2>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label class="block text-gray-600 mb-1">Current Password</label>
          <input
            type="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label class="block text-gray-600 mb-1">New Password</label>
          <input
            type="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>

    <!-- Section 3: Preferences -->
    <div class="bg-white shadow rounded-lg p-6 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Preferences</h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-gray-600">Enable Email Notifications</span>
          <input type="checkbox" v-model="emailNotifications" class="w-5 h-5" />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-gray-600">Dark Mode</span>
          <input type="checkbox" v-model="darkMode" class="w-5 h-5" />
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="text-right">
      <button
        class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Save Changes
      </button>
    </div>
  </div>
</template>
