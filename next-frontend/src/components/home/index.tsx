"use client"

import React from "react";
import Hero from "@/components/home/hero";
import Categories from "@/components/home/categories";
import NewArrival from "@/components/home/newarrivals";
import PromoBanner from "@/components/home/promobanner";
import BestSeller from "@/components/home/bestseller";
import CountDown from "@/components/home/countdown";
import Testimonials from "@/components/home/testimonials";
import Newsletter from "@/components/common/Newsletter";
import userCounterStore from "@/stores/counterStore";

function Home() {

  const { count, inc, dec }: any = userCounterStore()

  return (
    <main>
      <Hero />
      <div className="max-w-[1170px] text-center w-full mx-auto px-4 py-4 sm:px-8 xl:px-0">
        <button onClick={inc} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Increment</button>
        <h1 className="text-2xl font-bold text-center">Counter: { count }</h1>
          <button onClick={dec} className="bg-black text-white rounded-lg px-4 py-2">Decrement</button>      
      </div>
      <Categories />
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      <CountDown />
      <Testimonials />
      <Newsletter />
    </main>
  );
}

export default Home;
