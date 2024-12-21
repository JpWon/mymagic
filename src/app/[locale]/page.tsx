import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Analytics } from '@vercel/analytics/react'; // Import Analytics

export async function generateMetadata(
	{ params: { locale } }: { params: { locale: string } }
) {
	const t = await getTranslations();
	const { home } = renderContent(t);
	const title = "Jerrold Primus | Business Intelligence Engineer, Data Analyst, and Entrepreneur";
	const description = "Welcome to the professional profile of Jerrold Primus, a seasoned Business Intelligence Engineer, Data Analyst, and Entrepreneur.";
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home(
	{ params: { locale } }: { params: { locale: string } }
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, newsletter } = renderContent(t);
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						"name": "Jerrold Primus",
						"jobTitle": "Business Intelligence Engineer, Data Analyst, Entrepreneur",
						"url": `https://${baseURL}`,
						"image": `${baseURL}${person.avatar}`,
						"description": "Jerrold Primus is a professional Business Intelligence Engineer, Data Analyst, and Entrepreneur with extensive experience in data-driven decision making.",
						"sameAs": [
							"https://www.linkedin.com/in/jprimus1/",
							"https://www.coursera.org/learner/primus1",
							"https://www.amazon.com/stores/DirectAudio/DirectAudio/page/AB4B8C74-A11F-483D-84F3-EE055669C5FB?ref_=cm_sw_r_cp_ud_ast_store_20KR7W0X3WT93DDR46FM",
							'https://www.facebook.com/directaudioapp/'
							// Add other social media or professional profiles if available
						]
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				paddingY="l" gap="m">
				<Flex
					direction="column"
					fillWidth maxWidth="s">
					<RevealFx
						translateY="4" fillWidth justifyContent="flex-start" paddingBottom="m">
						<Heading
							wrap="balance"
							variant="display-strong-l">
							{home.headline}
						</Heading>
					</RevealFx>
					<RevealFx
						translateY="8" delay={0.2} fillWidth justifyContent="flex-start" paddingBottom="m">
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							variant="heading-default-xl">
							{home.subline}
						</Text>
					</RevealFx>
					<RevealFx translateY="12" delay={0.4}>
						<Flex fillWidth>
							<Button
								id="about"
								data-border="rounded"
								href={`/${locale}/about`}
								variant="tertiary"
								size="m">
								<Flex
									gap="8"
									alignItems="center">
									{about.avatar.display && (
										<Avatar
											style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }}
											src={person.avatar}
											size="m" />
									)}
									{t("about.title")}
									<Arrow trigger="#about" />
								</Flex>
							</Button>
						</Flex>
					</RevealFx>
				</Flex>
			</Flex>
			<RevealFx translateY="16" delay={0.6}>
				<Projects range={[1, 1]} locale={locale} />
			</RevealFx>
			{routes['/blog'] && (
				<Flex
					fillWidth gap="24"
					mobileDirection="column">
					<Flex flex={1} paddingLeft="l">
						<Heading
							as="h2"
							variant="display-strong-xs"
							wrap="balance">
							Latest from the blog
						</Heading>
					</Flex>
					<Flex
						flex={3} paddingX="20">
						<Posts range={[1, 2]} columns="2" locale={locale} />
					</Flex>
				</Flex>
			)}
			<Projects range={[2]} locale={locale} />
			{newsletter.display &&
				<Mailchimp newsletter={newsletter} />
			}
			{/* Add the Analytics component */}
			<Analytics />
		</Flex>
	);
}

