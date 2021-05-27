import React, { useState } from "react";
import ContainerApp from "../../components/containerApp";
import useCar from "../../core/useCar";
import { CarResponse } from "../../core/types";
import CarouselView from "../../components/carouselView";
import Card from "../../components/card";
import SearchBox from "../../components/searchBox"
import { Spinner } from "vcc-ui";

const HomePage = (props: any) => {
    const { data, isPending } = useCar();
    const [searchField, setSearchField] = useState("");

    const filteredCars = (data: CarResponse) => {
        if (data) {
            const { cars } = data;
            return cars.filter((item) =>
                item.bodyType.toLowerCase().includes(searchField.toLowerCase())
            );
        }
    };
    const handleChange = (e: any) => {
        setSearchField(e.target.value);
    };
    const renderCardList = (filteredCars: any) => {
        return filteredCars.map((item: any) => (
            <Card
                key={item.id}
                header={{
                    title: item.modelName,
                    subtitle: item.modelType,
                    descriptionTop: item.bodyType,
                }}
                content={{
                    image: item.imageUrl,
                }}
                actions={["Learn", "Shop"]}
                arrow="right"
            />
        ));
    };

    return (
        <div>
            {!isPending && data ? (
                <div>
                    <ContainerApp
                        children={
                            <div>
                                <SearchBox onChange={handleChange} searchField={searchField} />
                                <CarouselView
                                    isRTL={false}
                                    itemsToShow={4}
                                    children={renderCardList(filteredCars(data))}
                                />
                            </div>
                        }
                        title={"All Recharge models "}
                    />
                </div>
            ) : (
                    <Spinner size={100} color="gray" />
                )}
        </div>
    );
};

export default HomePage;