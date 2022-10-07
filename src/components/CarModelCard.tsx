import { Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import NextLink from "next/link";

import type { Car } from "../../public/api/types";

interface CarModelCardProps {
    car: Car;
    isMobile?: boolean;
}

const CarModelCard: React.FC<CarModelCardProps> = ({
    car,
    isMobile = false,
}) => {
    const renderModelInfo = () => {
        return isMobile ? (
            <Stack spacing={1}>
                <Text component="span" weight={600}>
                    {car.bodyType}
                </Text>
                <Text component="span" weight={700}>
                    {car.modelName}
                </Text>
                <Text component="span">{car.modelType}</Text>
            </Stack>
        ) : (
            <>
                <Text component="span" weight={600}>
                    {car.bodyType}
                </Text>
                <Group>
                    <Text component="span" weight={700}>
                        {car.modelName}
                    </Text>
                    <Text component="span">{car.modelType}</Text>
                </Group>
            </>
        );
    };

    return (
        <Stack className="car-model-card">
            <NextLink href={car.id} key={car.id}>
                <a className="car-model-card__goto">
                    <Stack>
                        {renderModelInfo()}
                        <Stack>
                            <Image
                                src={car.imageUrl}
                                alt="Volvo car model"
                                width={800}
                                height={600}
                            />
                        </Stack>
                    </Stack>
                </a>
            </NextLink>
            <Group
                position="center"
                spacing={20}
                sx={{
                    // style all children
                    "> *": {
                        color: "#1c6bba",
                        fontWeight: 600,
                        fontSize: "14px",
                        textTransform: "uppercase",
                    },
                    "> *:hover": {
                        color: "#141414",
                    },
                }}
            >
                <NextLink href={`/learn/${car.id}`}>
                    <a>
                        <Text>Learn {">"}</Text>
                    </a>
                </NextLink>
                <NextLink href={`/shop/${car.id}`}>
                    <a>
                        <Text>Shop {">"}</Text>
                    </a>
                </NextLink>
            </Group>
        </Stack>
    );
};

export default CarModelCard;
