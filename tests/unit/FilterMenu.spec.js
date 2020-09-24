import { shallowMount } from '@vue/test-utils'
import FilterMenu from '@/components/FilterMenu.vue'

describe('FilterMenu.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(FilterMenu, {      
    })
  })

  it('should create', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should have 2 icons', () => {
    expect(wrapper.findAll('v-icon')).toHaveLength(2)
  })

  it('should have 2 buttons', () => {
    expect(wrapper.findAll('v-btn')).toHaveLength(2)
  })
})
