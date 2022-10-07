import { getCars } from "../public/api/utils";
import CarModels from "../src/components/CarModels";
import Header from "../src/components/Header";
import { Container } from "@mantine/core";

import type { Car } from "../public/api/types";
import type { GetServerSideProps } from "next";

interface HomeProps {
    cars: Car[];
    carsByCategory: Record<string, number>;
}

const HomePage: React.FC<HomeProps> = ({ cars, carsByCategory }) => {
    return (
        <Container size={1200}>
            <Header carsByCategory={carsByCategory} />
            <CarModels cars={cars} />
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const filterBy = query?.q as undefined | string;

    const { cars, carsByCategory } = await getCars(filterBy);

    return {
        props: {
            cars,
            carsByCategory,
        },
    };
};

export default HomePage;
