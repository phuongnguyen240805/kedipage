import KediProductPage from '../KediProductPage';
import { productConfigs } from '../product-config';

export default function Page() {
  return <KediProductPage config={productConfigs['kedi-ai-flow']} />;
}
