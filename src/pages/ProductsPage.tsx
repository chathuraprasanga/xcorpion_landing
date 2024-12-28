import { BadgeCard } from "../components/badgeCard/BadgeCard.tsx";
import { Box, Grid } from "@mantine/core";

const ProductsPage = () => {
    return(
        <Box my="lg" mx="lg">
            <Grid>
                <Grid.Col span={{ lg:4, sm:12}}>
                    <BadgeCard />
                </Grid.Col>
            </Grid>
        </Box>

    )
};

export default ProductsPage;
