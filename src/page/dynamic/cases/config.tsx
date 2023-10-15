import { DYNAMIC_ROUTES } from "@/widget/Navigation/routes";

import { AiChatbotsPage } from "./AiChatbots/AiChatbots";
import { DigitalAssetPage } from "./DigitalAsset/DigitalAsset";
import { FoodDeliveryPage } from "./FoodDelivery/FoodDelivery";
import { FpaPage } from "./Fp&a/Fp&a";
import { HealthMonitoringPage } from "./HealthMonitoring/HealhMonitoring";
import { InsurancePage } from "./Insurance/Insurance";
import { IntegrationSDKPage } from "./IntegrationSDK/IntegrationSDK";

export type DynamicType = Record<string, JSX.Element>;

export const ROUTES_CONFIG: DynamicType = {
  [DYNAMIC_ROUTES.INSURANCE]: <InsurancePage />,
  [DYNAMIC_ROUTES.FPA_SOLUTION]: <FpaPage />,
  [DYNAMIC_ROUTES.DIGITAL_ASSET]: <DigitalAssetPage />,
  [DYNAMIC_ROUTES.FOOD_DELIVERY]: <FoodDeliveryPage />,
  [DYNAMIC_ROUTES.HEALTH_MONITORING]: <HealthMonitoringPage />,
  [DYNAMIC_ROUTES.AI_CHATBOTS]: <AiChatbotsPage />,
  [DYNAMIC_ROUTES.INTEGRATION_SDK]: <IntegrationSDKPage />,
};
