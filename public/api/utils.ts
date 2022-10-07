import fsPromises from "fs/promises";
import path from "path";
import type { Car } from "./types";

interface GetCarsReturnType {
    cars: Car[];
    carsByCategory: Record<string, number>;
}

/**
 * Mocks a fetch function for reading cars with optional filter
 */
export async function getCars(filterBy?: string): Promise<GetCarsReturnType> {
    const filePath = path.join(process.cwd(), "/public/api/cars.json");
    const jsonData = (await fsPromises.readFile(filePath)) as unknown as string;

    const cars = JSON.parse(jsonData);

    const carsByCategory = getCarsByCategory(cars);

    if (filterBy && filterBy !== "all") {
        const filteredCars = cars.filter(
            (car: Car) => car.bodyType === filterBy
        );

        return {
            cars: filteredCars,
            carsByCategory,
        };
    }

    return {
        cars: cars,
        carsByCategory,
    };
}

/**
 * Gets number of cars by category, example:
    {
        "all": 10,
        "sedan": 5,
        "suv": 5
    }
 */
export function getCarsByCategory(cars: Car[]): Record<string, number> {
    const defaultCategory = { all: cars.length };

    return cars.reduce((acc: Record<string, number>, curr) => {
        if (acc[curr.bodyType]) acc[curr.bodyType] += 1;
        else acc[curr.bodyType] = 1;
        return acc;
    }, defaultCategory);
}
