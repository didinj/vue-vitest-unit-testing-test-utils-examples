import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Counter from '../components/Counter.vue'

describe('Counter.vue', () => {
    it('renders initial count', () => {
        const wrapper = mount(Counter)

        expect(wrapper.text()).toContain('Count: 0')
    })

    it('shows the initial count as 0', () => {
        const wrapper = mount(Counter)

        const count = wrapper.get('[data-testid="count"]')
        expect(count.text()).toBe('Count: 0')
    })

    it('increments the count when button is clicked', async () => {
        const wrapper = mount(Counter)

        await wrapper.get('button').trigger('click')
        expect(wrapper.get('[data-testid="count"]').text()).toBe('Count: 1')
    })
})