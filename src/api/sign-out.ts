import { api } from '@/lib/axios'

export function signOut() {
  return api.post('/sign-out')
}
