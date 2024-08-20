import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { OneNewsType } from "@/types/trpc";

const NewsCard = ({ onenews }: { onenews: OneNewsType }) => {
  return (
    <Card className="w-[300px] h-full ">
      <CardHeader>
        {!onenews.image?.includes("transparent.gif") && (
          <img src={onenews.image} className="" />
        )}
        <CardTitle className="break-all my-2">{onenews.title}</CardTitle>
        <CardDescription>{onenews.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex  items-end  justify-end ">
          <p>{onenews.analyze}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
