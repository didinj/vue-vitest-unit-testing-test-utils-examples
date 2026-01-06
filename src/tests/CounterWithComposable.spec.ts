import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import CounterWithComposable from '../components/CounterWithComposable.vue'

vi.mock('../composables/useCounter', () => {
    return {
        useCounter: () => ({
            count: { value: 10 },
            increment: vi.fn(),
        }),
    }
})

describe('CounterWithComposable.vue', () => {
    it('renders mocked count value', () => {
        const wrapper = mount(CounterWithComposable)
        expect(wrapper.text()).toContain('Count: 10')
    })

    // it('calls increment when button is clicked', async () => {
    //     const wrapper = mount(CounterWithComposable)
    //     await wrapper.trigger('click')

    //     const { increment } = require('../composables/useCounter').useCounter()
    //     expect(increment).toHaveBeenCalled()
    // })
})