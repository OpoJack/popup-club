import Image from "next/image";
import type { Link } from "~/types/types";

export default function SocialMedia({ links }: { links: Link }) {
  return <InstagramLink links={links} />;
}

function InstagramLink({ links }: { links: Link }) {
  return (
    <a
      target={"_blank"}
      rel={"noreferrer"}
      href={links.url ?? "/"}
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
