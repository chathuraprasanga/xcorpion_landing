import {
    Button,
    Group,
    Paper,
    SimpleGrid,
    Text,
    Textarea,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { ContactIconsList } from "./ContactIcons";
import classes from "./GetInTouch.module.css";
import { showNotification } from "@mantine/notifications";

export function GetInTouch() {
    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validate: {
            name: (value) => (value.trim().length === 0 ? "Name is required" : null),
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email address",
            subject: (value) =>
                value.trim().length === 0 ? "Subject is required" : null,
            message: (value) =>
                value.trim().length === 0 ? "Message is required" : null,
        },
    });

    const sendEmail = (values: any) => {
        console.log("Form Values:", values);

        form.reset();

        showNotification({
            title: "Success",
            message: "Your message has been sent successfully!",
            color: "green",
        });
    };

    return (
        <Paper radius="lg" mx="2xl" mt="lg" className="justify-items-center">
            <div className={classes.wrapper}>
                <div
                    className={classes.contacts}
                    style={{ backgroundImage: 'url("../bg.jpg")' }}
                >
                    <Text fz="lg" fw={700} className={classes.title} c="#fff">
                        Contact information
                    </Text>

                    <ContactIconsList />
                </div>

                <form
                    className={classes.form}
                    onSubmit={form.onSubmit((values) => sendEmail(values))}
                >
                    <Text fz="lg" fw={700} className={classes.title}>
                        Get in touch
                    </Text>

                    <div className={classes.fields}>
                        <SimpleGrid cols={2}>
                            <TextInput
                                label="Your name"
                                placeholder="Your name"
                                withAsterisk
                                {...form.getInputProps("name")}
                            />
                            <TextInput
                                label="Your email"
                                placeholder="hello@example.com"
                                withAsterisk
                                {...form.getInputProps("email")}

                            />
                        </SimpleGrid>

                        <TextInput
                            mt="md"
                            label="Subject"
                            placeholder="Subject"
                            withAsterisk
                            {...form.getInputProps("subject")}

                        />

                        <Textarea
                            mt="md"
                            label="Your message"
                            placeholder="Please include all relevant information"
                            minRows={3}
                            withAsterisk
                            {...form.getInputProps("message")}

                        />

                        <Group justify="flex-end" mt="md">
                            <Button type="submit" className={classes.control}>
                                Send message
                            </Button>
                        </Group>
                    </div>
                </form>
            </div>
        </Paper>
    );
}
