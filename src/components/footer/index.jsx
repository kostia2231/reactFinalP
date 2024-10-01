import { TypographyH1 } from "../ui/typographyH1";
import { TypographyH2 } from "../ui/typographyH2";
import { TypographyH4Muted } from "../ui/typographyH4Muted";
import InstLogo from "../../assets/svg/inst.svg";
import WALogo from "../../assets/svg/wa.svg";

export default function Footer() {
  return (
    <>
      <footer className="p-8">
        <div className="py-8">
          <TypographyH1 content="Contact" />
        </div>
        <div className="grid grid-cols-[2fr_1fr] gap-8">
          <div className="p-8 rounded-xl bg-secondary">
            <div className="mb-4">
              <TypographyH4Muted content="Phone" />
            </div>
            <TypographyH2 content="+49 30 915-88492"></TypographyH2>
          </div>
          <div className="p-8 rounded-xl bg-secondary">
            <div className="mb-4">
              <TypographyH4Muted content="Socials" />
            </div>
            <div className="flex gap-4">
              <img src={InstLogo} alt="Instagram Logo" />
              <img src={WALogo} alt="WhatsApp Logo" />
            </div>
          </div>
          <div className="p-8 rounded-xl bg-secondary">
            <div className="mb-4">
              <TypographyH4Muted content="Address" />
            </div>
            <TypographyH2 content="Wallstraẞe 9-13, 10179 Berlin, Deutschland"></TypographyH2>
          </div>
          <div className="p-8 rounded-xl bg-secondary">
            <div className="mb-4">
              <TypographyH4Muted content="Working Hours" />
            </div>
            <TypographyH2 content="24 hours a day"></TypographyH2>
          </div>
        </div>
      </footer>
    </>
  );
}
