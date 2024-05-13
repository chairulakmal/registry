import * as Deimos6 from '../../registry/penumbra-testnet-deimos-6.json';
import * as Deimos7 from '../../registry/penumbra-testnet-deimos-7.json';
import * as Deimos8 from '../../registry/penumbra-testnet-deimos-8.json';

import { Base64AssetId, Chain, Rpc } from './registry';

export interface JsonRegistry {
  chainId: string;
  ibcConnections: Chain[];
  rpcs: Rpc[];
  assetById: Record<Base64AssetId, JsonMetadata>;
  stakingAssetId: Base64AssetId;
  numeraires: Base64AssetId[];
}

interface JsonMetadata {
  description?: string;
  denomUnits: DenomUnit[];
  base: string;
  display: string;
  name?: string;
  symbol: string;
  penumbraAssetId: PenumbraAssetId;
  images?: Image[];
}

interface DenomUnit {
  denom: string;
  exponent?: number;
}

interface PenumbraAssetId {
  inner: string;
}

interface Image {
  png?: string;
  svg?: string;
}

export const allJsonRegistries: Record<string, JsonRegistry> = {
  'penumbra-testnet-deimos-6': Deimos6,
  'penumbra-testnet-deimos-7': Deimos7,
  'penumbra-testnet-deimos-8': Deimos8,
};