import CarModelCard from "./CarModelCard";
import { Carousel } from "@mantine/carousel";
import { breakpoints } from "../../public/breakpoints";
import { useViewportSize } from "@mantine/hooks";

import type { Car } from "../../public/api/types";

interface CarModelsProps {
    cars: Car[];
}

const CarModels: React.FC<CarModelsProps> = ({ cars = [] }) => {
    const { width: viewPortWidth } = useViewportSize();

    const _slideSize =
        viewPortWidth > breakpoints.md
            ? "25%"
            : viewPortWidth > breakpoints.sm
            ? "55%"
            : "60%";

    const _slideHeight = viewPortWidth > breakpoints.md ? "300" : "600";

    const isMobile = viewPortWidth <= breakpoints.md;

    return (
        <Carousel
            key={_slideSize}
            height={_slideHeight}
            /* Transition styles from mantine */
            styles={{
                indicator: {
                    width: "8px",
                    height: "8px",
                    backgroundColor: "rgba(20, 20, 20, 0.4)",

                    "&[data-active]": {
                        backgroundColor: "rgba(20, 20, 20)",
                    },
                },
                indicators: {
                    bottom: "-15%",
                },
                controls: {
                    bottom: "-100%",
                    justifyContent: "right",
                    gap: "1rem",
                },
            }}
            slideSize={_slideSize}
            withControls={!isMobile}
            withIndicators={isMobile}
            align="start"
            containScroll="keepSnaps"
            slideGap="lg"
        >
            {cars.map((car) => (
                <Carousel.Slide key={car.id}>
                    <CarModelCard car={car} isMobile={isMobile} />
                </Carousel.Slide>
            ))}
        </Carousel>
    );
};

export default CarModels;
