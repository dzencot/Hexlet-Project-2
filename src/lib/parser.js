// @

import YAML from 'yamljs';
import INI from 'ini-config-parser';

export default (extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return YAML.parse;
    case '.ini':
      return INI.parse;
    default:
      return undefined;
  }
};

