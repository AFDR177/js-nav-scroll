class Nav {
  static #HOME_PAGE = 'https://google.com'

  // метод для кнопки назад
  static #back = () => {
    return history.back()
  }

  // метод для кнопки вперед
  static #next = () => {
    return history.forward()
  }

  // метод для кнопки оноовити
  static #upd = () => {
    return location.reload()
  }

  // метод для зміни сторінки
  static #changePage = (href) => {
    return location.assign(href)
  }

  // метод для кнопки завантажити вебсайт з інпута
  static #go = () => {
    try {
      const url = new URL(window.input.value)
      this.#changePage(url.href)
    } catch (e) {
      alert('Введіть коректну адресу')
      console.log(e)
    }
  }

  // метод для кнопки додому
  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  // метод запуску всьго коду
  static init = () => {
    window.back.onclick = this.#back
    window.next.onclick = this.#next
    window.upd.onclick = this.#upd
    window.home.onclick = this.#home
    window.go.onclick = this.#go

    window.input.value = location.href
  }
}

Nav.init()
