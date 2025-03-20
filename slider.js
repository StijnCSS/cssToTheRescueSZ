// Code van Sanne
const ranges = document.querySelectorAll('[type="range"]');

const updateRange = range => {
    const rangeName = range.name; // The name of the input (e.g., "gradientPercent")
    const rangeValue = range.value; // The value of the slider (e.g., 50)
    
    // Set the custom property for the root (document.documentElement)
    document.documentElement.style.setProperty("--" + rangeName, rangeValue + "%");
};

ranges.forEach(range => {
    // Set the initial value of the custom property when the document loads
    updateRange(range);
    
    // Update the custom property when the slider value changes
    range.oninput = () => {
        updateRange(range);
    };
});