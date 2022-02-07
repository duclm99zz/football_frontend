import Vue from 'vue'
import initData from '@@/globals/init-data'
import helpers from '../globals/helpers'
import validator from '../globals/validator'


Vue.prototype.$validator = validator


Vue.mixin({
  methods: {
    ...helpers,
    // ...permissions,
    initData
  }
})