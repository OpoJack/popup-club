import { HeartIcon, ShareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Link } from "~/types/types";

export default function SocialMedia({ links }: { links: Link }) {
  return (
    <>
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
      <ShareIcon fill="black" width={17} height={17} className="" />{" "}
      <HeartIcon fill="red" width={17} height={17} className="" />
    </>
  );
}
