import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import BobbingImageComponent from "~/components/BobbingImage";
import CircleImage from "~/components/CircleImage";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (    
  
    <div className="flex flex-col bg-amber-50 h-screen w-screen justify-center items-center font-sans">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-8xl font-bold ">Hi, I'm Tino!</h1>
      </div>
      <BobbingImageComponent className="max-w-full p-12" src="/18623316_1573700579307742_5216684127861034928_o.jpg"/>
      <div>
        <h1 className="text-6xl font-bold text-center">Full page coming soon!</h1>
      </div>
    </div>
  );
};

export default Home;
