import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { fetchMusician } from "../api";

export default function MusicianDetailPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const { data, isLoading } = useQuery<{
    slug: string;
    name: string;
    bio: string;
    description: string;
    profileImageUrl: string;
    backgroundImageUrl: string;
  }>(["musicians", slug], () => fetchMusician(slug));
  if (!data) {
    return null;
  }
  return (
    <Layout>
      {isLoading && <span className="loading loading-dots loading-lg" />}
      <div
        className="h-96 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(https://api.infcon2023.roto.codes${data.backgroundImageUrl})`,
        }}
      ></div>
      <div className="flex gap-12 px-16 -mt-16 object-cover">
        <img
          className="rounded-full w-32 h-32"
          src={`https://api.infcon2023.roto.codes${data.profileImageUrl}`}
          alt={`${data.name} 프로필`}
        />
        <div className="flex-col">
          <div className="text-4xl font-bold text-primary-content mt-6">
            {data.name}
          </div>
          <div
            className="text-secondary-content"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <a className="btn btn-primary" href="/musicians/">
          목록으로
        </a>
      </div>
    </Layout>
  );
}