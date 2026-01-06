import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseCard from '../components/BaseCard.vue'

describe('BaseCard.vue', () => {
    it('renders content passed to default slot', () => {
        const wrapper = mount(BaseCard, {
            slots: {
                default: '<p>Slot Content</p>',
            },
        })

        expect(wrapper.html()).toContain('Slot Content')
    })
})
