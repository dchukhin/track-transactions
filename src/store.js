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
