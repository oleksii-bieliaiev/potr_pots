import Image from "next/image";
import Header from "./components/Header";
import ForWhom from "./components/ForWhom";
import ForWhomSecond from "./components/ForWhomSecond";
import Features from "./components/Features";
import Team from "./components/Team";
import Materials from "./components/Materials";

export default function Home() {
  return (
    <main className="relative scroll-smooth bg-white h-screen box-border overflow-x-hidden">
      <Header/>
      <ForWhom />
      <ForWhomSecond/>
      <Features />
      <Team />
      <Materials />
    </main>
  );
}
