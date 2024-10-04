import { TypographyH1 } from "../ui/typo/typographyH1";
import { TypographyH2 } from "../ui/typo/typographyH2";
import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";
import InstLogo from "../../assets/svg/inst.svg";
import WALogo from "../../assets/svg/wa.svg";

export default function Footer() {
  return (
    <>
      <footer className="p-8 mt-16">
        <div className="py-8">
          <TypographyH1>Contact</TypographyH1>
        </div>
        <div className="grid grid-cols-[2fr_1fr] gap-8">
          <div className="p-8 rounded-xl bg-secondary">
            <div className="mb-4">
              <TypographyH4Muted>Phone</TypographyH4Muted>
            </div>
            <TypographyH2>+49 30 915-88492</TypographyH2>
          </div>
          <div className="p-8 rounded-xl bg-secondary">
            <div className="mb-4">
              <TypographyH4Muted>Socials</TypographyH4Muted>
            </div>
            <div className="flex gap-4">
              <img src={InstLogo} alt="Instagram Logo" />
              <img src={WALogo} alt="WhatsApp Logo" />
            </div>
          </div>
          <div className="p-8 rounded-xl bg-secondary">
            <div className="mb-4">
              <TypographyH4Muted>Address</TypographyH4Muted>
            </div>
            <TypographyH2>
              Wallstraẞe 9-13, 10179 Berlin, Deutschland
            </TypographyH2>
          </div>
          <div className="p-8 rounded-xl bg-secondary">
            <div className="mb-4">
              <TypographyH4Muted>Working Hours</TypographyH4Muted>
            </div>
            <TypographyH2>4 hours a day</TypographyH2>
          </div>
        </div>
      </footer>
    </>
  );
}
