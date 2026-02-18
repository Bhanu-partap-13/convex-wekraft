"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Doc } from "../../convex/_generated/dataModel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const HeaderProfile = () => {
  const user: Doc<"users"> | undefined | null = useQuery(
    api.users.getCurrentUser,
  );
  return (
    <div>
      <Avatar className="h-10 w-10">
        <AvatarImage src={user?.imageUrl} />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default HeaderProfile;
