import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-primary-dark)] text-gray-400 py-16 px-8"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-[family-name:var(--font-heading)]">
              ROJAS PHOTOGRAPHY
            </h4>
            <p className="text-sm leading-relaxed">
              Premium professional corporate headshots and business photography
              for the Central Valley and beyond.
            </p>
          </div>
          <nav>
            <h4 className="text-white font-bold text-sm mb-6 tracking-wider">
              SERVICES
            </h4>
            <ul className="text-sm space-y-3">
              <li>
                <Link
                  href="/premium-headshots"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  In-Studio Headshots
                </Link>
              </li>
              <li>
                <Link
                  href="/on-site-photography"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  On-Site Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  Commercial Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/video"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  Video Services
                </Link>
              </li>
              <li>
                <Link
                  href="/event-photography"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  Event Photography
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 className="text-white font-bold text-sm mb-6 tracking-wider">
              LOCATIONS
            </h4>
            <ul className="text-sm space-y-3">
              <li>Modesto</li>
              <li>Stockton</li>
              <li>Fresno</li>
              <li>Turlock</li>
              <li>Sacramento</li>
              <li>East Bay</li>
            </ul>
          </nav>
          <div>
            <h4 className="text-white font-bold text-sm mb-6 tracking-wider">
              CONTACT
            </h4>
            <p className="text-sm mb-2">
              <a
                href="tel:2093803727"
                className="hover:text-[var(--color-primary-light)] transition-colors"
              >
                209-380-3727
              </a>
            </p>
            <p className="text-sm mb-4">
              <a
                href="mailto:alfonso@rojasphotography.net"
                className="hover:text-[var(--color-primary-light)] transition-colors"
              >
                alfonso@rojasphotography.net
              </a>
            </p>
            <p className="text-sm">Modesto, CA 95350</p>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Rojas Photography. Professional
            Corporate Headshots in Modesto, Stockton, Fresno, Turlock,
            Sacramento &amp; East Bay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
