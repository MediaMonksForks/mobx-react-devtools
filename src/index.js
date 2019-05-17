import { setGlobalState } from './globalStore';

const isDev = process.env.NODE_ENV === 'development';

const noop = () => {};

export const configureDevtool = !isDev
  ? noop
  : ({ logEnabled, logFilter }) => {
      const config = {};
      if (logEnabled !== undefined) {
        config.logEnabled = Boolean(logEnabled);
      }

      if (typeof logFilter === 'function') {
        config.logFilter = logFilter;
      }
      setGlobalState(config);
    };

export const setLogEnabled = !isDev ? noop : logEnabled => configureDevtool({ logEnabled });
