import Vue from 'vue';
import Vuex from 'vuex';
import { deepcopy, getEmptyTransactionObject, getNextAvailableId } from '@/utils';

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
      /* Make a POST request to create the transaction, then set it in the store. */
      return fetch('https://my-json-server.typicode.com/dchukhin/track-transactions/transactions', { method: 'post', body: JSON.stringify(transaction) } )
        .then(res => res.json().then(data => ({ status: res.status, body: data })))
        .then(
          response => {
            // Because this API call doesn't really create the object, give the transactionData
            // the next available id.
            let transactionData = deepcopy(transaction)
            transactionData['id'] = getNextAvailableId(context.state.transactions)
            context.commit('addTransactionToTransactions', transactionData);
            return transactionData;
          }
        )
    },
    updateTransaction(context, transaction) {
      /* Make a PUT request to update the transaction, then set it in the store. */
      const url = 'https://my-json-server.typicode.com/dchukhin/track-transactions/transactions/' + transaction.id
      return fetch(url, { method: 'put', body: JSON.stringify(transaction) } )
        .then(res => res.json())
        .then(
          response => {
            context.commit('removeTransactionFromTransactions', transaction);
            context.commit('addTransactionToTransactions', transaction);
            return transaction;
          }
        )
    }
  },
});
