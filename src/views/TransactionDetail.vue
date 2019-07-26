<template>
  <div class="about">
    <h1>Transaction</h1>
    <div>
      <label for="name">Name</label>
      <input id="name" v-model="localTransaction.name">
    </div>
    <div>
      <label for="name">Date</label>
      <input id="name" v-model="localTransaction.date">
    </div>
    <div>
      <label for="name">Amount</label>
      <input id="name" v-model="localTransaction.amount">
    </div>
    <div>
      <label for="name">Description</label>
      <input id="name" v-model="localTransaction.description">
    </div>
    <div>
      <label for="name">Category</label>
      <input id="name" v-model="localTransaction.category">
    </div>

    <p v-if="isOffline">Note: you are currently offline. You may still create a transaction, but it won't be synced with the server until your device comes back online.</p>

    <div>
      <button @click="saveTransaction">Save</button>
    </div>

  </div>
</template>
<script>
import { getEmptyTransactionObject } from '@/utils';

export default {
  name: 'TransactionDetail',
  props: {},
  computed: {
    transaction: {
      // access the transaction in the store
      get: function () {
        return this.$store.state.transactionDetail;
      },
      set: function (value) {
        this.$store.commit('transactionDetail', value);
      },
    },
  },
  methods: {
    saveTransaction() {
      if (this.localTransaction.id) {
        this.$store.dispatch('updateTransaction', this.localTransaction);
      } else {
        if (this.isOnline) {
          this.$store.dispatch('createTransaction', this.localTransaction);
        } else {
          this.$store.dispatch('createTransactionForSync', this.localTransaction);
        }
      }
      this.localTransaction = getEmptyTransactionObject();
    },
  },
  data() {
    return {
      localTransaction: getEmptyTransactionObject(),
    };
  },
};
</script>
