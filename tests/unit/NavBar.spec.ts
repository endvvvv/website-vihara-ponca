import { mount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'
import { it, expect } from 'vitest'

it('toggle bahasa dan set aria-expanded di hamburger', async () => {
  const wrapper = mount(NavBar)

  const btnMenu = wrapper.get('#menu-button')
  expect(btnMenu.attributes('aria-expanded')).toBe('false')

  await btnMenu.trigger('click')
  expect(btnMenu.attributes('aria-expanded')).toBe('true')

  const btnEN = wrapper.findAll('button').find((b) => b.text() === 'EN')!
  await btnEN.trigger('click')

  expect(wrapper.text()).toContain('Home')
})
