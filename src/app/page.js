import Banner from "@/Components/Banner/Banner";
import FeaturedRooms from "@/Components/FeaturedRooms/FeaturedRooms";
import FeaturedTours from "@/Components/FeaturedTours/FeaturedTours";
import { bookingPost } from "../../_actions/bookingPost";

export default async function Home() {
  const { data, errMsg } = await bookingPost();
  if (errMsg) return <h1>{errMsg}</h1>;

  return (
    <div className="mx-auto max-w-7xl">
      <Banner />
      <FeaturedRooms />
      <FeaturedTours />
      {
        data.map(item => (
          <div key={item._id} className="bg-red-600 text-white text-center">
            <h3>{item.name}</h3>
            <p>{item.title}</p>
          </div>
        ))
      }
    </div>
  );
}
