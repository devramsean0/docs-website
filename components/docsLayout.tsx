import { DocsSidebar } from "./docsSidebar";
import { Footer } from "./footer";

export function DocsLayout({ packageName, version, data, children }: { packageName: string, version: string, data: any, children: any}) {
    return (
        <>
            <section className="grid grid-cols-[max-content_1fr] grid-rows-[max-content_1fr]">
                <h1 className="text-4xl">{packageName} Docs</h1>
                <h2 className="text-2xl">  {version}</h2>
                <DocsSidebar data={data} packageName={packageName} version={version} />
                {children}
            </section>
            <Footer />
        </>
    )
}