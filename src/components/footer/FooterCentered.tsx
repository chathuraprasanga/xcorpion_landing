import {
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Anchor, Box, Group, Text } from "@mantine/core";
import classes from "./FooterCentered.module.css";
import { useNavigate } from "react-router";

const links = [
    { link: "/contact-us", label: "Contact Us" },
    { link: "/privacy-policy", label: "Privacy Policy" },
    { link: "/terms-and-condition", label: "Terms and Condition" },
    { link: "/blogs", label: "Blog" },
    { link: "/careers", label: "Careers" },
];

export function FooterCentered() {
    const navigate = useNavigate();

    const items = links.map((link) => (
        <Anchor
            c="dimmed"
            lh={1}
            onClick={() => navigate(link.link)}
            size="sm"
            key={link.link}
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <div className="flex flex-row items-center">
                    <Box>
                        <img src="/logo.png" className="max-w-10" />
                    </Box>
                    <Text size="xl" mx="md" className="font-semibold">
                        XCORPION
                    </Text>
                </div>
                <Group className={classes.links}>{items}</Group>

                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandTwitter size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    );
}
