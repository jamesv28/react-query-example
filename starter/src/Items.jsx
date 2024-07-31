import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import fetchRequest from "./utils/utils";
const Items = ({ items }) => {
  const res = useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchRequest.get("/"),
  });
  console.log(res);
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
