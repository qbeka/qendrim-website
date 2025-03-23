import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { getPosts } from '@/app/utils/utils'
import { AvatarGroup, Button, Flex, Heading, IconButton, SmartImage, Text } from '@/once-ui/components'
import { baseURL, renderContent } from '@/app/resources';
import { routing } from '@/i18n/routing';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { formatDate } from '@/app/utils/formatDate';

interface TestimonialParams {
	params: {
		slug: string;
		locale: string;
	};
}

export async function generateStaticParams() {
	const locales = routing.locales;

	// Create an array to store all posts from all locales
	const allPosts = [];

	// Fetch posts for each locale
	for (const locale of locales) {
		const posts = getPosts(['src', 'app', '[locale]', 'testimonials', 'testimonials', locale]);
		allPosts.push(...posts.map(post => ({
			slug: post.slug,
			locale: locale,
		})));
	}

	return allPosts;
}

export function generateMetadata({ params: { slug, locale } }: TestimonialParams) {
	let post = getPosts(['src', 'app', '[locale]', 'testimonials', 'testimonials', locale]).find((post) => post.slug === slug)

	if (!post) {
		return
	}

	let {
		title,
		publishedAt: publishedTime,
		summary: description,
		images,
		image,
		referral,
	} = post.metadata
	let ogImage = image
		? `https://${baseURL}${image}`
		: `https://${baseURL}/og?title=${title}`;

	return {
		title,
		description,
		images,
		referral,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://${baseURL}/${locale}/testimonials/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	}
}

export default function Project({ params }: TestimonialParams) {
	unstable_setRequestLocale(params.locale);
	let post = getPosts(['src', 'app', '[locale]', 'testimonials', 'testimonials', params.locale]).find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	const t = useTranslations();
	const { person } = renderContent(t);

	const avatars = post.metadata.referral?.map((person) => ({
		src: person.avatar,
	})) || [];

	return (
		<Flex as="section"
			fillWidth maxWidth="m"
			direction="column" alignItems="center"
			gap="l">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `https://${baseURL}${post.metadata.image}`
							: `https://${baseURL}/og?title=${post.metadata.title}`,
						url: `https://${baseURL}/${params.locale}/testimonials/${post.slug}`,
						author: {
							'@type': 'Person',
							name: person.name,
						},
					}),
				}}
			/>
			<Flex
				fillWidth maxWidth="xs" gap="16"
				direction="column">
				<Button
					href={`/${params.locale}/testimonials`}
					variant="tertiary"
					size="s"
					prefixIcon="chevronLeft">
					Testimonials
				</Button>
				<Heading
					variant="display-strong-s">
					{post.metadata.title}
				</Heading>
				<Flex direction="row" gap="s">
					<Text>{post.metadata.referral[0].role}</Text>
					<IconButton
						href={post.metadata.referral[0].linkedIn}
						icon={'linkedin'}
						tooltip={post.metadata.referral[0].name}
						size="s"
						variant="ghost" />
				</Flex>
			</Flex>
			<Flex direction="row">
				<Flex>
					{post.metadata.images.length > 0 && (
						<SmartImage
							aspectRatio="16 / 9"
							radius="m"
							alt="image"
							src={post.metadata.referral[0].avatar} />
					)}
				</Flex>
				<Flex style={{ margin: 'auto' }}
					as="article"
					maxWidth="xs" fillWidth
					direction="column">
					<Flex
						gap="12" marginBottom="24"
						alignItems="center">
						{post.metadata.referral && (
							<SmartImage
								aspectRatio="16 / 9"
								radius="m"
								alt="image"
								src={post.metadata.referral[0].avatar} />
						)}
					</Flex>
					<CustomMDX source={post.content} />
				</Flex>
			</Flex>
		</Flex>
	)
}