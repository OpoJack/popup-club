import Image from "next/image";
import type { Link } from "~/types/types";

export default function SocialMedia({ links }: { links: Link }) {
  if (links) {
    return <InstagramLink link={links.Instagram} />;
  } else return <></>;
}

function InstagramLink({ link }: { link: string | null }) {
  return (
    <a
      target={"_blank"}
      rel={"noreferrer"}
      href={link ?? "/"}
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
