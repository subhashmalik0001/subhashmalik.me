import ImageKit from "imagekit";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || "dummy_public_key";
const privateKey = process.env.PRIVATE_KEY || "dummy_private_key";
const urlEndpoint =
  process.env.NEXT_PUBLIC_URL_ENDPOINT || "https://ik.imagekit.io/dummy";

export const imagekit = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
});
