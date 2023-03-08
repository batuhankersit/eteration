import MainLayout from "@/components/Layout";
import ProductList from "@/features/ProductList";

export default function Home() {
  return (
    <MainLayout showLeftSide={true} showRightSide={true} >
      <ProductList/>
    </MainLayout>
  );
}
