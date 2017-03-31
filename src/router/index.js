import Vue from 'vue'
import Router from 'vue-router'
import Text from '@/components/text'
import Once from '@/components/once'
import Html from '@/components/html'
import Attribute from '@/components/attribute'
import Expression from '@/components/expression'
import Modifier from '@/components/modifier'
import Layer from '@/components/layer'
import Filter from '@/components/filter'
import For from '@/components/for'
import Effect from '@/components/effect'
import Calculation from '@/components/calculation'
import Watch from '@/components/watch'
import Transition from '@/components/transition'
import Recursion from '@/components/recursion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/text',
      name: 'Text',
      component: Text
    },
    {
      path: '/once',
      name: 'Once',
      component: Once
    },
    {
      path: '/html',
      name: 'Html',
      component: Html
    },
    {
      path: '/attribute',
      name: 'Attribute',
      component: Attribute
    },
    {
      path: '/expression',
      name: 'Expression',
      component: Expression
    },
    {
      path: '/modifier',
      name: 'Modifier',
      component: Modifier
    },
    {
      path: '/layer',
      name: 'Layer',
      component: Layer
    },
    {
      path: '/filter',
      name: 'Filter',
      component: Filter
    },
    {
      path: '/for',
      name: 'For',
      component: For
    },
    {
      path: '/effect',
      name: 'Effect',
      component: Effect
    },
    {
      path: '/calculation',
      name: 'Calculation',
      component: Calculation
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/transition',
      name: 'Transition',
      component: Transition
    },
    {
      path: '/recursion',
      name: 'Recursion',
      component: Recursion
    }

  ]
})
