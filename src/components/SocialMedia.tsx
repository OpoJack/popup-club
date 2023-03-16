import Image from "next/image";
import type { Link } from "~/types/types";

export default function SocialMedia({ link }: { link: Link }) {
  return <InstagramLink link={link} />;
}

function InstagramLink({ link }: { link: Link }) {
  return (
    <a
      target={"_blank"}
      rel={"noreferrer"}
      href={link.url ?? "/"}
      className="hover:cursor-pointer"
    >
      <Image
        src={"/instagram.svg"}
        width={17}
        height={17}
        className="hover:cursor-pointer"
        alt="Instagram"
      />
    </a>
  );
}
