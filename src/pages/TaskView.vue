<template>
  <div class="card">
    <h2>{{findTaskProvide.title}}</h2>
    <p>{{findTaskProvide.date}}</p>
    <p>{{findTaskProvide.description}}</p>
    <p>{{findTaskProvide.status}}</p>
    <button @click="closeCardTask">Закрыть</button>
  </div>
</template>


<script>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const findTaskProvide = inject('findTaskProvide')
    console.log(findTaskProvide.value)

    const isViewCard = inject('isViewCard')
    function closeCardTask() {
      router.push('/tasklist')
      isViewCard.value = false
    }

    return {
      findTaskProvide: findTaskProvide.value,
      closeCardTask
    }
  }
}
</script>