// 基础信息接口
export default (axios, config) => {
  return {
    // 获取酒店列表数据
    getInnList(data = {}) {
      return axios.post(`${config.fqmsHost}/roomticket/hotel/list`, data, { withCredentials: true });
    }
  };
};
