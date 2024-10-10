export function TypographyH2({ children, moreStyle }) {
  return (
    <h4
      className={`text-4xl font-semibold text-accent scroll-m-20 ${moreStyle}`}
    >
      {children}
    </h4>
  );
}
