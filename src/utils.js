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

export function getNextAvailableId(objectsArray) {
  /* Return the highest id property from the objectsArray, plus 1. */
  return Math.max(...objectsArray.map(obj => obj.id)) + 1
}
