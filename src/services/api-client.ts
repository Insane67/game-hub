import axios,{CanceledError} from "axios";

//özel configurasyon ile axios un instance ını yaratırız.
export default axios.create({
  baseURL:"https://api.rawg.io/api",
  params: {
    key: "bf23279a442341fa89c97ad1be3b3b29",
  },
});


export {CanceledError};
