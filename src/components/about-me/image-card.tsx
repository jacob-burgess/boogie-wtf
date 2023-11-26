import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";
import Image from "next/image";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";

export type ImageCardProps = {
  src: string | StaticImport;
  alt: string;
  caption?: string;
};

const ImageCard = ({ src, alt, caption }: ImageCardProps) => {
  return (
    <Card className="w-full lg:max-w-sm">
      <CardHeader>
        <CardDescription>{caption}</CardDescription>
      </CardHeader>
      <CardContent className="m-0 p-0">
        <Image alt={alt} src={src} className="w-full" />
      </CardContent>
    </Card>
  );
};

export default ImageCard;
