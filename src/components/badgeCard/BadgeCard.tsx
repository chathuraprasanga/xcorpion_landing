import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import classes from './Badgecard.module.css';
import image from '../../../public/wd-app.jpg';

const mockdata = {
    image: image,
    title: 'Wijekoon Enterprises',
    country: 'Sri Lanka',
    description:
        'Web Application to do day to day business operations of the distribution company in the northwest province of Sri Lanka',
    badges: [
        { emoji: '☀️', label: 'Customers' },
        { emoji: '🦓', label: 'Products' },
        { emoji: '🌊', label: 'Suppliers' },
        { emoji: '🌲', label: 'Cheques' },
        { emoji: '🤽', label: 'Invoices' },
    ],
    link: "https://wd-app.xcorpion.xyz"
};


export function BadgeCard() {
    const { image, title, description, country, badges, link } = mockdata;
    const features = badges.map((badge) => (
        <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
            {badge.label}
        </Badge>
    ));

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image src={image} alt={title}/>
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group justify="apart">
                    <Text fz="lg" fw={500}>
                        {title}
                    </Text>
                    <Badge size="sm" variant="light">
                        {country}
                    </Badge>
                </Group>
                <Text fz="sm" mt="xs">
                    {description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Perfect for you, if you enjoy
                </Text>
                <Group gap={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>

            <Group mt="xs">
                <Button
                    radius="md"
                    style={{ flex: 1 }}
                    onClick={() => window.open(link, '_blank')}
                >
                    Open Link
                </Button>

            </Group>
        </Card>
    );
}