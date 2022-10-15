import Loader from "./loader";

export async function Cardano() {
    await Loader.load();
    return Loader.Cardano;
};
