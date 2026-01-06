import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ConfirmDialog from '../components/ConfirmDialog.vue'

describe('ConfirmDialog.vue', () => {
    it('renders confirmation message', () => {
        const wrapper = shallowMount(ConfirmDialog)

        expect(wrapper.text()).toContain('Are you sure?')
    })
})

shallowMount(ConfirmDialog, {
    global: {
        stubs: {
            BaseButton: {
                template: '<button><slot /></button>',
            },
        },
    },
})

it('emits confirm event when button is clicked', async () => {
    const wrapper = shallowMount(ConfirmDialog)

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('confirm')).toBeTruthy()
})