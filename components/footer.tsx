import Link from "next/link";

export function Footer() {
    return (
        <section id="footer" className="absolute inset-x-0 bottom-0">
                <h2>&copy; Sean Outram and individual package contributors 2023</h2>
                <p>
                    All linked documentation is under the MIT License unless explicitly specified
                </p>
                <span className="text-blue-300"><Link href="https://github.com/devramsean0">GitHub</Link> | <Link href="https://sean.cyou">Main Site</Link></span>
        </section>
    )
}