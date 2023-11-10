import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Fields() {
  return (
    <div className="mx-auto max-w-screen-lg p-4">
      <h1 className="text-2xl font-bold mb-4">Your Top Fields Are</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div>
    </div>
  );
}

export default Fields;
