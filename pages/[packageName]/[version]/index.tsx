import { DocsLayout } from "@/components/docsLayout";
import { DocsSidebar } from "@/components/docsSidebar";
import { Footer } from "@/components/footer";
import { docsGetListOfProjects, docsGetListOfProjectVersions, docsGetProjectVersion, docsGetReadmeFromProject } from "@/lib/fsUtils";
import { GetStaticPathsContext } from "next";
import { ProjectParser } from "typedoc-json-parser";

export default function PackageVersionHome({ packageName, readme, version, data }: { packageName: string, readme: string, version: string, data: any}) {
    return (
        <>
            <DocsLayout packageName={packageName} version={version} data={data}>
                <div dangerouslySetInnerHTML={{ __html: readme }} className="border-2 border-neutral-700"></div>
            </DocsLayout>
        </>
    )
}
export async function getStaticPaths(ctx: GetStaticPathsContext) {
    const paths: any[] = []
    const projects = await docsGetListOfProjects();
    for (const project of projects) {
        const versions = await docsGetListOfProjectVersions(project);
        for (const version of versions) {
            paths.push({
                params: {
                    packageName: project,
                    version
                }
            })
        }
    }
    return { paths, fallback: false }
}
export async function getStaticProps(ctx: any) {
    const { packageName, version } = ctx.params;
    const readme = await docsGetReadmeFromProject(String(packageName), String(version));
    const data = await docsGetProjectVersion(packageName, version);
    const parser = new ProjectParser({ data })
    const json = JSON.stringify(parser)
    return {
        props: {
            packageName,
            readme,
            version,
            data: json
        }
    }
}