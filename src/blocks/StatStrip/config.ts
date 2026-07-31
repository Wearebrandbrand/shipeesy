import type { Block } from 'payload'

export const StatStripBlock: Block = {
  slug: 'statStripBlock',
  interfaceName: 'StatStripBlock',
  fields: [
    {
      name: 'stats',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
      minRows: 1,
      maxRows: 4,
      required: true,
    },
  ],
}
