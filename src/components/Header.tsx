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

    const handleOnClick = (filterBy: string) => {
        router.push(`/?q=${filterBy}`);
    };

    const isMobile = viewPortWidth <= breakpoints.md;

    return (
        <Stack my="4rem" align="center">
            <Title order={1} mb="1rem">
                Our models
            </Title>
            <Group spacing={isMobile ? 25 : 50}>
                {Object.entries(carsByCategory).map(([category, count]) => (
                    <UnstyledButton
                        key={category}
                        onClick={() => handleOnClick(category)}
                    >
                        <Text
                            style={{
                                borderBottom:
                                    category === router?.query?.q
                                        ? "2px solid rgb(28, 107, 186)"
                                        : "2px solid transparent",
                            }}
                        >
                            {category} <span>({count})</span>
                        </Text>
                    </UnstyledButton>
                ))}
            </Group>
        </Stack>
    );
};

export default Header;
