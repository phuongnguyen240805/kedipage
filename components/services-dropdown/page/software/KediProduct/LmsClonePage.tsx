import ClientEdutech from '../Edutech/client';
import type { ProductMascotKey } from '../shared/edutech-product/mascots';

/**
 * Exact UI/content clone of /edutech for the Kedi product routes.
 *
 * Important: this intentionally reuses the single Edutech implementation
 * (markup + CSS + GSAP motion) instead of copying those heavy files into
 * every product route. Each route remains independent and can be given its
 * own content later without duplicating the LMS UI foundation.
 */
export default function LmsClonePage({ routeKey }: { routeKey?: ProductMascotKey }) {
  return <ClientEdutech routeKey={routeKey} />;
}
