import { docsGetListOfProjects } from "@/lib/fsUtils";
import Link from "next/link";
import Icon from "@hackclub/icons";
import { Footer } from "@/components/footer";

export default function Home({ packages }: { packages: string[]}) {
  return (
    <>
    <div className="text-center">
      <section>
        <h1 className="text-4xl">Please select a package</h1>
      </section>
      <br />
      <section>
        <ul className="mb-3">
        {packages.map((val, i) => {
          return (
            <li key={i}>
              <Link className="bg-white text-black p-3 rounded-lg hover:bg-blue-500 text-2xl" href={`/${val}/`}>
                {val}
              </Link>
            </li>
          )
        })}
        </ul>
      </section>
    </div>
    <Footer />
    </>
  )
}

export const getStaticProps = (async (_ctx: any) => {
  const packages = await docsGetListOfProjects();
  return {
    props: {
      packages
    }
  }
});
