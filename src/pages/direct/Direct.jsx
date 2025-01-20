import React from "react";
import Layout from "../layout/layouts";
import DirectToken from "./include/DirectToken";
export default function Direct() {
  return (
    <Layout>
      <div className="px-6 mt-6">
        <DirectToken />
      </div>
    </Layout>
  );
}
