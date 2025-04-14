<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    field: {
      title: any
      type: 'text' | 'select' | 'radio' | 'checkbox' | 'button'
      name: string
      label?: string
      value?: any
      placeholder?: string
      options?: { label: string | number ; value: string | number | boolean }[]
      class?: string
      width?: string
      buttonType?: string
      required?: boolean
      errorMessage?: string
    }
  }>(),
  {
    field: () => ({
      title: '',
      type: 'text',
      name: '',
      value: '',
      placeholder: '',
      class: '',
      width: 'w-full',
      buttonType: 'submit',
      required: false,
      errorMessage: 'This field is required',
    }),
  }
)

const emit = defineEmits<{
  (e: 'update:value', payload: { name: string; value: any }): void
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.field.type === 'checkbox' ? target.checked : target.value
  emit('update:value', { name: props.field.name, value })
}
</script>

<template>
  <div :class="['mb-4', field.width]" :style="field.style">
    <label v-if="field.title" class="block mb-1 font-medium text-gray-700">
      {{ field.title }}
    </label>

    <!-- Text Input -->
    <input
      v-if="field.type === 'text'"
      :name="field.name"
      type="text"
      :value="field.value"
      :placeholder="field.placeholder"
      @input="handleInput"
      :required="field.required"
      :class="['w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500', field.class]"
      :style="field.style"
    />

    <!-- Select Dropdown -->
    <select
      v-else-if="field.type === 'select'"
      :name="field.name"
      :value="field.value"
      @change="handleInput"
      :required="field.required"
      :class="['w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500', field.class]"
      :style="field.style"
    >
      <option value="" disabled>Select...</option>
      <option v-for="opt in field.options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>

    <!-- Radio Buttons -->
    <div v-else-if="field.type === 'radio'" class="flex flex-col gap-1">
      <label
        v-for="opt in field.options"
        :key="opt.value"
        class="inline-flex items-center gap-2"
        :class="field.class"
        :style="field.style"
      >
        <input
          type="radio"
          :name="field.name"
          :value="opt.value"
          :checked="field.value === opt.value"
          @change="handleInput"
          :required="field.required"
        />
        {{ opt.label }}
      </label>
    </div>

    <!-- Checkbox -->
    <div v-else-if="field.type === 'checkbox'" class="flex items-center gap-2" :class="field.class" :style="field.style">
      <input type="checkbox" :name="field.name" :checked="field.value" @change="handleInput" :required="field.required" />
      <span>{{ field.label }}</span>
    </div>

    <!-- Button -->
    <button
      v-else-if="field.type === 'button'"
      :type="field.buttonType"
      @click="handleInput"
      :class="['w-full px-4 py-2 mt-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700', field.class]"
      :style="field.style"
    >
      {{ field.label || 'Submit' }}
    </button>

    <!-- Error Message -->
    <p v-if="field.required && !field.value" class="text-red-500 text-sm mt-1">{{ field.errorMessage }}</p>
  </div>
</template>
