import axios from "axios";
import endpoints from "./endpoints";

export const Services = {
    getRooms: () => axios.get(endpoints.rooms),
    getOptions: () => axios.get(endpoints.options),
   
}