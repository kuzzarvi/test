import React, {FC} from "react";
import {SliderProps} from "./types.ts";

import './index.css';

export const Slider: FC<SliderProps> = ({
                                            label,
                                            unit,
                                            value,
                                            min,
                                            max,
                                            step,
    onChange
                           }) => {
    return <div className="slider-block">
        <div className="slider-info">
            <label className="slider-label">{label}</label>
            <span className="slider-value">
              {value} <span className="slider-unit">{unit}</span>
            </span>
        </div>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="custom-range"
        />
        <div className="slider-footer">
            <span>{`${min} ${unit}`}</span>
            <span>{`${max} ${unit}`}</span>
        </div>
    </div>
}

Slider.displayName="Slider";