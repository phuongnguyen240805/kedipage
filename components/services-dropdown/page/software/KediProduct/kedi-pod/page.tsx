import ProductLandingPage from '../../shared/edutech-product/ProductLandingPage';
import { kediPodConfig } from '../../shared/edutech-product/products/kedi-pod';

export default function Page() {
  return <ProductLandingPage config={kediPodConfig} />;
}
