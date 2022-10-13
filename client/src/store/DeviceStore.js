import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
      { id: 3, name: 'Ноутбуки' },
      { id: 4, name: 'Телевизоры' },
    ]
    this._brands = [
      { id: 1, name: 'Яблоко' },
      { id: 2, name: 'Хуавэй' },
      { id: 3, name: 'Нокиа' },
      { id: 4, name: 'Пицца' },
    ]
    this._devices = [
      {
        id: 1,
        name: 'Человек',
        price: 121233,
        rating: 5,
        img: 'https://www.fugo.ai/images/hero/woman-with-ipad.webp',
      },
      {
        id: 2,
        name: 'Волку',
        price: 132123,
        rating: 5,
        img: 'https://www.fugo.ai/images/hero/woman-with-ipad.webp',
      },
      {
        id: 3,
        name: 'Брат',
        price: 144423,
        rating: 5,
        img: 'https://www.fugo.ai/images/hero/woman-with-ipad.webp',
      },
      {
        id: 4,
        name: 'Волку',
        price: 155523,
        rating: 5,
        img: 'https://www.fugo.ai/images/hero/woman-with-ipad.webp',
      },
      {
        id: 5,
        name: 'Человек',
        price: 12903,
        rating: 5,
        img: 'https://www.fugo.ai/images/hero/woman-with-ipad.webp',
      },
    ]
    this._selectedType = {}
    this._selectedBrand = {}
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
  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}
