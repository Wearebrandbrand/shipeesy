import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { isAuthenticated } from '../access/user'
import { slugField } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: isAuthenticated,
    delete: isAuthenticated,
    read: anyone,
    update: isAuthenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField({
      position: undefined,
    }),
  ],
}
