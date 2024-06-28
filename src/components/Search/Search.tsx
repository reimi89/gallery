"use client"
import React from "react";
import { InstantSearch } from "react-instantsearch-dom";
import { connectSearchBox } from "react-instantsearch-dom";
import { connectHits } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
   process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '',
   process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ''
);

const CustomSearchBox = ({ currentRefinement, refine }: any) => (
  <input
    type="text"
    placeholder="Поиск арта..."
    value={currentRefinement}
    onChange={(e) => refine(e.target.value)}
    className="w-full p-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
);

const SearchInput = connectSearchBox(CustomSearchBox);

const Search = () => {
  const ProductCard = ({ product }: any) => (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="font-bold text-xl">Price: ${product.price}</div>
      </div>
    </div>
  );
  const CustomHits = connectHits(({ hits }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {hits.map((hit) => (
        <ProductCard key={hit.objectID} product={hit} />
      ))}
    </div>
  ));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <InstantSearch
        searchClient={searchClient}
        indexName="development_strapi-store"
      >
        <div className="p-4">
          <SearchInput />
        </div>
        <CustomHits />
      </InstantSearch>
    </div>
  );
};

export default Search;