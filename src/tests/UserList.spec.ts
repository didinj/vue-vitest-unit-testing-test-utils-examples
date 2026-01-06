import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import UserList from '../components/UserList.vue'

describe('UserList.vue', () => {
    it('renders scoped slot with user data', () => {
        const wrapper = mount(UserList, {
            props: {
                users: [{ id: 1, name: 'Alice' }],
            },
            slots: {
                user: ({ user }: any) => `<strong>${user.name}</strong>`,
            },
        })

        expect(wrapper.html()).toContain('<strong>Alice</strong>')
    })

    it('renders fallback content when no slot is passed', () => {
        const wrapper = mount(UserList, {
            props: {
                users: [{ id: 1, name: 'Bob' }],
            },
        })

        expect(wrapper.text()).toContain('Bob')
    })
})

vi.mock('../services/api', () => ({
    fetchUser: vi.fn(() =>
        Promise.resolve({ id: 1, name: 'Mock User' })
    ),
}))
