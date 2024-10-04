<template>
  <main>
    <section class="dashCards">
      <h2>
        What's up, <input type="text" v-model="name" />
        <!-- <scale-text-field
          label="Name"
          placeholder="Please enter your name"
          v-model="name"
        ></scale-text-field> -->
      </h2>
    </section>

    <section class="check">
      <h4>Checker</h4>
      <form @submit.prevent="add">
        <input type="text" placeholder="Enter activity here" v-model="activity" />
        <div class="options">
          <label>
            <input
              type="radio"
              name="personal"
              value="personal"
              v-model="input_category"
            />
            <div>Personal</div>
          </label>
          <label>
            <input
              type="radio"
              name="work"
              value="work"
              v-model="input_category"
            />
            <div>Work</div>
          </label>
        </div>

        <input type="submit" />
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const todos = ref([]);
const name = ref("");

const input_category = ref(null);
const activity = ref("");

// const todos_asc = computed(() => todos.value.sort((a, b) => {
//     return b.createdAt - a.createdAt
// }))

watch(name, (newVal) => {
  console.log(name);
  localStorage.setItem("name", newVal);
});

onMounted(() => {
  name.value = localStorage.getItem("name") || ""
  todos.value = JSON.parse(localStorage.getItem('todos')) || []
});

const add = () => {
    if (activity.value.trim === '' || input_category.value === null) {
        return
    }

    todos.value.push({
        activity: activity.value,
        category: input_category.value,
        done: false,
        createdAt: new Date().getTime()
    })
}

watch(todos, (newVal) => {
  localStorage.setItem("todos", JSON.stringify(newVal));
}, { deep: true });
</script>