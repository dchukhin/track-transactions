<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>Track Transactions</div>
    <div class="list">
      <div class="list-row">
        <span>name</span>
        <span>date</span>
        <span>amount</span>
        <span>description</span>
        <span>category</span>
      </div>
      <div v-for="transaction in transactions" class="list-row">
        <span>{{ transaction.name }}</span>
        <span>{{ transaction.date }}</span>
        <span>{{ transaction.amount }}</span>
        <span>{{ transaction.description }}</span>
        <span>{{ transaction.category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  computed: {
    transactions() {
      return this.$store.state.transactions;
    },
  },
};
</script>
<style scoped lang="scss">
.list .list-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>
