const CONFIG = {
  // 测试环境
  development: {
    apiHost: ''
  },
  // 模拟环境
  staging: {
    apiHost: ''
  },
  // 正式环境
  production: {
    apiHost: ''
  }
};

module.exports = CONFIG[process.env.NODE_ENV];
