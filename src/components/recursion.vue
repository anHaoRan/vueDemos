<template>
  <div class="tree-menu">
    <ul v-for="menuItem in theModel">
      <myTree :model="menuItem"></myTree>
    </ul>
  </div>
</template>

<script>
var myData = [
  {
    'id': '1',
    'menuName': '基础管理',
    'menuCode': '10',
    'children': [
      {
        'menuName': '用户管理',
        'menuCode': '11'
      },
      {
        'menuName': '角色管理',
        'menuCode': '12',
        'children': [
          {
            'menuName': '管理员',
            'menuCode': '121',
            'children': [
              {
                'menuName': 'anhr',
                'menuCode': '1000',
                'content': '这是一段描述',
                'introduction': '我叫***，来自****，住在*****'
              }
            ]
          },
          {
            'menuName': 'CEO',
            'menuCode': '122'
          },
          {
            'menuName': 'CFO',
            'menuCode': '123'
          },
          {
            'menuName': 'COO',
            'menuCode': '124'
          },
          {
            'menuName': '普通人',
            'menuCode': '124'
          }
        ]
      },
      {
        'menuName': '权限管理',
        'menuCode': '13'
      }
    ]
  },
  {
    'id': '2',
    'menuName': '商品管理',
    'menuCode': ''
  },
  {
    'id': '3',
    'menuName': '订单管理',
    'menuCode': '30',
    'children': [
      {
        'menuName': '订单列表',
        'menuCode': '31'
      },
      {
        'menuName': '退货列表',
        'menuCode': '32',
        'children': []
      }
    ]
  },
  {
    'id': '4',
    'menuName': '商家管理',
    'menuCode': '',
    'children': []
  }
]

import myTree from './common/recursion-items.vue'

export default {
  name: 'tree-menu',
  components: {
    myTree
  },
  data () {
    return {
      theModel: myData
    }
  }
}
</script>
