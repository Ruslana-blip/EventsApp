<template>
  <div class="users">
    <ul class="users__list">
      <li class="users__item" v-for="user in users" :key="user.id">
        <span class="users__name"> {{ user.name }}</span>
        <span class="users__email">{{ user.email }}</span>
      </li>
    </ul>
  </div>
  <RouterLink :to="{ name: 'EventsPage' }" class="allEvents">All events</RouterLink>
</template>

<script>
import { useEventsStore } from '@/stores/EventsStore'
import { mapState } from 'pinia'
export default {
  name: 'RegisteredUsers',
  computed: {
    ...mapState(useEventsStore, ['users'])
  }
}
</script>

<style lang="scss" scoped>
.users {
  // .users__list
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  // .users__item
  &__item {
    height: 200px;
    flex: 0 0 calc(33.333% - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    border: 1px solid $grey;
    border-radius: 4px;
    background-color: $bg-light;

    &:hover {
      background-color: #f1f1f1;
    }
  }
  // .users__name
  &__name {
    font-weight: bold;
    font-size: 1.4rem;
    color: #333;
  }
  // .users__email
  &__email {
    font-size: 1.2rem;
    color: $grey;
  }
}
.allEvents {
  margin-top: 40px;
  margin-right: 20px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  color: $dark-blue;
  font-size: 1.3rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: $ligth-blue;
    text-decoration: underline;
  }
}
</style>
