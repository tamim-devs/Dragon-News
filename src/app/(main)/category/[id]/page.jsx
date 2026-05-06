import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/RightSidebar";
import { getCatgories, getNewsByCatgoriesId } from "@/lib/data";
import Image from "next/image";





const NewsCategoryPage = async({params}) => {
    const {id} = await params;
    console.log(id,"params");
    
  const categories = await getCatgories();
  console.log("categories", categories.news_category);
  
  const news = await getNewsByCatgoriesId(id)
  console.log("news",news);
  

  return (
    <div className="grid grid-cols-3 gap-4 my-14 mx-auto">
    <div>
           <LeftSidebar activeId={id} categories={categories} />
    </div>
    <div className="">
     <h2 className="space-y-4 mt-6 font-bold">News By Category</h2>
     <div className="space-y-4 col-span-6 p-6">
      {news.length > 0 ? (
         news.map((n)=>{
        return(
          <NewsCard news={n} key={n._id}>

        </NewsCard>
        )
      })
      ):(
        <h2 className="text-2xl font-bold">No News Found</h2>
      )}
     </div>
    </div>
    <div>
      <RightSidebar/>
    </div>
  </div>
  )
    
  
}

export default NewsCategoryPage