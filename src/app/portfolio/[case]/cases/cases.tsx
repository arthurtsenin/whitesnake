import { DYNAMIC_ROUTES } from "@/widget/Navigation/routes";

import { AiChatbots } from "./AiChatbots/AiChatbots";
import { DigitalAsset } from "./DigitalAsset/DigitalAsset";
import { FoodDelivery } from "./FoodDelivery/FoodDelivery";
import { Fpa } from "./Fp&a/Fp&a";
import { HealthMonitoring } from "./HealthMonitoring/HealhMonitoring";
import { Insurance } from "./Insurance/Insurance";
import { IntegrationSDK } from "./IntegrationSDK/IntegrationSDK";

export type DynamicType = Record<string, JSX.Element>;

export const ROUTES_CONFIG: DynamicType = {
  [DYNAMIC_ROUTES.INSURANCE]: <Insurance />,
  [DYNAMIC_ROUTES.FPA_SOLUTION]: <Fpa />,
  [DYNAMIC_ROUTES.DIGITAL_ASSET]: <DigitalAsset />,
  [DYNAMIC_ROUTES.FOOD_DELIVERY]: <FoodDelivery />,
  [DYNAMIC_ROUTES.HEALTH_MONITORING]: <HealthMonitoring />,
  [DYNAMIC_ROUTES.AI_CHATBOTS]: <AiChatbots />,
  [DYNAMIC_ROUTES.INTEGRATION_SDK]: <IntegrationSDK />,
};
