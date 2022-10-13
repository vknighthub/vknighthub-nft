/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "tippy.js/dist/tippy.css";
import { buyModalShow } from "../../redux/counterSlice";

const CategoryItem = () => {
  const { sortedtrendingCategoryItemData } = useSelector(
    (state) => state.nfttransaction
  );
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
      {sortedtrendingCategoryItemData.map((item, index) => {
        const {
          unit,
          thumbnail,
          unit_name,
          price
        } = item;
        const image = (thumbnail && thumbnail.thumbnail.toString().startsWith("ipfs://")) ? thumbnail.thumbnail.toString().replace("ipfs://", "https://ipfs.io/ipfs/") : ''

        return (
          <article key={index}>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                <Link
                  href={
                    {
                      pathname: '/item/[asset]',
                      query: {
                        asset: unit
                      }
                    }
                  }
                  passHref={true}
                >
                  <a>
                    <img
                      src={image}
                      alt="item 5"
                      className="w-full h-[230px] rounded-[0.625rem] object-cover"
                    />
                  </a>
                </Link>
              </figure>
              
              <div className="mt-7 flex items-center justify-between">
                <Link
                  href={
                    {
                      pathname: '/item/[asset]',
                      query: {
                        asset: unit
                      }
                    }
                  }
                  passHref={true}
                >
                  <a>
                    <span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
                      {unit_name}
                    </span>
                  </a>
                </Link>

              </div>
              <div className="mt-2 text-sm flex">

                <span className="dark:text-jacarta-400 text-jacarta-700 text-xl  mr-1">
                  {price / 1000000}
                </span>
                <span className="-ml-1" data-tippy-content="ada">
                  <svg className="icon mr-1 h-5 w-5">
                    <use xlinkHref="/icons.svg#icon-ada"></use>
                  </svg>
                </span>

              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  className="text-accent font-display text-sm font-semibold"
                  onClick={() => dispatch(buyModalShow())}
                >
                  Buy now
                </button>
                <Link
                  href={
                    {
                      pathname: '/item/[asset]',
                      query: {
                        asset: unit
                      }
                    }
                  }
                  passHref={true}
                >
                  <a className="group flex items-center">
                    <svg className="icon icon-history group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                      <use xlinkHref="/icons.svg#icon-history"></use>
                    </svg>
                    <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">
                      View History
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default CategoryItem;
