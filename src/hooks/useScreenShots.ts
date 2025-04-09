import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { ScreenShot } from "../entities/ScreenShots";


const useScreenShots = (game_pk: number) => {
    const apiClient = new APIClient<ScreenShot>(`/games/${game_pk}/screenshots`);

    return useQuery({
        queryKey: ["screenShots", game_pk],
        queryFn: apiClient.getAll
    });
}

export default useScreenShots;