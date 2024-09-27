<template>
  <div>
    <div v-if="event" class="event">
      <h2 class="event__title">{{ event.title }}</h2>
      <p class="event__tems"><strong> Topic:</strong> {{ event.desc }}</p>
      <div class="event__img">
        <img :src="event.img" :alt="event.name" :title="event.name" />
      </div>
      <p class="event__fullDesc">{{ event.fullDesc }}</p>
      <span class="event__organizer"
        >Organizer: <strong>{{ event.organizer }}</strong></span
      >
      <div class="event__info">
        <RouterLink :to="{ name: 'EventsPage' }"><span>Go back</span></RouterLink>
        <RouterLink :to="{ name: 'RegisterPage' }"><span>Register</span></RouterLink>
        <RouterLink :to="{ name: 'RegisteredUsers' }"><span>Registered users</span></RouterLink>
      </div>
    </div>

    <div v-else class="event_noFound">
      <p>Подія не знайдена.</p>
    </div>
  </div>
</template>

<script>
import { useEventsStore } from '@/stores/EventsStore'
import { mapState } from 'pinia'

export default {
  name: 'SingleEventPage',
  computed: {
    ...mapState(useEventsStore, ['events']),
    event() {
      const eventId = Number(this.$route.params.id)
      return this.events.find((el) => el.id === eventId)
    }
  }
}
</script>

<style lang="scss" scoped>
.event {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid $bg-light;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  background-color: $white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &__title {
    font-size: 1.4rem;
    color: $dark;
    margin-bottom: 10px;
    @media (min-width: $lg) {
      font-size: 1.6rem;
    }
    @media (min-width: $xl) {
      font-size: 1.8rem;
    }
  }

  &__tems {
    margin-bottom: 10px;
    font-size: 1.2rem;
    max-width: 690px;
  }

  &__fullDesc {
    max-width: 690px;
    font-size: 1.1rem;
    color: $dark;
    margin-bottom: 10px;
  }

  &__img {
    max-width: 690px;
    max-height: 490px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
    & img {
      width: 100%;
      height: 100%;
    }
  }

  &__organizer {
    font-size: 1.1rem;
    color: $grey;
    font-style: italic;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  // .event__info
  &__info {
    width: 375px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.7rem;
    @media (min-width: $md) {
      width: 690px;
    }
    & span {
      display: block;
      background-color: $dark_blue;
      padding: 8px 2px;
      border-radius: 4px;
      color: $white;
      transition: background-color 0.3s;
      &:hover {
        background-color: $ligth-blue;
      }
      @media (min-width: $md) {
        padding: 10px 20px;
        font-size: 1.2rem;
      }
    }
  }
}

.event_noFound {
  text-align: center;
  font-size: 1.2rem;
  color: $red;
  margin-top: 50px;
}
</style>
