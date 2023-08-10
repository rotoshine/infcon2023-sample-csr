import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { fetchMusicians } from "../api";

export default function MusiciansPage() {
  const { data } = useQuery<
    {
      slug: string;
      name: string;
      bio: string;
      profileImageUrl: string;
    }[]
  >(["musicians"], fetchMusicians);

  return (
    <Layout>
      <div className="min-h-screen container pt-4 mx-auto border-neutral-content">
        <div className="grid grid-cols-4 gap-16">
          {data?.map((musician, i) => (
            <div key={i} className="card w-96 bg-info-content shadow-xl">
              <figure>
                <img
                  className="w-full h-96 object-cover"
                  src={`https://api.infcon2023.roto.codes${musician.profileImageUrl}`}
                  alt="이디어츠 프로필"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{musician.name}</h2>
                <p>{musician.bio}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/musicians/${musician.slug}/`}
                    className="btn btn-primary"
                  >
                    자세히 보기
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
