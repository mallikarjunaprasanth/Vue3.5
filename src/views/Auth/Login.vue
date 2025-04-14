<script setup lang="ts">
import DynamicFormField from '../../components/DynamicFormField.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router' // For navigation after login

const router = useRouter()

const formData = ref({
  username: 'Prasanth',
  gender: 'male',
  agree: true,
})

const errors = ref({
  username: '',
  gender: '',
  agree: '',
})

const fields = [
  {
    title: 'Username',
    type: 'text',
    name: 'username',
    label: 'Username',
    value: formData.value.username,
    placeholder: 'Enter username',
    required: true,
  },

  {
    title: 'Gender',
    type: 'select',
    name: 'gender',
    label: 'Gender',
    value: formData.value.gender,
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ],
    required: true,
  },
  {
    title: '',
    type: 'checkbox',
    name: 'agree',
    label: 'I agree',
    value: formData.value.agree,
    required: true,
  },
  {
    title: '',
    type: 'button',
    name: 'submit',
    label: 'Submit',
    buttonType: 'submit',
  },
]

const handleUpdate = ({ name, value }: { name: string; value: any }) => {
  formData.value[name] = value
  console.log('Updated:', formData.value)
}

const validateForm = () => {
  let isValid = true
  for (const field of fields) {
    if (field.required && !formData.value[field.name]) {
      errors.value[field.name] = 'This field is required'
      isValid = false
    } else {
      errors.value[field.name] = ''
    }
  }
  return isValid
}

const handleSubmit = () => {
  if (validateForm()) {
    // If validation passes, simulate authentication
    localStorage.setItem('isAuthenticated', 'true')
    router.push({ name: 'dashboard' }) // Navigate to the Dashboard
  } else {
    console.log('Form has errors')
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>

      <form @submit.prevent="handleSubmit">
        <DynamicFormField
          v-for="field in fields"
          :key="field.name"
          :field="field"
          @update:value="handleUpdate"
        />
      </form>
    </div>
  </div>
</template>
