import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'

export type isUser = (args: AccessArgs<User>) => boolean

// In the users collection, the ID of the document is the same as the user's ID
export const isOwnUserDocument: isUser = ({ req: { user }, id }) => {
  return Boolean(user) && Boolean(user?.id === id)
}

export const isAuthenticated: isUser = ({ req: { user } }) => {
  return Boolean(user)
}

export const isAdmin: isUser = ({ req: { user } }) => {
  return Boolean(user?.role.includes('admin'))
}

export const isEditor: isUser = ({ req: { user } }) => {
  return Boolean(user?.role.includes('editor'))
}

export const isClient: isUser = ({ req: { user } }) => {
  return Boolean(user?.role.includes('client'))
}
