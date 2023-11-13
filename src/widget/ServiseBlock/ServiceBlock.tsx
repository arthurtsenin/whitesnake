import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type TechnologiesDataType = {
  id: number;
  image: StaticImageData;
  text: string;
};

type ServiceBlockProps = {
  mainImage: StaticImageData;
  title: string;
  subtitle: string;
  description: Array<string>;
  technologiesData: Array<TechnologiesDataType>;
};
export const ServiceBlock: FC<ServiceBlockProps> = ({
  mainImage,
  title,
  subtitle,
  description,
  technologiesData,
}) => {
  return (
    <div>
      <div>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
          {description.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <p>We can help with:</p>
          <div>
            {technologiesData.map((item) => (
              <div key={item.id}>
                <Image alt="" src={item.image} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Image src={mainImage} alt="" />
      </div>
    </div>
  );
};
