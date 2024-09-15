export const getData = async (endpoint) => {
  const res = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
};

const getFilteredData = async (category) => {
  const products = await getData("http://localhost:3000/api/allproducts");
  return products.allData.filter((item) => item.category === category);
};

export const getManSneaker = () => getFilteredData("Men's Sneaker");
export const getMenPant = () => getFilteredData("Men's Pants");
export const getManBoot = () => getFilteredData("Men's Boot");
export const getManBag = () => getFilteredData("Bag");
export const getManCap = () => getFilteredData("Cap");
export const getManEarPhone = () => getFilteredData("Earphones");
export const getBottle = () => getFilteredData("Bottle");