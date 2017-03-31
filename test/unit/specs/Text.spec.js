import Vue from 'vue';
import Text from '@/components/text';


describe('Text.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Text)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})


