import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
  it('renders inner text', () => {
    const wrapper = shallowMount(About, {
      global: {
        mocks: {
          $t: (key) => key
        }
      }
    })

    // Now, test the rendered content
    expect(wrapper.text()).toContain('about.heading')
  })
})
