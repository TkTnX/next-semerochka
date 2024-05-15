"use client";
import { Button, Slider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

type CategoryFilter = {
  maxPrice: number;
  minPrice: number;
  setFromPrice: (value: number) => void;
  setToPrice: (value: number) => void;
  isMobile: boolean;
  setOpenFilter?: (b: boolean) => void;
};

const CategoryItemsFilter: React.FC<CategoryFilter> = ({
  maxPrice,
  minPrice,
  setFromPrice,
  setToPrice,
  isMobile = false,
  setOpenFilter,
}) => {
  const [value, setValue] = useState([minPrice, maxPrice]);

  useEffect(() => {
    setValue([minPrice, maxPrice]);
  }, [maxPrice, minPrice]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFromPrice(value[0]);
    setToPrice(value[1]);
    if (setOpenFilter !== undefined) {
      setOpenFilter(false);
    }
  };



  const handleClearSort = () => {
    setFromPrice(0);
    setToPrice(0);
    if (setOpenFilter !== undefined) {
      setOpenFilter(false);
    }
  };

  const handleSliderChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handleInputChange = (event: any) => {
    //   @ts-ignore
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  return (
    <div className={` ${!isMobile ? "hidden lg:block" : "block"} w-64 pl-2`}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h3 className="mb-10 bg-gray-100 p-3 font-bold">Фильтр</h3>
        <div className="flex items-center justify-between mb-4">
          <h6>Цена</h6>
          <button
            type="button"
            onClick={handleClearSort}
            className="bg-gray-100  py-1 px-2 "
          >
            Очистить
          </button>
        </div>
        <div className="flex items-center gap-6">
          <TextField
            variant="outlined"
            value={value[0]}
            disabled
            size="small"
            onChange={handleInputChange}
            inputProps={{
              step: 10,
              min: minPrice,
              max: maxPrice,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
          <p className="font-bold text-2xl">-</p>
          <TextField
            variant="outlined"
            value={value[1]}
            disabled
            size="small"
            onChange={handleInputChange}
            inputProps={{
              step: 10,
              min: minPrice,
              max: maxPrice,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </div>

        <Slider
          min={minPrice}
          max={maxPrice}
          getAriaLabel={() => "20"}
          value={value}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          color="primary"
          disableSwap
        />

        <Button
          type="submit"
          color="warning"
          sx={{
            color: "#fff",
            width: "100%",
            borderRadius: "4px",
            fontSize: "16px",
            mt: "20px",
          }}
          variant="contained"
        >
          Применить
        </Button>
      </form>
    </div>
  );
};

export default CategoryItemsFilter;
