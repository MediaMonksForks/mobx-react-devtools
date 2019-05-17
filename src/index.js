import { setGlobalState } from './globalStore';

const notDev = process.env.NODE_ENV !== 'development';

const noop = () => {};

export const configureDevtool = notDev
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

export const setLogEnabled = notDev ? noop : logEnabled => configureDevtool({ logEnabled });
