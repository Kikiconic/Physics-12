import Image from "next/image";
import electricFieldLines from "../public/electric-field-lines-reference.png";

export default function ElectricFieldBackground() {
  return (
    <div className="electric-field-background">
      <Image
        src={electricFieldLines}
        alt="Electric field lines pointing outward from a positive charge and inward toward a negative charge"
        priority
      />
    </div>
  );
}
