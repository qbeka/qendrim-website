import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {},
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    async rewrites() {
        return [
            {
                source: '/work/autofill/privacy.html',
                destination: '/work/autofill/privacy',
            },
            {
                source: '/work/autofill/terms.html',
                destination: '/work/autofill/terms',
            },
        ];
    },
};

export default withNextIntl(withMDX(nextConfig));