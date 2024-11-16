import Footer from "@/components/footer";
import Content from "@/components/main";
import Navigationbar from "@/components/navigation";

export default function Home() {
  return (
    <>
      <div>
        <Navigationbar />
        <Content />
        <Footer />
      </div>
    </>
  );
}
