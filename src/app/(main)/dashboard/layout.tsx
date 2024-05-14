import { SubscriptionModalProvider } from "@/lib/providers/subscription-modal-provider";
import { getActiveProductsWithPrice } from "@/lib/supabase/queries";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<LayoutProps> = async ({ children, params }) => {
  try {
    const { data: products, error } = await getActiveProductsWithPrice();
    if (error) throw new Error();
    return (
      <main className="flex over-hidden h-screen">
        <SubscriptionModalProvider products={products}>
          {children}
        </SubscriptionModalProvider>
      </main>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    // Handle the error or log it to the console
  }
};

export default Layout;
