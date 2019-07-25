<template>
  <div class="about">
    <h1>Transaction</h1>
    {{ transaction }}
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

    <div>
      <span @click="saveTransaction">Save</span>
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
        this.$store.dispatch('createTransaction', this.localTransaction);
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
