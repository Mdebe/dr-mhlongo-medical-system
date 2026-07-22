import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "fill"> & {
  wrapperClassName?: string;
};

export function SafeFillImage({ wrapperClassName, className, alt,...props }: Props) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", wrapperClassName)}>
      <Image fill alt={alt} className={cn("object-cover", className)} {...props} />
    </div>
  );
}