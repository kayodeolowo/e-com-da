"use client"
import { useParams } from 'next/navigation';
import Image from 'next/image';
import products from "@/data/products.json"; // Adjust the path if necessary

const ProductDetails = () => {

  const { id } = useParams();

  // Ensure product data is loaded
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <Image src={`/${product.imageUrl}`} alt={product.name} width={500} height={500} className="mb-4" />
      <p className="text-xl font-semibold mb-2">Price: {product.price}</p>
      <div className="flex items-center mb-2">
        <div className="flex space-x-1">
          {Array.from({ length: product.rating }, (_, index) => (
            <span key={index} className="text-yellow-400 fill-current">
              ★
            </span>
          ))}
        </div>
      </div>
      <p> {product.desc}</p>
      <button className="bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded-2xl">
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
