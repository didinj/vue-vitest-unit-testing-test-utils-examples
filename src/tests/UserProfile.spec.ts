import { describe, it, expect, vi } from "vitest";
import { mount } from '@vue/test-utils'
import UserProfile from '../components/UserProfile.vue'
import { fetchUser } from '../services/api'

vi.mock('../services/api', () => ({
    fetchUser: vi.fn(),
}))

it('shows loading state initially', () => {
    ; (fetchUser as any).mockResolvedValue({ name: 'Djamware' })

    const wrapper = mount(UserProfile)
    expect(wrapper.text()).toContain('Loading...')
})

it('renders user name after successful fetch', async () => {
    ; (fetchUser as any).mockResolvedValue({ name: 'Djamware' })

    const wrapper = mount(UserProfile)

    await Promise.resolve() // wait for onMounted
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Djamware')
})

it('shows error message when API fails', async () => {
    ; (fetchUser as any).mockRejectedValue(new Error('API error'))

    const wrapper = mount(UserProfile)

    await Promise.resolve()
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Failed to load user')
})