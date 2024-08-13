import * as request from "./requester";
const baseUrl = "http://localhost:3030/data/stories";
// might need to add previous url jsonstore/games
const urlForCreating = "http://localhost:3030/data/stories";
export const getAll = async () => {
  const result = await request.get(baseUrl);
  //console.log(result);
  
  return result
};
const getLatestGames = async () => {
  const urlSearchParams = new URLSearchParams({
    sortBy: '_createdOn desc',
    pageSize: 3,
  });

  const result = await request.get(`${baseUrl}?${urlSearchParams.toString()}`);
  const latestGames = Object.values(result);
  return latestGames;
};

export const getOne = (storyId) => request.get(`${baseUrl}/${storyId}`);

const create = (storyData) => request.post(`${baseUrl}`, storyData);
const remove = (storyId) => request.del(`${baseUrl}/${storyId}`);
const update = (storyId, storyData) =>
  request.put(`${baseUrl}/${storyId}`, storyData);

const storiesAPI = {
  getOne,
  getAll,
  create,
  remove,
  update,
  getLatestGames,
};
export default storiesAPI;