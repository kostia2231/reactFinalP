import { TypographyH4 } from "../ui/typo/typographyH4";

export default function ListSalesItem({ item }) {
  return (
    <>
      {item.discont_price === null || (
        <div className="flex flex-col items-center justify-center gap-4 mb-auto">
          <div className="bg-slate-400 h-[350px] w-[316px] rounded-xl"></div>
          {/* <img src={item.image} alt="Sales Image" /> */}
          <div className="grid gap-4">
            <div>
              <TypographyH4 moreStyle="w-[316px]">{item.title}</TypographyH4>
            </div>
            <div className="flex gap-4">
              <p className="text-[40px] mt-auto leading-none font-semibold text-accent">
                ${item.price}
              </p>
              <p className="mt-auto text-xl font-medium line-through text-muted">
                ${item.discont_price}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
