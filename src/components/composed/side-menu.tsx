import React from "react";
import {
  LinkScrollList,
  LinkScrollListProps,
} from "@/components/composed/link-scroll-list";

export function SideMenu({ props }: LinkScrollListProps) {
  return (
    <div>
      <LinkScrollList props={props} className="h-[70vh] w-48" />
    </div>
  );
}
