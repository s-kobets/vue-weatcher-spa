import Vue from 'vue'
import test from 'ava'

import More from '../src/More.vue'
import CityList from '../src/components/city-list.vue'

test('data', t => {
    t.is(More.data().msg, 'Welcome to Your Vue.js More')
})

test('renders', t => {
	const vm = new Vue(More).$mount()
	const tree = {
		$el: vm.$el.outerHTML
	}
	t.snapshot(tree)
})

test('renders CityList', t => {
    const vm = new Vue(CityList).$mount()
	const tree = {
		$el: vm.$el.outerHTML
	}
    t.snapshot(tree)
    t.fail()
})
