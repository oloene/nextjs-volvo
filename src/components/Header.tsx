import { Group, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/router";
import { useViewportSize } from "@mantine/hooks";
import { breakpoints } from "../../public/breakpoints";

interface HeaderProps {
    carsByCategory: Record<string, number>;
}

const Header: React.FC<HeaderProps> = ({ carsByCategory }) => {
    const router = useRouter();
    const { width: viewPortWidth } = useViewportSize();

    const setFilterByCategory = (category: string) => {
        router.push(`/?q=${category}`);
    };

    const isMobile = viewPortWidth <= breakpoints.md;

    // Active when filter matches category or when no filter is set and category is "all"
    const isActive = (category: string) =>
        category === router?.query?.q ||
        (router?.query?.q == null && category === "all")
            ? "2px solid rgb(28, 107, 186)"
            : "2px solid transparent";

    return (
        <Stack mt="1rem" mb="2rem" align="center">
            <Title order={1} mb="0.5rem">
                Our models
            </Title>
            <Group spacing={isMobile ? 25 : 50}>
                {Object.entries(carsByCategory).map(([category, count]) => (
                    <UnstyledButton
                        key={category}
                        onClick={() => setFilterByCategory(category)}
                    >
                        <Text style={{ borderBottom: isActive(category) }}>
                            {category} <span>({count})</span>
                        </Text>
                    </UnstyledButton>
                ))}
            </Group>
        </Stack>
    );
};

export default Header;
