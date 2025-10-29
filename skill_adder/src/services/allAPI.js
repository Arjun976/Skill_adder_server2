import commonAPI from "./commonAPI";
import { serverURL } from "./serverURL";

// Add resume to the server - POST - reqBody
// Its called by steps component
export const addSkillAPI = async (reqBody) => {
  const url = `${serverURL}/Skill`;
  return await commonAPI("POST", url, reqBody);
}

export const getSkillAPI = async () => {
  const url = `${serverURL}/Skill`;
  return await commonAPI("GET", url);
};
