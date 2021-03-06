const capitalizeFirstLetter = (str) =>
  str && typeof str === "string"
    ? str.charAt(0).toUpperCase() + str.slice(1)
    : str;

export default capitalizeFirstLetter;
