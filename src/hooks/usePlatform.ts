import usePlatforms from "./usePlatforms";

const usePlateform = (id?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms?.results.find((p) => p.id === id);
};

export default usePlateform;