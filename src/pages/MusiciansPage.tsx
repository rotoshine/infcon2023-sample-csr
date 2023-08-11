import Layout from "../components/Layout";
import { Suspense } from "react";
import Musicians from "../components/Musicians";

export default function MusiciansPage() {

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="flex justify-center mt-20">
            <span className="loading loading-dots loading-lg" />
          </div>
        }
      >
        <Musicians />
      </Suspense>
    </Layout>
  );
}
