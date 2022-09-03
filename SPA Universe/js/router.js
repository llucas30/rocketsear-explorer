export class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const { body } = document
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      });
    
    switch (pathname) {
      case '/exploration':
        body.className = 'exploration';
        break;

      case '/universe':
        body.className = 'universe';
        break;

      case '/':
        body.className = 'home';
        break;

      default:
        body.className = 'deafult';
        break;
    }
  }
}