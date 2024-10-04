export function TypographyH4({ children, moreStyle }) {
  return (
    <h4 className={`text-xl font-medium scroll-m-20 ${moreStyle}`}>
      {children}
    </h4>
  );
}
