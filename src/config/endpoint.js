import getConfig from 'next/config'

export function config() {
  const { publicRuntimeConfig } = getConfig()
  const { HOST, PORT, PATH } = publicRuntimeConfig
  const host = HOST || window.location.hostname
  const port = PORT
  const _port = (port && `:${port}`) || ':8882'
  const path = PATH || ''

  return { host, port: _port, path }
}

export const apiUrl = (apiPath = '') => {
  const { host, port, path } = config()
  return `http://${host}${port}${path}${apiPath}`
}

export const wsUrl = () => {
  const { host, port } = config()
  return `https://${host}${port}` || 'https://localhost:3001'
}
