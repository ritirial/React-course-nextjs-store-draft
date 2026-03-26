import { LuUser } from "react-icons/lu";
import { currentUser, auth } from "@clerk/nextjs/server";
import Image from "next/image";

async function UserIcon() {
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="avatar"
        className="w-6 h-6 rounded-full object-cover"
        width={24}
        height={24}
        sizes="(max-width:768px) 10vw,(max-width:1200px) 5vw, 5vw"
      />
    );
  }

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
