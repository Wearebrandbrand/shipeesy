import type { CollectionConfig } from 'payload'

import { isAdmin, isOwnUserDocument } from '../../access/user'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: isAdmin,
    create: isAdmin,
    delete: (...args) => isOwnUserDocument(...args) || isAdmin(...args),
    read: (...args) => isOwnUserDocument(...args) || isAdmin(...args),
    update: (...args) => isOwnUserDocument(...args) || isAdmin(...args),
  },
  admin: {
    defaultColumns: ['name', 'email', 'role'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: "email",
      type: "email",
    },
    {
      required: true,
      name: 'role',
      type: 'select',
      options: ["admin", "editor", "client"],
      hasMany: true,
    }
  ],
  timestamps: true,
}
