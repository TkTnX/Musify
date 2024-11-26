"use client";

import { LucideLoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <LucideLoaderCircle className="animate-spin " size={60} />
    </div>
  );
};

export default Loading;
