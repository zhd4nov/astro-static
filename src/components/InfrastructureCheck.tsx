import type { SiteIdentity } from "../lib/site";

type InfrastructureCheckProps = Readonly<{
  identity: SiteIdentity;
}>;

export function InfrastructureCheck({ identity }: InfrastructureCheckProps) {
  return (
    <p>
      {identity.name}: {identity.purpose}
    </p>
  );
}
