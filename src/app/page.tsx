"use client";
import React from "react";

import ProductPage from "./products/page";

import About from "./about/page";
import FAQ from "@/Components/FAQ";
import WhyUs from "@/Components/whyUs";
import Blogs from "@/Components/Blog";
import SocialMedias from "@/Components/SocialMedias";
import HomePage from "./home/page";
import { SWRConfig } from "swr";
import swrConfig from "@/shared/swrConfig";
import Services from "@/Components/Services";
import ProductListPage from "@/Components/Products";

function page() {
  return (
    <div className="bg-white">
      <SWRConfig value={swrConfig}>
        <HomePage />
        <Services />
        <ProductListPage />

        <WhyUs />
        <FAQ />
        <Blogs />
        <About />
      </SWRConfig>
    </div>
  );
}

export default page;
