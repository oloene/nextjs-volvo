import CarModelCard from "./CarModelCard";
import { Carousel } from "@mantine/carousel";
import { breakpoints } from "../../public/breakpoints";
import { useViewportSize } from "@mantine/hooks";
import { useRouter } from "next/router";

import type { Car } from "../../public/api/types";

interface CarModelsProps {
    cars: Car[];
}

const CarModels: React.FC<CarModelsProps> = ({ cars = [] }) => {
    const { width: viewPortWidth } = useViewportSize();
    const router = useRouter();

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
            key={`${_slideSize}_${router.query.q}`}
            height={_slideHeight}
            /* Override mantine styles */
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
                    padding: "1rem 0 ",
                },
                controls: {
                    bottom: "-100%",
                    justifyContent: "right",
                    gap: "1rem",

                    " > [tabindex='-1']": {
                        opacity: "0.5 !important",
                        cursor: "not-allowed",
                    },
                },
            }}
            slideSize={_slideSize}
            withControls={!isMobile}
            withIndicators={isMobile}
            slidesToScroll={isMobile ? 1 : 4}
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
