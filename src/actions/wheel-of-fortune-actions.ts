"use server";

import { Product } from "@/sanity.types";
import { createClient } from "next-sanity";

export const getWheelOfFortuneConfiguration = async () => {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
        useCdn: true,
    });

    const randomProducts = await client.fetch<Product[]>(
        `*[_type == "product"][0..6]`
    );

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const winningIndex = (day * 31 + month * 12 + year) % randomProducts.length;

    return {
        randomProducts,
        winningIndex,
    }
}