import Link from "next/link"

export function DocsSidebar({ data, packageName, version }:{ data: any, packageName: string, version: string}) {
    const Data = JSON.parse(data)
    return (
        <div>
            <details>
                <summary className="text-2xl">Namespaces</summary>
                <ul>
                    {Data.namespaces.map((val: any, i: any) => {
                        return (
                            <li key={i}>
                                <Link href={`/${packageName}/${version}/namespace/${val.name}`}>{val.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </details>
            <details>
                <summary className="text-2xl">Classes</summary>
                <ul>
                    {Data.classes.map((val: any, i: any) => {
                        return (
                            <li key={i}>
                                <Link href={`/${packageName}/${version}/class/${val.name}`}>{val.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </details>
            <details>
                <summary className="text-2xl">Enums</summary>
                <ul>
                    {Data.enums.map((val: any, i: any) => {
                        return (
                            <li key={i}>
                                <Link href={`/${packageName}/${version}/enum/${val.name}`}>{val.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </details>
            <details>
                <summary className="text-2xl">Functions</summary>
                <ul>
                    {Data.functions.map((val: any, i: any) => {
                        return (
                            <li key={i}>
                                <Link href={`/${packageName}/${version}/function/${val.name}`}>{val.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </details>
            <details>
                <summary className="text-2xl">Interfaces</summary>
                <ul>
                    {Data.interfaces.map((val: any, i: any) => {
                        return (
                            <li key={i}>
                                <Link href={`/${packageName}/${version}/interface/${val.name}`}>{val.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </details>
            <details>
                <summary className="text-2xl">Type Aliases</summary>
                <ul>
                    {Data.typeAliases.map((val: any, i: any) => {
                        return (
                            <li key={i}>
                                <Link href={`/${packageName}/${version}/type-alias/${val.name}`}>{val.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </details>
            <br />
            <Link href={`/${packageName}`} className="bg-white text-black p-3 rounded-lg hover:bg-blue-500 text-2xl">Select Version</Link>
        </div>
    )
}