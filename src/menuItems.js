export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Resources',
    url: '/services',
    submenu: [
      {
        title: 'Helplines',
        url: 'web-design',
      },
      {
        title: 'Gov. of India',
        url: 'web-dev',
        submenu: [
          {
            title: 'Frontend',
            url: 'frontend',
          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'NodeJS',
                url: 'node',
              },
              {
                title: 'PHP',
                url: 'php',
              },
            ],
          },
        ],
      },
      {
        title: 'NGOs',
        url: 'seo',
      },
    ],
  },
  {
    title: 'Social',
    url: '/about',
    submenu: [
      {
        title: 'Find help groups',
        url: 'who-we-are',
      },
      {
        title: 'Blogs',
        url: 'our-values',
      },
    ],
  },
  {
    title: 'Contact',
    url: 'contact',
  },
  {
    title: 'Sign Up',
    url: 'sign-up', // Replace with the actual URL for your sign-up page
    isCTA: true,   // Add a flag to identify this as a CTA button
  },
];
