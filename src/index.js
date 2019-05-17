import { setGlobalState } from './globalStore';

const notDev = process.env.NODE_ENV !== 'development';

export const configureDevtool = ({ logEnabled, logFilter }) => {
  if (notDev) return;
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
