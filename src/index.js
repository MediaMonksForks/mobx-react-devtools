import { setGlobalState } from './globalStore';

export const configureDevtool = ({ logEnabled, logFilter }) => {
  const config = {};
  if (logEnabled !== undefined) {
    config.logEnabled = Boolean(logEnabled);
  }

  if (typeof logFilter === 'function') {
    config.logFilter = logFilter;
  }
  setGlobalState(config);
};

export const setLogEnabled = logEnabled => configureDevtool({ logEnabled });
