const title = document.getElementById('title')

class Title {
  // eslint-disable-next-line no-useless-constructor
  constructor (public title: string) {
  }
}

const msg: Title = new Title('Welcome to TypeScript')
title.textContent = `${msg.title}`
