<template>
  <h3>Всего активных задач:</h3>

  <div class="card" v-for="card in taskInfoCard" :key="card.id">
    <h2>{{ card.title }}</h2>
    <p>{{ card.id }}</p>
    <p>{{ card.date }}</p>
    <p>{{ card.status }}</p>
    <hr>
    <button>Посмотреть</button>
  </div>
</template>


<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const taskInfoCard = ref(null)

    onMounted(() => loadDatabase())

    async function loadDatabase() {
      const response = await axios.get('https://freelance-mini-app-default-rtdb.europe-west1.firebasedatabase.app/tasklist.json')

      taskInfoCard.value = Object.keys(response.data).map(taskItem => {
        return {
          id: taskItem,
          title: response.data[taskItem].title,
          date: response.data[taskItem].date,
          description: response.data[taskItem].description,
          status: response.data[taskItem].status
        }
      })
    }


    return {
      taskInfoCard: taskInfoCard
    }
  }
}
</script>