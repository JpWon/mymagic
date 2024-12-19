"use client";

import { Flex, Heading, Text, Background } from '@/once-ui/components';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { mailchimp } from '@/app/resources';

export const Mailchimp = ({ newsletter }) => {
    const t = useTranslations();

    return (
        <Flex
            style={{overflow: 'hidden'}}
            position="relative" fillWidth padding="xl" radius="l" marginBottom="m"
            direction="column" alignItems="center" align="center"
            background="surface" border="neutral-medium" borderStyle="solid-1">
            <Background
                position="absolute"
                mask={mailchimp.effects.mask as any}
                gradient={mailchimp.effects.gradient as any}
                dots={mailchimp.effects.dots as any}
                lines={mailchimp.effects.lines as any}
            />
            <Heading style={{position: 'relative'}}
                marginBottom="s"
                variant="display-strong-xs">
                {newsletter.title}
            </Heading>
            <Text
                style={{
                    position: 'relative',
                    maxWidth: 'var(--responsive-width-xs)'
                }}
                wrap="balance"
                marginBottom="l"
                onBackground="neutral-medium">
                {newsletter.description}
            </Text>
            
            {/* Embed the iframe and script here */}
            <div
                style={{width: '100%'}}
                dangerouslySetInnerHTML={{
                    __html: `<iframe style="border:none;width:100%;" id="subscribe-to-jerrolds-newsletter-iapqec" src="https://opnform.com/forms/subscribe-to-jerrolds-newsletter-iapqec"></iframe>
                    <script type="text/javascript" onload="initEmbed('subscribe-to-jerrolds-newsletter-iapqec')" src="https://opnform.com/widgets/iframe.min.js"></script>`
                }}
            />
        </Flex>
    );
};
