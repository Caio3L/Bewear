"use client";

import Image from "next/image";
import React from "react";

interface Brand {
  id: string;
  name: string;
  logo?: string;
  description?: string;
}

const brands: Brand[] = [
  {
    id: "nike",
    name: "Nike",
    logo: "/Nike_metal.png",
  },
  {
    id: "adidas",
    name: "Adidas",
    logo: "/Adidas_metal.png",
  },
  {
    id: "puma",
    name: "Puma",
    logo: "/Puma_metal.png",
  },
  {
    id: "new-balance",
    name: "New Balance",
    logo: "/NewBalance_metal.png",
  },
  {
    id: "converse",
    name: "Converse",
    logo: "/Converse_Metal.png",
  },
  {
    id: "polo",
    name: "Polo",
    logo: "/Polo_Metal.png",
  },
  {
    id: "zara",
    name: "Zara",
    logo: "/Zara_Metal.png",
  },
];

const BrandList = ({ title }: { title: string }) => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex min-w-[120px] flex-col items-center rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/20"
          >
            <div className="mb-2 flex h-10 w-10 items-center justify-center">
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                  <span className="text-sm font-bold text-white">
                    {brand.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <h4 className="text-center text-xs font-medium text-gray-900 dark:text-gray-100">
              {brand.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
