export default function DiscountBadge({ discount, moreStyle }) {
  return (
    <>
      <div
        className={`${moreStyle} right-0 px-2 py-1 h-fit text-white border-0 rounded-md bg-primary`}
      >
        -{discount}%
      </div>
    </>
  );
}
