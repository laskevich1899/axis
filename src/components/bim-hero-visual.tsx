import Image from "next/image";

export function BimHeroVisual() {
  return (
    <Image
      src="/bim-workflow-diagram.png"
      alt="BIM workflow: multidisciplinary federated model, scan to BIM, clash detection and coordinated documents"
      fill
      className="object-cover object-center"
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}
