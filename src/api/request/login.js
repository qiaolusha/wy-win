import service from '../request'
export function getLogKey() {
  return service({
    method: 'get',
    url: `/login/qr/key`
  })
}

export function getLogQrimg(key) {
  return service({
    method: 'get',
    url: `/login/qr/create?key=${key}&qrimg=true`
  })
}

export function getLogState(key) {
  return service({
    method: 'get',
    url: `/login/qr/check?key=${key}&noCookie=true`
  })
}
