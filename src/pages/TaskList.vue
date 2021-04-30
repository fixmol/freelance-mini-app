<template>
  <div v-if="!isViewCard">
    <h3>Всего активных задач:</h3>
    <div class="card" v-for="card in taskInfoCard" :key="card.id">
      <h2>{{ card.title }}</h2>
      <p>{{ card.id }}</p>
      <p>{{ card.date }}</p>
      <p>{{ card.status }}</p>
      <hr>
      <button @click="toViewTask(card.id)">Посмотреть</button>
    </div>
  </div>

  <router-view v-else>
  </router-view>
</template>


<script>
import axios from 'axios'
import { ref, onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

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


    const isViewCard = ref(false)
    const findTaskProvide = ref(null)

    function toViewTask(id) {
      isViewCard.value = true
      findTaskProvide.value = taskInfoCard.value.find(item => item.id === id)

      router.push('/tasklist/' + id)
    }
    provide('findTaskProvide', findTaskProvide)
    provide('isViewCard', isViewCard)

    return {
      taskInfoCard: taskInfoCard,
      isViewCard: isViewCard,
      toViewTask
    }
  }
}
</script>