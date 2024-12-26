import React, { useState } from "react";

const ColorMixer = () => {
  // State to track selected colors
  const [selectedColors, setSelectedColors] = useState([]);

  // Colors with corresponding RGBA values for gradient
  const colorValues = {
    red: "rgba(226, 12, 12, 0.5)", // Red with opacity
    blue: "rgba(0, 0, 255, 0.5)", // Blue with opacity
    yellow: "rgba(255, 255, 0, 0.5)", // Yellow with opacity
  };

  // Handle checkbox selection
  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      // If color is already selected, remove it
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      // Add the selected color to the list
      setSelectedColors([...selectedColors, color]);
    }
  };

  // Calculate the background style for the div
  const calculateDivStyle = () => {
    if (selectedColors.length === 0) {
      return { backgroundColor: "white" }; // Default white
    } else if (selectedColors.length === 1) {
      return { backgroundColor: selectedColors.map((color) => colorValues[color])[0] }; // Single color
    } else {
      // Gradient for multiple colors
      return {
        background: `linear-gradient(to right, ${selectedColors
          .map((color) => colorValues[color])
          .join(", ")})`,
      };
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Color Mixer</h2>

      {/* Radio Buttons */}
      <div className="mb-3">
        {["red", "blue", "yellow"].map((color) => (
          <div key={color} className="form-check form-check-inline">
            <input
              type="checkbox"
              id={`checkbox-${color}`}
              className="form-check-input"
              onChange={() => handleColorChange(color)}
            />
            <label htmlFor={`checkbox-${color}`} className="form-check-label">
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </label>
          </div>
        ))}
      </div>

      {/* Color Display Div */}
      <div
        style={{
          ...calculateDivStyle(),
          width: "100%",
          height: "200px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
};

export default ColorMixer;
