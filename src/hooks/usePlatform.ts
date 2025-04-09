import Platform from "../entities/Platform";
import usePlatforms from "./usePlatforms";

const usePlateform = (id?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms?.results.find((p: Platform) => p.id === id);
};

export default usePlateform;