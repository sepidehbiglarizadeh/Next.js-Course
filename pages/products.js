import Image from "next/image";

const Products = () => {
  return ["1","2","3","4"].map((path)=>{
    return (
      <div>
        <Image src={`/images/${path}.jpg`} width="800" height="400" quality={30} />
      </div>
    )
  });
}
 
export default Products;