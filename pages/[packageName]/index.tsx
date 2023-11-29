import { Footer } from "@/components/footer";
import { docsGetListOfProjects, docsGetListOfProjectVersions } from "@/lib/fsUtils";
import Link from "next/link";
import { useRouter } from "next/router";

export default function VersionSelector({ versions }: { versions: string[]}) {
    const router = useRouter();
    const { packageName } = router.query;
    // Types of versions 
    const mainVersions = versions.filter((val) => val.startsWith("v"));
    const currentBranchVersions = versions.filter((val) => val.startsWith("current-branch"))
    const historicBranchVersions = versions.filter((val) => val.startsWith("branch"))
    const currentPullRequestVersions = versions.filter((val) => val.startsWith("current-pull"))
    const historicPullRequestVersions = versions.filter((val) => val.startsWith("pull"))
    return (
        <>
    <div className="text-center">
      <section>
        <h1 className="text-4xl">Please select a version</h1>
      </section>
      <br />
      <section id="mainVersions">
        <ul className="mb-3 grid grid-cols-6 gap-10">
        {mainVersions.map((val, i) => {
          return (
            <li key={i}>
              <Link className="bg-white text-black p-3 rounded-lg hover:bg-blue-500 text-2xl" href={`/${packageName}/${val}/`}>
                {val}
              </Link>
            </li>
          )
        })}
        </ul>
      </section>
      <section id="otherVersions">
        <details>
            <summary>Branch Versions</summary>
            <ul>
            {currentBranchVersions.map((val, i) => {
                return (
                    <li key={i}>
                        <Link className="text-white" href={`/${packageName}/${val}/`}>
                            {val}
                        </Link>
                    </li>
                )
            })}
            </ul>
        </details>
        <details>
            <summary>Pull Request Versions</summary>
            <ul>
            {currentPullRequestVersions.map((val, i) => {
                return (
                    <li key={i}>
                        <Link className="text-white" href={`/${packageName}/${val}/`}>
                            {val}
                        </Link>
                    </li>
                )
            })}
            </ul>
        </details>
        <details>
            <summary>Historic Branch Versions</summary>
            <ul>
            {historicBranchVersions.map((val, i) => {
                return (
                    <li key={i}>
                        <Link className="text-white" href={`/${packageName}/${val}/`}>
                            {val}
                        </Link>
                    </li>
                )
            })}
            </ul>
          </details>
          <details>
            <summary>Historic Pull Request Versions</summary>
            <ul>
            {historicPullRequestVersions.map((val, i) => {
                return (
                    <li key={i}>
                        <Link className="text-white" href={`/${packageName}/${val}/`}>
                            {val}
                        </Link>
                    </li>
                )
            })}
            </ul>
        </details>
      </section>
    </div>
    <Footer />
    </>
    )
}
export async function getStaticPaths() {
    const directories = await docsGetListOfProjects();
    const paths = directories.map((post) => ({
        params: { packageName: post },
    }))
    return { paths, fallback: false }
}
export async function getStaticProps(ctx: any) {
    const packageName = ctx.params.packageName;
    const versions = await docsGetListOfProjectVersions(packageName);
    return {
        props: {
            versions
        }
    }
}