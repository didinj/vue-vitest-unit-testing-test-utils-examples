import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import StatusMessage from '../components/StatusMessage.vue'

it('renders success message when status is success', () => {
    const wrapper = mount(StatusMessage, {
        props: {
            status: 'success',
        },
    })

    expect(wrapper.text()).toContain('Operation completed successfully')
    expect(wrapper.classes()).toContain('success')
})

it('renders error message when status is error', () => {
    const wrapper = mount(StatusMessage, {
        props: {
            status: 'error',
        },
    })

    expect(wrapper.text()).toContain('Something went wrong')
    expect(wrapper.classes()).toContain('error')
})

it('updates the message when status changes', async () => {
    const wrapper = mount(StatusMessage, {
        props: {
            status: 'success',
        },
    })

    await wrapper.setProps({ status: 'error' })

    expect(wrapper.text()).toContain('Something went wrong')
})

it('shows only one message at a time', () => {
    const wrapper = mount(StatusMessage, {
        props: {
            status: 'success',
        },
    })

    expect(wrapper.find('.success').exists()).toBe(true)
    expect(wrapper.find('.error').exists()).toBe(false)
})
