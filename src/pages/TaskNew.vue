<template>
  <div class="card">
    <h2>Создать новую задачу</h2>

    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="titleTask">
    </div>
    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="dateTask">
    </div>
    <div class="form-control">
      <label for="descriptions">Описание</label>
      <textarea type="text" id="descriptions" v-model="descripTask"></textarea>
    </div>

    <button @click="createTask">Создать</button>
  </div>
</template>


<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
  setup() {
    const titleTask = ref('')
    const dateTask = ref('')
    const descripTask = ref('')

    async function createTask() {
      await axios.post('https://freelance-mini-app-default-rtdb.europe-west1.firebasedatabase.app/tasklist.json', {
        title: titleTask.value,
        date: dateTask.value,
        description: descripTask.value,
        status: 'Активный'
      })
    }


    return {
      titleTask, dateTask, descripTask,
      createTask
    }
  }
}
</script>