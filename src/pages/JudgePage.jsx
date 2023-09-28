import { ConnectWallet } from "@thirdweb-dev/react";

import Judge from "../components/Judge";

export default function JudgePage() {
  return (
    <>
    <ConnectWallet />
      <Judge/>
    </>
  );
}
