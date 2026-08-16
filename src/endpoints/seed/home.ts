import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
return {
    createdAt: '2026-07-27T08:01:29.294Z',
    updatedAt: '2026-07-31T08:35:36.577Z',
    title: 'Home',
    hero: {
        type: 'highImpact',
        richText: {
            root: {
                type: 'root',
                children: [
                    {
                        type: 'heading',
                        children: [
                            {
                                type: 'text',
                                detail: 0,
                                format: 0,
                                mode: 'normal',
                                style: '',
                                text: 'Payload Website Template',
                                version: 1
                            }
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                        tag: 'h1',
                        version: 1
                    },
                    {
                        type: 'paragraph',
                        children: [
                            {
                                type: 'link',
                                children: [
                                    {
                                        type: 'text',
                                        detail: 0,
                                        format: 0,
                                        mode: 'normal',
                                        style: '',
                                        text: 'Visit the admin dashboard',
                                        version: 1
                                    }
                                ],
                                direction: 'ltr',
                                fields: {
                                    linkType: 'custom',
                                    newTab: false,
                                    url: '/admin'
                                },
                                format: '',
                                indent: 0,
                                version: 3
                            },
                            {
                                type: 'text',
                                detail: 0,
                                format: 0,
                                mode: 'normal',
                                style: '',
                                text: ' to begin managing this site\'s content. The code for this template is completely open-source and can be found ',
                                version: 1
                            },
                            {
                                type: 'link',
                                children: [
                                    {
                                        type: 'text',
                                        detail: 0,
                                        format: 0,
                                        mode: 'normal',
                                        style: '',
                                        text: 'on our Github',
                                        version: 1
                                    }
                                ],
                                direction: 'ltr',
                                fields: {
                                    linkType: 'custom',
                                    newTab: true,
                                    url: 'https://github.com/payloadcms/payload/tree/3.x/templates/website'
                                },
                                format: '',
                                indent: 0,
                                version: 3
                            },
                            {
                                type: 'text',
                                detail: 0,
                                format: 0,
                                mode: 'normal',
                                style: '',
                                text: '. ',
                                version: 1
                            }
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                        textFormat: 0,
                        version: 1
                    }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1
            }
        },
        links: [
            {
                link: {
                    type: 'custom',
                    url: '/posts',
                    label: 'All posts',
                    appearance: 'default'
                },
                id: '6a671059ef24bacdf7ac4f72'
            },
            {
                link: {
                    type: 'custom',
                    url: '/contact',
                    label: 'Contact',
                    appearance: 'outline'
                },
                id: '6a671059ef24bacdf7ac4f73'
            }
        ],
        media: '6a6710591e786b326c894d60'
    },
    layout: [
        {
            blockType: 'statStripBlock',
            stats: [
                {
                    label: 'zendingen geboekt',
                    value: '12.000+',
                    id: '6a6c5e215c92010112a915cb'
                },
                {
                    label: 'klantbeoordelingen',
                    value: '4,8/5',
                    id: '6a6c5e415c92010112a915cd'
                }
            ],
            id: '6a6c5e185c92010112a915c9'
        },
        {
            blockType: 'content',
            columns: [
                {
                    size: 'full',
                    richText: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'heading',
                                    children: [
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: 'Core features',
                                            version: 1
                                        }
                                    ],
                                    direction: 'ltr',
                                    format: '',
                                    indent: 0,
                                    tag: 'h2',
                                    version: 1
                                }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1
                        }
                    },
                    link: {
                        type: 'reference',
                        appearance: 'default'
                    },
                    id: '6a671059ef24bacdf7ac4f74'
                },
                {
                    size: 'oneThird',
                    richText: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'heading',
                                    children: [
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: 'Admin Dashboard',
                                            version: 1
                                        }
                                    ],
                                    direction: 'ltr',
                                    format: '',
                                    indent: 0,
                                    tag: 'h3',
                                    version: 1
                                },
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: 'Manage this site\'s pages and posts from the ',
                                            version: 1
                                        },
                                        {
                                            type: 'link',
                                            children: [
                                                {
                                                    type: 'text',
                                                    detail: 0,
                                                    format: 0,
                                                    mode: 'normal',
                                                    style: '',
                                                    text: 'admin dashboard',
                                                    version: 1
                                                }
                                            ],
                                            direction: 'ltr',
                                            fields: {
                                                linkType: 'custom',
                                                newTab: false,
                                                url: '/admin'
                                            },
                                            format: '',
                                            indent: 0,
                                            version: 2
                                        },
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: '.',
                                            version: 1
                                        }
                                    ],
                                    direction: 'ltr',
                                    format: '',
                                    indent: 0,
                                    textFormat: 0,
                                    version: 1
                                }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1
                        }
                    },
                    enableLink: false,
                    link: {
                        type: 'reference',
                        appearance: 'default'
                    },
                    id: '6a671059ef24bacdf7ac4f75'
                },
                {
                    size: 'oneThird',
                    richText: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'heading',
                                    children: [
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: 'Preview',
                                            version: 1
                                        }
                                    ],
                                    direction: 'ltr',
                                    format: '',
                                    indent: 0,
                                    tag: 'h3',
                                    version: 1
                                },
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: 'Using versions, drafts, and preview, editors can review and share their changes before publishing them.',
                                            version: 1
                                        }
                                    ],
                                    direction: 'ltr',
                                    format: '',
                                    indent: 0,
                                    textFormat: 0,
                                    version: 1
                                }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1
                        }
                    },
                    enableLink: false,
                    link: {
                        type: 'reference',
                        appearance: 'default'
                    },
                    id: '6a671059ef24bacdf7ac4f76'
                },
                {
                    size: 'oneThird',
                    richText: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'heading',
                                    children: [
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: 'Page Builder',
                                            version: 1
                                        }
                                    ],
                                    direction: 'ltr',
                                    format: '',
                                    indent: 0,
                                    tag: 'h3',
                                    version: 1
                                },
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: 'Custom page builder allows you to create unique page, post, and project layouts for any type of content.',
                                            version: 1
                                        }
                                    ],
                                    direction: 'ltr',
                                    format: '',
                                    indent: 0,
                                    textFormat: 0,
                                    version: 1
                                }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1
                        }
                    },
                    enableLink: false,
                    link: {
                        type: 'reference',
                        appearance: 'default'
                    },
                    id: '6a671059ef24bacdf7ac4f77'
                },
                {
                    size: 'oneThird',
                    richText: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'heading',
                                    children: [
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: 'SEO',
                                            version: 1
                                        }
                                    ],
                                    direction: 'ltr',
                                    format: '',
                                    indent: 0,
                                    tag: 'h3',
                                    version: 1
                                },
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: 'Editors have complete control over SEO data and site content directly from the ',
                                            version: 1
                                        },
                                        {
                                            type: 'link',
                                            children: [
                                                {
                                                    type: 'text',
                                                    detail: 0,
                                                    format: 0,
                                                    mode: 'normal',
                                                    style: '',
                                                    text: 'admin dashboard',
                                                    version: 1
                                                }
                                            ],
                                            direction: 'ltr',
                                            fields: {
                                                linkType: 'custom',
                                                newTab: false,
                                                url: '/admin'
                                            },
                                            format: '',
                                            indent: 0,
                                            version: 2
                                        },
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: '.',
                                            version: 1
                                        }
                                    ],
                                    direction: 'ltr',
                                    format: '',
                                    indent: 0,
                                    textFormat: 0,
                                    version: 1
                                }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1
                        }
                    },
                    enableLink: false,
                    link: {
                        type: 'reference',
                        appearance: 'default'
                    },
                    id: '6a671059ef24bacdf7ac4f78'
                },
                {
                    size: 'oneThird',
                    richText: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'heading',
                                    children: [
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: 'Dark Mode',
                                            version: 1
                                        }
                                    ],
                                    direction: 'ltr',
                                    format: '',
                                    indent: 0,
                                    tag: 'h3',
                                    version: 1
                                },
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: 'Users will experience this site in their preferred color scheme and each block can be inverted.',
                                            version: 1
                                        }
                                    ],
                                    direction: 'ltr',
                                    format: '',
                                    indent: 0,
                                    textFormat: 0,
                                    version: 1
                                }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1
                        }
                    },
                    enableLink: false,
                    link: {
                        type: 'reference',
                        appearance: 'default'
                    },
                    id: '6a671059ef24bacdf7ac4f79'
                }
            ],
            id: '6a671059ef24bacdf7ac4f7a',
            blockName: 'Content Block'
        },
        {
            blockType: 'mediaBlock',
            media: ObjectId('6a6710581e786b326c894d5c'),
            id: '6a671059ef24bacdf7ac4f7b',
            blockName: 'Media Block'
        },
        {
            blockType: 'archive',
            introContent: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'heading',
                            children: [
                                {
                                    type: 'text',
                                    detail: 0,
                                    format: 0,
                                    mode: 'normal',
                                    style: '',
                                    text: 'Recent posts',
                                    version: 1
                                }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            tag: 'h3',
                            version: 1
                        },
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    detail: 0,
                                    format: 0,
                                    mode: 'normal',
                                    style: '',
                                    text: 'The posts below are displayed in an "Archive" layout building block which is an extremely powerful way to display documents on a page. It can be auto-populated by collection or by category, or posts can be individually selected. Pagination controls will automatically appear if the number of results exceeds the number of items per page.',
                                    version: 1
                                }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            textFormat: 0,
                            version: 1
                        }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    version: 1
                }
            },
            populateBy: 'collection',
            relationTo: 'posts',
            categories: [],
            limit: 10,
            id: '6a671059ef24bacdf7ac4f7c',
            blockName: 'Archive Block'
        },
        {
            blockType: 'cta',
            richText: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'heading',
                            children: [
                                {
                                    type: 'text',
                                    detail: 0,
                                    format: 0,
                                    mode: 'normal',
                                    style: '',
                                    text: 'This is a call to action',
                                    version: 1
                                }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            tag: 'h3',
                            version: 1
                        },
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    detail: 0,
                                    format: 0,
                                    mode: 'normal',
                                    style: '',
                                    text: 'This is a custom layout building block ',
                                    version: 1
                                },
                                {
                                    type: 'link',
                                    children: [
                                        {
                                            type: 'text',
                                            detail: 0,
                                            format: 0,
                                            mode: 'normal',
                                            style: '',
                                            text: 'configured in the admin dashboard',
                                            version: 1
                                        }
                                    ],
                                    direction: 'ltr',
                                    fields: {
                                        linkType: 'custom',
                                        newTab: false,
                                        url: '/admin'
                                    },
                                    format: '',
                                    indent: 0,
                                    version: 2
                                },
                                {
                                    type: 'text',
                                    detail: 0,
                                    format: 0,
                                    mode: 'normal',
                                    style: '',
                                    text: '.',
                                    version: 1
                                }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            textFormat: 0,
                            version: 1
                        }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    version: 1
                }
            },
            links: [
                {
                    link: {
                        type: 'custom',
                        url: '/posts',
                        label: 'All posts',
                        appearance: 'default'
                    },
                    id: '6a671059ef24bacdf7ac4f7d'
                }
            ],
            id: '6a671059ef24bacdf7ac4f7e',
            blockName: 'CTA'
        }
    ],
    meta: {
        title: 'Payload Website Template',
        image: '6a6710591e786b326c894d60',
        description: 'An open-source website built with Payload and Next.js.'
    },
    generateSlug: false,
    slug: 'home',
    _status: 'published',
    __v: 0,
    publishedAt: '2026-07-31T08:34:32.672Z'
}
  // return {
  //   slug: 'home',
  //   _status: 'published',
  //   hero: {
  //     type: 'highImpact',
  //     links: [
  //       {
  //         link: {
  //           type: 'custom',
  //           appearance: 'default',
  //           label: 'All posts',
  //           url: '/posts',
  //         },
  //       },
  //       {
  //         link: {
  //           type: 'custom',
  //           appearance: 'outline',
  //           label: 'Contact',
  //           url: '/contact',
  //         },
  //       },
  //     ],
  //     media: heroImage.id,
  //     richText: {
  //       root: {
  //         type: 'root',
  //         children: [
  //           {
  //             type: 'heading',
  //             children: [
  //               {
  //                 type: 'text',
  //                 detail: 0,
  //                 format: 0,
  //                 mode: 'normal',
  //                 style: '',
  //                 text: 'Payload Website Template',
  //                 version: 1,
  //               },
  //             ],
  //             direction: 'ltr',
  //             format: '',
  //             indent: 0,
  //             tag: 'h1',
  //             version: 1,
  //           },
  //           {
  //             type: 'paragraph',
  //             children: [
  //               {
  //                 type: 'link',
  //                 children: [
  //                   {
  //                     type: 'text',
  //                     detail: 0,
  //                     format: 0,
  //                     mode: 'normal',
  //                     style: '',
  //                     text: 'Visit the admin dashboard',
  //                     version: 1,
  //                   },
  //                 ],
  //                 direction: 'ltr',
  //                 fields: {
  //                   linkType: 'custom',
  //                   newTab: false,
  //                   url: '/admin',
  //                 },
  //                 format: '',
  //                 indent: 0,
  //                 version: 3,
  //               },
  //               {
  //                 type: 'text',
  //                 detail: 0,
  //                 format: 0,
  //                 mode: 'normal',
  //                 style: '',
  //                 text: " to begin managing this site's content. The code for this template is completely open-source and can be found ",
  //                 version: 1,
  //               },
  //               {
  //                 type: 'link',
  //                 children: [
  //                   {
  //                     type: 'text',
  //                     detail: 0,
  //                     format: 0,
  //                     mode: 'normal',
  //                     style: '',
  //                     text: 'on our Github',
  //                     version: 1,
  //                   },
  //                 ],
  //                 direction: 'ltr',
  //                 fields: {
  //                   linkType: 'custom',
  //                   newTab: true,
  //                   url: 'https://github.com/payloadcms/payload/tree/3.x/templates/website',
  //                 },
  //                 format: '',
  //                 indent: 0,
  //                 version: 3,
  //               },
  //               {
  //                 type: 'text',
  //                 detail: 0,
  //                 format: 0,
  //                 mode: 'normal',
  //                 style: '',
  //                 text: '. ',
  //                 version: 1,
  //               },
  //             ],
  //             direction: 'ltr',
  //             format: '',
  //             indent: 0,
  //             textFormat: 0,
  //             version: 1,
  //           },
  //         ],
  //         direction: 'ltr',
  //         format: '',
  //         indent: 0,
  //         version: 1,
  //       },
  //     },
  //   },
  //   layout: [
  //     {
  //       blockName: 'Content Block',
  //       blockType: 'content',
  //       columns: [
  //         {
  //           richText: {
  //             root: {
  //               type: 'root',
  //               children: [
  //                 {
  //                   type: 'heading',
  //                   children: [
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: 'Core features',
  //                       version: 1,
  //                     },
  //                   ],
  //                   direction: 'ltr',
  //                   format: '',
  //                   indent: 0,
  //                   tag: 'h2',
  //                   version: 1,
  //                 },
  //               ],
  //               direction: 'ltr',
  //               format: '',
  //               indent: 0,
  //               version: 1,
  //             },
  //           },
  //           size: 'full',
  //         },
  //         {
  //           enableLink: false,
  //           richText: {
  //             root: {
  //               type: 'root',
  //               children: [
  //                 {
  //                   type: 'heading',
  //                   children: [
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: 'Admin Dashboard',
  //                       version: 1,
  //                     },
  //                   ],
  //                   direction: 'ltr',
  //                   format: '',
  //                   indent: 0,
  //                   tag: 'h3',
  //                   version: 1,
  //                 },
  //                 {
  //                   type: 'paragraph',
  //                   children: [
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: "Manage this site's pages and posts from the ",
  //                       version: 1,
  //                     },
  //                     {
  //                       type: 'link',
  //                       children: [
  //                         {
  //                           type: 'text',
  //                           detail: 0,
  //                           format: 0,
  //                           mode: 'normal',
  //                           style: '',
  //                           text: 'admin dashboard',
  //                           version: 1,
  //                         },
  //                       ],
  //                       direction: 'ltr',
  //                       fields: {
  //                         linkType: 'custom',
  //                         newTab: false,
  //                         url: '/admin',
  //                       },
  //                       format: '',
  //                       indent: 0,
  //                       version: 2,
  //                     },
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: '.',
  //                       version: 1,
  //                     },
  //                   ],
  //                   direction: 'ltr',
  //                   format: '',
  //                   indent: 0,
  //                   textFormat: 0,
  //                   version: 1,
  //                 },
  //               ],
  //               direction: 'ltr',
  //               format: '',
  //               indent: 0,
  //               version: 1,
  //             },
  //           },
  //           size: 'oneThird',
  //         },
  //         {
  //           enableLink: false,
  //           richText: {
  //             root: {
  //               type: 'root',
  //               children: [
  //                 {
  //                   type: 'heading',
  //                   children: [
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: 'Preview',
  //                       version: 1,
  //                     },
  //                   ],
  //                   direction: 'ltr',
  //                   format: '',
  //                   indent: 0,
  //                   tag: 'h3',
  //                   version: 1,
  //                 },
  //                 {
  //                   type: 'paragraph',
  //                   children: [
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: 'Using versions, drafts, and preview, editors can review and share their changes before publishing them.',
  //                       version: 1,
  //                     },
  //                   ],
  //                   direction: 'ltr',
  //                   format: '',
  //                   indent: 0,
  //                   textFormat: 0,
  //                   version: 1,
  //                 },
  //               ],
  //               direction: 'ltr',
  //               format: '',
  //               indent: 0,
  //               version: 1,
  //             },
  //           },
  //           size: 'oneThird',
  //         },
  //         {
  //           enableLink: false,
  //           richText: {
  //             root: {
  //               type: 'root',
  //               children: [
  //                 {
  //                   type: 'heading',
  //                   children: [
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: 'Page Builder',
  //                       version: 1,
  //                     },
  //                   ],
  //                   direction: 'ltr',
  //                   format: '',
  //                   indent: 0,
  //                   tag: 'h3',
  //                   version: 1,
  //                 },
  //                 {
  //                   type: 'paragraph',
  //                   children: [
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: 'Custom page builder allows you to create unique page, post, and project layouts for any type of content.',
  //                       version: 1,
  //                     },
  //                   ],
  //                   direction: 'ltr',
  //                   format: '',
  //                   indent: 0,
  //                   textFormat: 0,
  //                   version: 1,
  //                 },
  //               ],
  //               direction: 'ltr',
  //               format: '',
  //               indent: 0,
  //               version: 1,
  //             },
  //           },
  //           size: 'oneThird',
  //         },
  //         {
  //           enableLink: false,
  //           richText: {
  //             root: {
  //               type: 'root',
  //               children: [
  //                 {
  //                   type: 'heading',
  //                   children: [
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: 'SEO',
  //                       version: 1,
  //                     },
  //                   ],
  //                   direction: 'ltr',
  //                   format: '',
  //                   indent: 0,
  //                   tag: 'h3',
  //                   version: 1,
  //                 },
  //                 {
  //                   type: 'paragraph',
  //                   children: [
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: 'Editors have complete control over SEO data and site content directly from the ',
  //                       version: 1,
  //                     },
  //                     {
  //                       type: 'link',
  //                       children: [
  //                         {
  //                           type: 'text',
  //                           detail: 0,
  //                           format: 0,
  //                           mode: 'normal',
  //                           style: '',
  //                           text: 'admin dashboard',
  //                           version: 1,
  //                         },
  //                       ],
  //                       direction: 'ltr',
  //                       fields: {
  //                         linkType: 'custom',
  //                         newTab: false,
  //                         url: '/admin',
  //                       },
  //                       format: '',
  //                       indent: 0,
  //                       version: 2,
  //                     },
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: '.',
  //                       version: 1,
  //                     },
  //                   ],
  //                   direction: 'ltr',
  //                   format: '',
  //                   indent: 0,
  //                   textFormat: 0,
  //                   version: 1,
  //                 },
  //               ],
  //               direction: 'ltr',
  //               format: '',
  //               indent: 0,
  //               version: 1,
  //             },
  //           },
  //           size: 'oneThird',
  //         },
  //         {
  //           enableLink: false,
  //           richText: {
  //             root: {
  //               type: 'root',
  //               children: [
  //                 {
  //                   type: 'heading',
  //                   children: [
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: 'Dark Mode',
  //                       version: 1,
  //                     },
  //                   ],
  //                   direction: 'ltr',
  //                   format: '',
  //                   indent: 0,
  //                   tag: 'h3',
  //                   version: 1,
  //                 },
  //                 {
  //                   type: 'paragraph',
  //                   children: [
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: 'Users will experience this site in their preferred color scheme and each block can be inverted.',
  //                       version: 1,
  //                     },
  //                   ],
  //                   direction: 'ltr',
  //                   format: '',
  //                   indent: 0,
  //                   textFormat: 0,
  //                   version: 1,
  //                 },
  //               ],
  //               direction: 'ltr',
  //               format: '',
  //               indent: 0,
  //               version: 1,
  //             },
  //           },
  //           size: 'oneThird',
  //         },
  //       ],
  //     },
  //     {
  //       blockName: 'Media Block',
  //       blockType: 'mediaBlock',
  //       media: metaImage.id,
  //     },
  //     {
  //       blockName: 'Archive Block',
  //       blockType: 'archive',
  //       categories: [],
  //       introContent: {
  //         root: {
  //           type: 'root',
  //           children: [
  //             {
  //               type: 'heading',
  //               children: [
  //                 {
  //                   type: 'text',
  //                   detail: 0,
  //                   format: 0,
  //                   mode: 'normal',
  //                   style: '',
  //                   text: 'Recent posts',
  //                   version: 1,
  //                 },
  //               ],
  //               direction: 'ltr',
  //               format: '',
  //               indent: 0,
  //               tag: 'h3',
  //               version: 1,
  //             },
  //             {
  //               type: 'paragraph',
  //               children: [
  //                 {
  //                   type: 'text',
  //                   detail: 0,
  //                   format: 0,
  //                   mode: 'normal',
  //                   style: '',
  //                   text: 'The posts below are displayed in an "Archive" layout building block which is an extremely powerful way to display documents on a page. It can be auto-populated by collection or by category, or posts can be individually selected. Pagination controls will automatically appear if the number of results exceeds the number of items per page.',
  //                   version: 1,
  //                 },
  //               ],
  //               direction: 'ltr',
  //               format: '',
  //               indent: 0,
  //               textFormat: 0,
  //               version: 1,
  //             },
  //           ],
  //           direction: 'ltr',
  //           format: '',
  //           indent: 0,
  //           version: 1,
  //         },
  //       },
  //       populateBy: 'collection',
  //       relationTo: 'posts',
  //     },
  //     {
  //       blockName: 'CTA',
  //       blockType: 'cta',
  //       links: [
  //         {
  //           link: {
  //             type: 'custom',
  //             appearance: 'default',
  //             label: 'All posts',
  //             url: '/posts',
  //           },
  //         },
  //       ],
  //       richText: {
  //         root: {
  //           type: 'root',
  //           children: [
  //             {
  //               type: 'heading',
  //               children: [
  //                 {
  //                   type: 'text',
  //                   detail: 0,
  //                   format: 0,
  //                   mode: 'normal',
  //                   style: '',
  //                   text: 'This is a call to action',
  //                   version: 1,
  //                 },
  //               ],
  //               direction: 'ltr',
  //               format: '',
  //               indent: 0,
  //               tag: 'h3',
  //               version: 1,
  //             },
  //             {
  //               type: 'paragraph',
  //               children: [
  //                 {
  //                   type: 'text',
  //                   detail: 0,
  //                   format: 0,
  //                   mode: 'normal',
  //                   style: '',
  //                   text: 'This is a custom layout building block ',
  //                   version: 1,
  //                 },
  //                 {
  //                   type: 'link',
  //                   children: [
  //                     {
  //                       type: 'text',
  //                       detail: 0,
  //                       format: 0,
  //                       mode: 'normal',
  //                       style: '',
  //                       text: 'configured in the admin dashboard',
  //                       version: 1,
  //                     },
  //                   ],
  //                   direction: 'ltr',
  //                   fields: {
  //                     linkType: 'custom',
  //                     newTab: false,
  //                     url: '/admin',
  //                   },
  //                   format: '',
  //                   indent: 0,
  //                   version: 2,
  //                 },
  //                 {
  //                   type: 'text',
  //                   detail: 0,
  //                   format: 0,
  //                   mode: 'normal',
  //                   style: '',
  //                   text: '.',
  //                   version: 1,
  //                 },
  //               ],
  //               direction: 'ltr',
  //               format: '',
  //               indent: 0,
  //               textFormat: 0,
  //               version: 1,
  //             },
  //           ],
  //           direction: 'ltr',
  //           format: '',
  //           indent: 0,
  //           version: 1,
  //         },
  //       },
  //     },
  //   ],
  //   meta: {
  //     description: 'An open-source website built with Payload and Next.js.',
  //     image: heroImage.id,
  //     title: 'Payload Website Template',
  //   },
  //   title: 'Home',
  // }
}
