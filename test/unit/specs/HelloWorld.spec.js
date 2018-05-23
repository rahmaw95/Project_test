import Vue from 'vue'
import navbarComponent from '../../../src/components/navbarComponent.vue'

describe('navbarComponent.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(navbarComponent)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
