import Image from "next/image";
import Link from "next/link";
import type { TLink } from "~/types/types";

export default function SocialMedia({ links }: { links: TLink }) {
  if (links) {
    return <InstagramLink link={links.Instagram} />;
  } else return <></>;
}

function InstagramLink({ link }: { link: string | null }) {
  return (
    <Link
      target={"_blank"}
      rel={"noreferrer"}
      href={link ?? "#"}
      className="hover:cursor-pointer"
    >
      <Image
        src={"/instagram.svg"}
        width={17}
        height={17}
        className="hover:cursor-pointer"
        alt="Instagram"
      />
    </Link>
  );
}
