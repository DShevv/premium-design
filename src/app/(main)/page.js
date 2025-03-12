import Hero from "@/blocks/Hero/Hero";
import OurProjects from "@/blocks/OurProjects/OurProjects";
import Services from "@/blocks/Services/Services";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";
import BackButton from "@/components/Buttons/BackButton/BackButton";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import InlineButton from "@/components/Buttons/InlineButton/InlineButton";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import MenuButton from "@/components/Buttons/MenuButton/MenuButton";
import SearchButton from "@/components/Buttons/SearchButton/SearchButton";
import Checkbox from "@/components/Inputs/Checkbox/Checkbox";
import MainInput from "@/components/Inputs/MainInput/MainInput";
import SearchInput from "@/components/Inputs/SearchInput/SearchInput";
import Pagination from "@/components/Pagination/Pagination";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <OurProjects />
    </>
  );
}
