import { getCurrentSession } from "@/actions/auth";
import { getWheelOfFortuneConfiguration } from "@/actions/wheel-of-fortune-actions";
import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";
import WheelOfFortune from "@/components/layout/WheelOfFortune";
import ProductGrid from "@/components/product/ProductGrid";
import { getAllProducts } from "@/sanity/lib/client";

const Home = async () => {
    const { user } = await getCurrentSession();

    const products = await getAllProducts();

    const { randomProducts, winningIndex } = await getWheelOfFortuneConfiguration();

    return (
        <div>
          <SalesCampaignBanner />
          <WheelOfFortune
            products={randomProducts}
            winningIndex={winningIndex}
          />

          <section className='container mx-auto py-8'>
            <ProductGrid products={products} />
          </section>
        </div>
    );
}

export default Home;