import { MouseEventHandler, Dispatch } from 'react';

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit";
    textStyles?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    rightIcon?: string;
}

export interface SearchManufacturerProps {
    searchManufacturer: string;
    setSearchManufacturer: (searchManufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: string;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    year: number;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
}

export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface SearchProps {
    setManufacturer: Dispatch<React.SetStateAction<string>>;
    setModel: Dispatch<React.SetStateAction<string>>;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
    setFilter: Dispatch<React.SetStateAction<string>>;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: Dispatch<React.SetStateAction<number>>;
}