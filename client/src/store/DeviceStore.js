import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'тип 1' },
      { id: 2, name: 'тип 2' },
    ]
    this._brands = [
      { id: 1, name: 'бренд 1' },
      { id: 2, name: 'бренд 2' },
    ]
    this._device = [
      { id: 1, name: 'девайс 1' },
      { id: 2, name: 'девайс ' },
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(device) {
    this._device = device
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._brands
  }
}
