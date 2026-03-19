import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://kotauth.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = 'Kotauth';
const TWITTER_HANDLE = '@InumanSoul';

interface PageSEOProps {
  /** Tab title — will be appended with " — Kotauth" unless it already contains the brand */
  title: string;
  /** Meta description — keep under 160 chars */
  description: string;
  /** Route path, e.g. "/features". Defaults to "/" */
  path?: string;
  /** OG image URL. Defaults to the global og-image.png */
  image?: string;
  /** OG type — "website" for all pages except blog posts */
  type?: 'website' | 'article';
}

export function PageSEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
}: PageSEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
