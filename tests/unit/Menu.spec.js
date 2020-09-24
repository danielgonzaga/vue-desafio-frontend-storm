import { shallowMount } from '@vue/test-utils'
import Menu from '@/components/Menu.vue'

describe('Menu.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Menu, {      
    })
  })

  it('should create', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render logo image', () => {
    expect(wrapper.find('#logo').exists()).toBe(true)
  })

  it('should have 3 buttons', () => {
    expect(wrapper.findAll('v-btn')).toHaveLength(3)
  })

  it('should have 7 icons', () => {
    expect(wrapper.findAll('v-icon')).toHaveLength(7)
  })
})
