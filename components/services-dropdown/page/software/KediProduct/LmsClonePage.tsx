import ClientEdutech from '../Edutech/client';

/**
 * Exact UI/content clone of /edutech for the Kedi product routes.
 *
 * Important: this intentionally reuses the single Edutech implementation
 * (markup + CSS + GSAP motion) instead of copying those heavy files into
 * every product route. Each route remains independent and can be given its
 * own content later without duplicating the LMS UI foundation.
 */
export default function LmsClonePage() {
  return <ClientEdutech />;
}
