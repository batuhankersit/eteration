import MainLayout from "@/components/Layout";
import { useApp } from "@/context/AppContext";
import { IProduct } from "@/models/product.model";
import { appService } from "@/service";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

export interface PathItem {
  params: { [key: string]: any };
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: Array<PathItem> = [];
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const rewriteId = context.params?.["rewriteId"];
  const productDetail = await appService.getProductDetailWithId(
    rewriteId?.toString() || ""
  );
  return {
    props: {
      productDetail,
    },
    revalidate: 30,
  };
};

interface Props {
  productDetail: IProduct;
}

function ProductDetail({ productDetail }: Props) {
  const { setNewItemToCart } = useApp();
  return (
    <MainLayout showLeftSide={false} showRightSide={true}>
      <div className="bg-white flex lg:flex-row flex-col p-[10px] w-full gap-[30px]">
        <div className="lg:w-1/2 w-full">
          <div className="w-full lg:h-full h-[500px] relative mb-[15px]">
            <Image
              quality={100}
              title={productDetail?.name}
              src={productDetail?.image}
              alt={productDetail?.name}
              priority
              fill
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-[10px]">
          <p className="text-[24px] mb-[10px]">{productDetail?.name}</p>
          <p className="text-primary text-[24px] mb-[50px]">
            {productDetail?.price}
          </p>
          <button
            onClick={() => setNewItemToCart(productDetail)}
            className="bg-primary text-white w-full rounded h-[38px] mb-[20px]"
          >
            Add to Cart
          </button>
          <p className="text-[18px]">{productDetail?.description}</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProductDetail;
