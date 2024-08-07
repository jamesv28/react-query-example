import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import fetchRequest from "./utils/utils";
const Items = ({ items }) => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchRequest.get("/"),
  });
  console.log(data);
  if (isLoading) return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  if (isError) {
    return <p style={{ marginTop: "1rem" }}>Error occurred: {error}</p>;
  }
  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
