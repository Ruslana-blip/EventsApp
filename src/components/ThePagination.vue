<template>
  <ul class="pagination">
    <li
      @click="changePage(currentPage - 1)"
      :class="{ disabled: currentPage === 1 }"
      :tabindex="currentPage === 1 ? -1 : 0"
    >
      &lt;
    </li>
    <li
      v-for="page in totalPages"
      :key="page"
      @click="changePage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </li>
    <li
      @click="changePage(currentPage + 1)"
      :class="{ disabled: currentPage === totalPages }"
      :tabindex="currentPage === totalPages ? -1 : 0"
    >
      &gt;
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ThePagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    changePage(page) {
      if (page < 1 || page > this.totalPages) return
      this.$emit('change-page', page)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
}

.pagination li {
  margin: 0 5px;
  cursor: pointer;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pagination li.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination li.active {
  background-color: $dark-blue;
  color: white;
  border: none;
}
</style>
