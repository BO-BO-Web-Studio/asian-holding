import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@widgets/header";
import { MainBanner } from "@widgets/mainBanner";
import { PhotoGallery } from "@widgets/photoGallery";
import { SearchBar } from "@widgets/searchBar";
import { ProjectsSection } from "@widgets/projects";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Asian Holding</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainBanner />
      <ProjectsSection />
      <SearchBar />
      <PhotoGallery />
    </>
  );
}
