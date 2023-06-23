import { Outlet } from "@remix-run/react";

export default function Films() {
  return (
    <div className="container mx-auto py-10">
      <Outlet />
    </div>
  );
}
