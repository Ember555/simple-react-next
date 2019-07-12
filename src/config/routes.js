export const index = {
  key: 'index',
  name: 'Home',
  // desc: 'Upload service credential',
  path: '/',
  index: true,
}
export const testPage = {
  key: 'testPage',
  name: 'testPage',
  title: 'Test Page',
  desc:
    'Some test page',
  path: '/testPage',
  prev: '/',
  next: '/',
  src: '',
}
// export const credential = {
//   key: 'credential',
//   name: 'Credential',
//   title: 'Service Credential',
//   desc:
//     'Essential data for API to connect IBP for inquiry and invoke transaction',
//   path: '/credential',
//   // index: false,
//   prev: '/profile',
//   next: '/notification',
//   src: '/static/img/key.svg',
// }
// export const settings = {
//   key: 'settings',
//   name: 'Settings',
//   title: 'API Settings',
//   desc:
//     'Management of environment variables to initialize API settings and configuration',
//   path: '/settings',
//   prev: '/notification',
//   next: '/tls',
//   src: '/static/img/tools.svg',
// }
// export const notification = {
//   key: 'notification',
//   name: 'Notification',
//   title: 'Notification',
//   desc:
//     'Configuration for receiving notification and callback on invoke transaction',
//   path: '/notification',
//   prev: '/credential',
//   next: '/settings',
//   src: '/static/img/notification.svg',
// }
// export const tls = {
//   key: 'tls',
//   name: 'TLS',
//   title: 'TLS Certificate',
//   desc:
//     'Management of TLS cert/key for secure communication between client and server',
//   path: '/tls',
//   prev: '/settings',
//   next: '/blockSyncing',
//   src: '/static/img/lock.svg',
// }
// export const blockSyncing = {
//   key: 'blockSyncing',
//   name: 'BlockSyncing',
//   title: 'Block Syncing',
//   desc:
//     'Start syncing block data from Blockchain',
//   path: '/blockSyncing',
//   prev: '/tls',
//   next: '/registration',
//   src: '/static/img/cloud-computing.svg',
// }
// export const registration = {
//   key: 'registration',
//   name: 'Registration',
//   title: 'Admin Registration',
//   desc: 'Registration of organization admin account for accessing to Admin UI',
//   path: '/registration',
//   prev: '/blockSyncing',
//   next: '/registration',
//   last: true,
//   src: '/static/img/user.svg',
// }

const routes = [
  index,
  testPage,
  // profile,
  // credential,
  // notification,
  // settings,
  // tls,
  // registration,
]

export default routes
