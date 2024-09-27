<template>
  <div class="events">
    <h1>Events</h1>
    <RouterView />
    <div class="events__card">
      <ul class="events__list">
        <li class="events__item" v-for="event in paginatedEvents" :key="event.id">
          <h2 class="events__title">{{ event.title }}</h2>
          <p class="events__desc">{{ event.desc }}</p>
          <span class="events__organizer"
            >Organizer: <strong>{{ event.organizer }}</strong></span
          >
          <div class="events__actions">
            <RouterLink :to="{ name: 'RegisterPage' }"
              ><span class="events__register">Register</span></RouterLink
            >
            <RouterLink
              :to="{
                name: 'SingleEventPage',
                params: { id: event.id }
              }"
            >
              <span class="events__fullInfo">View</span>
            </RouterLink>
          </div>
        </li>
      </ul>

      <ThePagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @change-page="changePage"
      />
    </div>
  </div>
</template>

<script>
import ThePagination from '@/components/ThePagination.vue'
import { useEventsStore } from '@/stores/EventsStore'
import { mapState } from 'pinia'
export default {
  name: 'EventsPage',
  components: {
    ThePagination
  },
  data() {
    return {
      currentPage: 1,
      perPage: 6
    }
  },
  computed: {
    ...mapState(useEventsStore, ['events']),
    totalPages() {
      return Math.ceil(this.events.length / this.perPage)
    },
    paginatedEvents() {
      const start = (this.currentPage - 1) * this.perPage
      return this.events.slice(start, start + this.perPage)
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.events {
  & h1 {
    font-size: 48px;
    color: $dark;
  }
  // .events__card
  &__card {
    margin-top: 20px;
  }
  // .events__list
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 40px;
  }
  // .events__item
  &__item {
    flex: 0 0 100%;
    height: 240px;
    padding: 20px;
    box-shadow: 0 0 4px $dark;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: $grey;
    @media (min-width: $lg) {
      flex: 0 0 calc(50% - 20px);
    }
    @media (min-width: $xl) {
      flex: 0 0 calc(33.333% - 20px);
    }
  }
  // .events__title
  &__title {
    color: $dark;
  }
  // .events__desc
  &__desc {
    margin: 10px 0;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    color: $dark_blue;
    & span {
      transition: background-color 0.3s;
      &:hover {
        color: $ligth-blue;
      }
    }
  }
}
</style>
