import { shallowMount } from '@vue/test-utils'
import Table from '@/components/Table.vue'

describe('Table.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Table, {      
    })
  })

  it('should create', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render the table', () => {
      expect(wrapper.find("#users-table").exists()).toBe(true)
  })

  it('should have 8 columns', () =>{
      expect(wrapper.findAll('th')).toHaveLength(8)
  })

  it('should render all 5 page buttons', () => {
    expect(wrapper.findAll('v-btn')).toHaveLength(5)
  })
})
