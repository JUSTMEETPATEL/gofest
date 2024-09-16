import Hero from "@/components/Hero";
import BannerStrip from "@/components/BannerStrip"
import Carousel from "@/components/Carousel"
import Details from "@/components/Details"
import Why from "@/components/Why"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div >
      <section>
        <Hero />
        <BannerStrip />
        <Carousel />
        <Details />
        <Why/>
      </section>
    </div>
  );
}
