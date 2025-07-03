import { Divider, Link } from "@heroui/react";

export default function Footer() {
  return (
    <>
      <Divider />
      <div className="flex flex-col flex-nowrap items-center justify-center gap-2 p-4 sm:flex-col">
        <p className="font-semibold">Contact Us:</p>
        <div className="flex flex-col flex-wrap items-center sm:flex-row sm:gap-4">
          <Link isExternal href="tel:+61426989789" color="foreground">
            +61 426 989 789
          </Link>
          <Link
            isExternal
            showAnchorIcon
            href="https://luxenergy.com.au/"
            color="foreground"
          >
            luxenergy.com.au/
          </Link>
          <Link
            isExternal
            href="mailto:jordan@luxenergy.com.au"
            color="foreground"
          >
            jordan@luxenergy.com.au
          </Link>
        </div>
      </div>
    </>
  );
}
