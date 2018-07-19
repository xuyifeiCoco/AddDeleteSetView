const APIV1 = '/api/v1'
const api = 'http://127.0.0.1:8081/user' // express mongoDb
module.exports = {
  name: 'AntD Admin',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin  © 2017 zuiidea',
  logo: '/logo.svg',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: ['http://127.0.0.1:8081'],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${api}/list`, // 获取用户列表
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
  },
}
