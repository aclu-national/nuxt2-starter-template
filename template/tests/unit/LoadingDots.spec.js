import { shallowMount } from '@vue/test-utils'
import LoadingDots from '~/components/LoadingDots.vue'

// This is an example test
describe('LoadingDots.vue', () => {
  it('renders three dots', async () => {
    const wrapper = shallowMount(LoadingDots)
    expect(wrapper.find('.dot').exists()).toBe(true)
  })
})