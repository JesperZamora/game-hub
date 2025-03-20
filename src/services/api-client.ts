import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "852c65983f56468fb078e4222b6399ca"
    },
});