import * as pmtiles from "pmtiles"; // it does not have default export

const Compression = pmtiles.Compression;

async function nativeDecompress(buf: any, compression: any) {
  if (compression === Compression.None || compression === Compression.Unknown) {
    return buf;
  } else if (compression === Compression.Gzip) {
    return buf;
  } else {
    throw Error("Compression method not supported");
  }
}

const CACHE = new pmtiles.ResolvedValueCache(1000, undefined, nativeDecompress);

export const handler = () => {
  console.log(CACHE);
  return true;
};
