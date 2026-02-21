import { useParams } from "react-router-dom";

const BuyPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Buy Product</h1>

        <p className="mb-2">Product ID: {id}</p>

        <input
          type="number"
          placeholder="Quantity"
          className="w-full border p-2 mb-4 rounded"
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Confirm Purchase
        </button>
      </div>
    </div>
  );
};

export default BuyPage;
