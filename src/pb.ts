import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");

//тут мы создаем коллекцию серверов через код (тк через админку дольше)
const data = [
  {
    shop: "Intel Xeon E5-2630 v4",
    data: "1TB HDD",
    quantity: "16GB",
    discount: "",
  },
  {
    shop: "AMD Ryzen 7 3700X",
    data: "2TB HDD",
    quantity: "32GB",
    discount: "6000  руб./мес.",
  },
  {
    shop: "Intel Core i7-9700K",
    data: "500GB SSD",
    quantity: "16GB",
    discount: "7000  руб./мес.",
  },
  {
    shop: "Intel Xeon E5-2630 v4",
    data: "1TB HDD",
    quantity: "16GB",
    discount: "8000  руб./мес.",
  },
  {
    shop: "AMD Ryzen 7 3700X",
    data: "2TB HDD",
    quantity: "32GB",
    discount: "9000  руб./мес.",
  },
  {
    shop: "Intel Core i7-9700K",
    data: "500GB SSD",
    quantity: "16GB",
    discount: "10000  руб./мес.",
  },
  {
    shop: "",
    data: "",
    quantity: "",
    discount: "11000  руб./мес.",
  },
  {
    shop: "AMD Ryzen 7 3700X",
    data: "2TB HDD",
    quantity: "32GB",
    discount: "12000  руб./мес.",
  },
  {
    shop: "Intel Core i7-9700K",
    data: "500GB SSD",
    quantity: "16GB",
    discount: "13000  руб./мес.",
  },
  {
    shop: "Intel Xeon E5-2630 v4",
    data: "1TB HDD",
    quantity: "16GB",
    discount: "14000  руб./мес.",
  },
  {
    shop: "AMD Ryzen 7 3700X",
    data: "2TB HDD",
    quantity: "32GB",
    discount: "15000  руб./мес.",
  },
  {
    shop: "Intel Core i7-9700K",
    data: "500GB SSD",
    quantity: "16GB",
    discount: "16000  руб./мес.",
  },
  {
    shop: "Intel Xeon E5-2630 v4",
    data: "1TB HDD",
    quantity: "16GB",
    discount: "17000  руб./мес.",
  },
  {
    shop: "AMD Ryzen 7 3700X",
    data: "2TB HDD",
    quantity: "32GB",
    discount: "18000  руб./мес.",
  },
  {
    shop: "Intel Core i7-9700K",
    data: "500GB SSD",
    quantity: "16GB",
    discount: "19000  руб./мес.",
  },
  {
    shop: "Intel Xeon E5-2630 v4",
    data: "1TB HDD",
    quantity: "16GB",
    discount: "20000  руб./мес.",
  },
  {
    shop: "AMD Ryzen 7 3700X",
    data: "2TB HDD",
    quantity: "32GB",
    discount: "21000  руб./мес.",
  },
  {
    shop: "Intel Core i7-9700K",
    data: "500GB SSD",
    quantity: "16GB",
    discount: "22000  руб./мес.",
  },
  {
    shop: "Intel Xeon E5-2630 v4",
    data: "1TB HDD",
    quantity: "16GB",
    discount: "23000  руб./мес.",
  },
  {
    shop: "AMD Ryzen 7 3700X",
    data: "2TB HDD",
    quantity: "32GB",
    discount: "24000  руб./мес.",
  },
];
export async function createServers() {
  for (let i = 0; i < data.length; i++) {
    await pb.collection("servers").create(data[i]);
  }
}
