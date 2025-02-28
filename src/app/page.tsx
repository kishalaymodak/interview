import { Card } from "@/components/ui/card";
import { getdata } from "../../actions/data";

export default async function Home() {
  const data = await getdata();
  return (
    <>
      <div className="flex  w-screen h-screen items-center justify-center">
        <div className="grid grid-cols-4 gap-2">
          {data.map((data) => {
            return (
              <div
                key={data.title}
                className=" border rounded-2xl flex flex-col h-72 w-80"
              >
                <div className=" rounded-2xl  ">
                  <img
                    className="rounded-2xl w-80 h-40"
                    src={data.img}
                    alt=""
                  />
                </div>
                <div>
                  <div className=" border-b-2 pt-2">
                    <h1 className="text-2xl">{data.title}</h1>
                  </div>
                  <div className="p-2"> {data.des}</div>
                  <button className="bg-amber-500 w-15 h-8 rounded ">
                    Click
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
