import Vue from 'vue';
import Vuex from 'vuex';
import { deepcopy, getEmptyTransactionObject } from '@/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactionDetail: getEmptyTransactionObject(),
    transactions: [],
  },
  mutations: {
    transactionDetail(state, transactionObject) {
      state.transactionDetail = transactionObject;
    },
    transactions(state, transactions) {
      state.transactions = transactions;
    },
    addTransactionToTransactions(state, transactionObject) {
      const transactions = deepcopy(state.transactions);
      transactions.push(transactionObject);
      state.transactions = transactions;
    },
    removeTransactionFromTransactions(state, transactionObject) {
      let transactions = deepcopy(state.transactions);
      transactions = transactions.filter(transaction => transaction.id !== transactionObject.id);
      state.transactions = transactions;
    },
  },
  actions: {
    getTransactions(context) {
      /* GET Transactions from API endpoint, set them in the store, and return them. */
      return fetch('https://my-json-server.typicode.com/dchukhin/track-transactions/transactions')
        .then(response => response.json())
        .then(transactions => {
          context.commit('transactions', transactions);
        })
    },
    createTransaction(context, transaction) {
      // TODO: API call to create a transaction. For now, just save to store
      context.commit('addTransactionToTransactions', transaction);
      return transaction;
    },
    updateTransaction(context, transaction) {
      // TODO: API call to update a transaction. For now, just save to store
      context.commit('removeTransactionFromTransactions', transaction);
      context.commit('addTransactionToTransactions', transaction);
      return transaction;
    },
  },
});
