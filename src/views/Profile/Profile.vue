<script setup lang="ts">
// You can later fetch user data from an API
const user = {
  name: 'Ramesh',
  email: 'ramesg@example.com',
  role: 'Senior Software Engineer',
  location: 'Bengaluru, India',
  avatar: 'https://i.pravatar.cc/150?img=7', // random avatar
}
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <div class="bg-white shadow-lg rounded-xl overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-32"></div>

      <div class="flex flex-col items-center -mt-16">
        <img
          :src="user.avatar"
          alt="User avatar"
          class="w-32 h-32 rounded-full border-4 border-white shadow-md"
        />
        <h2 class="text-xl font-semibold mt-4">{{ user.name }}</h2>
        <p class="text-gray-600">{{ user.role }}</p>
        <p class="text-sm text-gray-400">{{ user.location }}</p>

        <div class="mt-4 flex gap-4">
          <button
            class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Edit Profile
          </button>
          <button
            class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Settings
          </button>
        </div>
      </div>

      <div class="px-8 py-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Profile Details</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p class="text-gray-500">Email</p>
            <p class="text-gray-800">{{ user.email }}</p>
          </div>
          <div>
            <p class="text-gray-500">Location</p>
            <p class="text-gray-800">{{ user.location }}</p>
          </div>
          <div>
            <p class="text-gray-500">Position</p>
            <p class="text-gray-800">{{ user.role }}</p>
          </div>
          <div>
            <p class="text-gray-500">Status</p>
            <p class="text-green-600 font-semibold">Active</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
