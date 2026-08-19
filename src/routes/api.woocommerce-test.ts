import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/woocommerce-test")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const baseUrl = process.env.WOOCOMMERCE_URL;
          const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
          const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;

          if (!baseUrl || !consumerKey || !consumerSecret) {
            return Response.json(
              {
                success: false,
                error: "WooCommerce environment variables are missing.",
              },
              { status: 500 },
            );
          }

          const cleanBaseUrl = baseUrl.replace(/\/$/, "");

          const credentials = Buffer.from(
            `${consumerKey}:${consumerSecret}`,
          ).toString("base64");

          const response = await fetch(
            `${cleanBaseUrl}/wp-json/wc/v3/products?per_page=5`,
            {
              method: "GET",
              headers: {
                Authorization: `Basic ${credentials}`,
                Accept: "application/json",
              },
            },
          );

          if (!response.ok) {
            const errorText = await response.text();

            return Response.json(
              {
                success: false,
                status: response.status,
                error: "WooCommerce API request failed.",
                details: errorText,
              },
              { status: response.status },
            );
          }

          const products = await response.json();

          return Response.json({
            success: true,
            connected: true,
            productCount: Array.isArray(products) ? products.length : 0,
            products: Array.isArray(products)
              ? products.map((product) => ({
                  id: product.id,
                  name: product.name,
                  status: product.status,
                  price: product.price,
                  stockStatus: product.stock_status,
                }))
              : [],
          });
        } catch (error) {
          console.error("WooCommerce connection error:", error);

          return Response.json(
            {
              success: false,
              connected: false,
              error:
                error instanceof Error
                  ? error.message
                  : "Unknown WooCommerce connection error.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});
