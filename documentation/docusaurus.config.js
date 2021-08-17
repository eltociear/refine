/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
    title: "Refine",
    tagline: "Refine. Reimagined.",
    url: "https://pankod.github.io",
    baseUrl: "/",
    projectName: "refine",
    organizationName: "pankod",
    favicon: "img/refine_favicon.png",
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    path: "./docs",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/pankod/refine/tree/master/documentation",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    themeConfig: {
        image: "img/footer_icon.png",
        algolia: {
            apiKey: "fbebca5afe7376dbef2995691670b708",
            indexName: "refine",
        },
        navbar: {
            logo: {
                alt: "refine",
                src: "img/refine_logo.png",
            },
            items: [
                {
                    to: "docs/guides-and-concepts/upload/multipart-upload",
                    label: "Guides",
                    position: "left",
                    className: "header-first-nav-item",
                },
                { to: "docs", label: "Tutorial", position: "left" },
                {
                    to: "/docs/api-references/providers/auth-provider",
                    label: "API",
                    position: "left",
                },
                {
                    to: "docs/getting-started/overview",
                    label: "Quickstart",
                    position: "left",
                },
                {
                    href: "https://github.com/pankod/refine",
                    position: "right",
                    className: "header-icon-link header-github-link",
                },
                {
                    href: "https://discord.gg/qkhjCsJFrp",
                    position: "right",
                    className: "header-icon-link header-discord-link",
                },
                {
                    href: "https://twitter.com/PankodDev",
                    position: "right",
                    className:
                        "header-icon-link header-twitter-link header-last-nav-item",
                },
            ],
        },
        // footer: {
        //     style: "dark",
        //     links: [
        //         {
        //             title: "Docs",
        //             items: [],
        //         },
        //         {
        //             title: "Community",
        //             items: [
        //                 {
        //                     label: "Twitter",
        //                     href: "https://twitter.com/PankodDev",
        //                 },
        //             ],
        //         },
        //         {
        //             title: "More",
        //             items: [
        //                 {
        //                     label: "GitHub",
        //                     href: "https://github.com/pankod/refine",
        //                 },
        //                 {
        //                     html: `
        //           <a href="https://github.com/pankod/refine" target="_blank" rel="noreferrer noopener" aria-label="Star this project on GitHub">
        //             <img src="https://img.shields.io/github/stars/pankod/refine?logo=reverbnation&logoColor=white" alt="github-stars" />
        //           </a>
        //         `,
        //                 },
        //             ],
        //         },
        //     ],
        //     logo: {
        //         alt: "Pankod Logo",
        //         src: "img/pankod_footer_logo.png",
        //         href: "https://github.com/pankod",
        //     },
        //     copyright: `Copyright © ${new Date().getFullYear()} Pankod, Inc.`,
        // },
    },
};

module.exports = siteConfig;
