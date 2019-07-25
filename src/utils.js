import _ from 'lodash';
import { emptyTransactionObject } from './constants';

export function deepcopy(object) {
  /* lodash cloneDeep preserves objects (like Dates), not just simple types */
  return _.cloneDeep(object);
}

export function getEmptyTransactionObject() {
  /* Return an object with empty transaction-related fields. */
  return deepcopy(emptyTransactionObject);
}
