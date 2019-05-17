import { spy } from 'mobx';
import EventEmmiter from 'events';
import consoleLogChange from './consoleLogChange';

const LS_LOG_KEY = 'mobx-react-devtool__logEnabled';

let state = {
  logEnabled: false,
  logFilter: () => true,
};

export const eventEmitter = new EventEmmiter();

eventEmitter.setMaxListeners(Infinity);

let loggerDisposer;

export const setGlobalState = newState => {
  if (state.logEnabled !== newState.logEnabled) {
    if (newState.logEnabled === true) {
      if (loggerDisposer) loggerDisposer();
      loggerDisposer = spy(change => consoleLogChange(change, state.logFilter));
    } else if (newState.logEnabled === false && loggerDisposer) {
      loggerDisposer();
    }
  }

  if (newState.logEnabled === true) {
    window.localStorage.setItem(LS_LOG_KEY, 'YES');
  } else if (newState.logEnabled === false) {
    window.localStorage.removeItem(LS_LOG_KEY);
  }

  state = Object.assign({}, state, newState);

  eventEmitter.emit('update');
};

export const getGlobalState = () => state;

export const restoreLogFromLocalstorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const logEnabled = window.localStorage.getItem(LS_LOG_KEY) === 'YES';
    setGlobalState({ logEnabled });
  }
};
