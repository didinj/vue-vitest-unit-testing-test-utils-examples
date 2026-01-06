import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import UserForm from '../components/UserForm.vue'

it('emits submit event with name payload', async () => {
    const wrapper = mount(UserForm)

    await wrapper.get('input').setValue('Djamware')
    await wrapper.get('form').trigger('submit')

    const events = wrapper.emitted('submit')
    expect(events).toBeTruthy()
})

it('emits correct payload when form is submitted', async () => {
    const wrapper = mount(UserForm)

    await wrapper.get('input').setValue('Djamware')
    await wrapper.get('form').trigger('submit')

    const submitEvents = wrapper.emitted('submit')

    expect(submitEvents).toHaveLength(1)
    expect(submitEvents?.[0]).toEqual([{ name: 'Djamware' }])
})

it('does not emit submit when form is not submitted', () => {
    const wrapper = mount(UserForm)

    expect(wrapper.emitted('submit')).toBeUndefined()
})

