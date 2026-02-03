import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
  { name: "Running", imgUrl: "Group 6.png" },
  { name: "Tennis", imgUrl: "Group 7.png" },
  { name: "Basketball", imgUrl: "Group 8.png" },
  { name: "Football", imgUrl: "Group 9.png" },
  { name: "Badminton", imgUrl: "Group 10.png" },
  { name: "Swimming", imgUrl: "Group 11.png" },
];

const CategoriesSection = () => {
  return (
    <section id="category-section" className="container mx-auto pb-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>

      <div className="grid grid-cols-6 gap-12 mt-8">
        {categoryList.map((category, index) => (
          <div key={index} className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center">
            <div className="self-center">
              <img src={`images/categories/${category.imgUrl}`} width={86} height={86} alt={category.name} className="mb-[10px]"/>
              <div className="text-primary font-medium text-xl"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
