import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Modal from '../components/Modal.vue'

describe('Modal.vue', () => {
    it('renders header and default slots', () => {
        const wrapper = mount(Modal, {
            slots: {
                header: '<h1>Modal Title</h1>',
                default: '<p>Modal Content</p>',
            },
        })

        expect(wrapper.text()).toContain('Modal Title')
        expect(wrapper.text()).toContain('Modal Content')
    })
})
